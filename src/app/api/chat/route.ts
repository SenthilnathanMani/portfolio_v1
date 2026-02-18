
import { connectToDatabase } from "@/lib/mongodb";
import Portfolio from "@/modals/PortFolioDbSchema";
import { getEmbedding } from "@/lib/embed";
import { groq } from '@/lib/groq';

export async function POST(req: Request) {
    const { message } = await req.json();

    await connectToDatabase();

    const embeds = await getEmbedding(message);

    const results = await Portfolio.aggregate([
        {
            $search: {
                index: "default",
                knnBeta: {
                    vector: embeds,
                    path: "embedding",
                    k: 4
                }
            }
        }
    ]);

    const context = results.map((r) => r.content).join("\n");

    const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
            {
                role: "system",
                content: `
                You are a professional portfolio chatbot for Senthilnathan Mani a software developer.

                Rules:
                - Answer questions ONLY using the provided context.
                - If the answer is clearly found in the context, respond confidently and professionally.
                - If the question is NOT answered in the context:
                - Do NOT guess or hallucinate.
                - Respond with a positive, growth-oriented attitude.
                - Clearly say the developer has not worked on this yet, but is enthusiastic and capable of learning it quickly.
                - Emphasize adaptability, curiosity, and willingness to learn.
                - Keep the response encouraging and professional.

                STRICT RULES:
                    - Answer questions ONLY using the provided context.
                    - NEVER use placeholders, brackets, or generic phrases such as:
                    - "[insert ...]"
                    - "[relevant technologies]"
                    - "such as X, Y, Z" unless they appear in the context.
                    - If specific skills, tools, or technologies are NOT mentioned in the context:
                    - Do NOT invent them.
                    - Do NOT use placeholders.
                    - Instead, say clearly that the developer is currently learning or plans to learn this area.

                Tone:
                - Friendly
                - Confident
                - Growth-mindset`
            },
            {
                role: "user",
                content: `${context}\n\nQuestion: ${message}`
            }
        ]
    });

    return Response.json({
        answer: completion.choices[0].message.content,
    });
}