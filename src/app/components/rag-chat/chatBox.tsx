"use client";
import { useRef, useState } from "react";

export default function ChatBox() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  async function send() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
    });
    const data = await res.json();
    setChat([...chat, "You: " + msg, "Bot: " + data.answer]);
    setMsg("");
    setTimeout(() => {
      ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="border p-3 h-80 overflow-y-auto" ref={ref}>
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
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <button onClick={send} className="bg-black text-white px-4 py-2 mt-2">
        Send
      </button>
    </div>
  );
}
