import { pipeline, env } from "@xenova/transformers";

env.cacheDir = ".cache/transformers";
env.allowLocalModels = false;

let extractor: any;
let loadingPromise: Promise<any> | null = null;

async function loadExtractor() {
    if (extractor) return extractor;

    if (!loadingPromise) {
        loadingPromise = pipeline(
            "feature-extraction",
            "Xenova/all-MiniLM-L6-v2"
        )
            .then((p) => {
                extractor = p;
                return p;
            })
            .catch((err) => {
                loadingPromise = null;
                throw new Error(
                    `Failed to load embedding model: ${err instanceof Error ? err.message : err}`
                );
            });
    }

    return loadingPromise;
}

export async function getEmbedding(text: string): Promise<number[]> {
    if (!text || typeof text !== "string") {
        throw new Error("getEmbedding: input text must be a non-empty string");
    }

    try {
        const extractor = await loadExtractor();

        const output = await extractor(text, {
            pooling: "mean",
            normalize: true,
        });

        if (!output?.data) {
            throw new Error("Embedding output is empty or malformed");
        }

        return Array.from(output.data);
    } catch (err) {
        console.error("[Embedding Error]", err);

        throw new Error(
            err instanceof Error
                ? err.message
                : "Unknown embedding generation error"
        );
    }
}
