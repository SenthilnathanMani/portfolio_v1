"use client";
import { useState } from "react";

export default function ChatBox() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  async function send() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
    });
    const data = await res.json();
    setChat([...chat, "You: " + msg, "Bot: " + data.answer]);
    setMsg("");
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="border p-3 h-80 overflow-y-auto">
        {chat.map((c, i) => (
          <p key={i} className="mb-2">
            {" "}
            {c}{" "}
          </p>
        ))}
      </div>
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="border w-full p-2 mt-2"
        placeholder="Ask about me..."
      />
      <button onClick={send} className="bg-black text-white px-4 py-2 mt-2">
        Send
      </button>
    </div>
  );
}
