import { redirect } from "next/navigation";
import { parsePdfAndSend } from "./actions";

export default function IngestPage() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Private PDF Ingestion</h1>

      <form action={parsePdfAndSend} className="space-y-4">
        <input type="file" name="file" accept="application/pdf" required />

        <button className="px-4 py-2 bg-black text-white rounded">
          Upload & Ingest
        </button>
      </form>
    </main>
  );
}
