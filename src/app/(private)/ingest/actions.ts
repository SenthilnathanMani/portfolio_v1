"use server";
import { extractText } from "unpdf";

export async function parsePdfAndSend(formData: FormData) {
    if (process.env.NODE_ENV !== "development") {
        throw new Error("Not allowed");
    }

    const file = formData.get("file") as File | null;
    if (!file) throw new Error("No file");

    const buffer = Buffer.from(await file.arrayBuffer());

    const uint8Array = new Uint8Array(buffer);

    const text = await extractText(uint8Array);

    await fetch("http://localhost:3000/api/ingest-text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-ingest-secret": process.env.ADMIN_INGEST_KEY!,
        },
        body: JSON.stringify({ text: text.text.join("\n") }),
    });
}
