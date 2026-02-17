export async function getEmbedding(txt: string) {
    const res = await fetch("https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(txt)
    })
    const data = await res.json()
    return data[0]
}