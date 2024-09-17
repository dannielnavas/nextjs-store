"use client";

import { useChat } from "ai/react";

export default function Chat(props: { agent: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    // api: "api/chat", cambia la ruta de donde se muestra el chat
    initialMessages: [{ id: "1", role: "system", content: props.agent }],
  });

  return (
    <div>
      {messages
        .filter((m) => m.role !== "system")
        .map((m) => (
          <div key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
