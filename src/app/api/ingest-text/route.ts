import { connectToDatabase } from "@/lib/mongodb";
import Portfolio from "@/modals/PortFolioDbSchema";
import { getEmbedding } from "@/lib/embed";

export const runtime = "nodejs";

function chunkText(text: string, size = 800) {
    const chunks: string[] = [];
    for (let i = 0; i < text.length; i += size) {
        chunks.push(text.slice(i, i + size));
    }
    return chunks;
}

export async function POST(req: Request) {
    if (req.headers.get("x-ingest-secret") !== process.env.ADMIN_INGEST_KEY) {
        return new Response("Forbidden", { status: 403 });
    }

    const { text } = await req.json();

    if (!text || typeof text !== "string") {
        return new Response("Invalid payload", { status: 400 });
    }

    await connectToDatabase();
    await Portfolio.deleteMany({});

    const chunks = chunkText(text);

    for (const chunk of chunks) {
        try {
            const embedding = await getEmbedding(chunk);
            await Portfolio.create({ content: chunk, embedding });
        }
        catch (err) {
            console.error("Error processing chunk:", { chunk, error: err });
        }

    }

    return Response.json({
        success: true,
        chunks: chunks.length,
    });
}
