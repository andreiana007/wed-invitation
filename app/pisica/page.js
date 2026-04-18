"use client";
import { useState } from "react";

export default function PisicaPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "cat", text: "Miau. Întreabă-mă orice 🐾" },
  ]);

  const answers = [
    {
      keywords: ["biserica", "catedrala"],
      answer:
        "Catedrala romano-catolică Sfântul Iosif, Strada General Berthelot 19, București.",
    },
    {
      keywords: ["ceremonia", "ora"],
      answer: "Ora 12:50 (nu întârzia, pisica vă vede 👀)",
    },
    {
      keywords: ["petrecerea", "locatie", "unde"],
      answer:
        "La Terenuri – Ramada Plaza, București. Lângă terenurile de tenis, în spate. Vezi pinul de pe hartă.",
    },
    {
      keywords: ["cat tine"],
      answer: "Cât ne ține trupul, dar și capul 😏",
    },
    {
      keywords: ["persoane", "cati"],
      answer:
        "Vine exact cine ne dorim. Cool, funny, sportivi și nesportivi.",
    },
    {
      keywords: ["muzica"],
      answer:
        "Am ales-o noi doi, începe din secolul 19 până în 2026. Și o surpriză. Nu, nu cântă Cezar. Altceva! 🎶",
    },
    {
      keywords: ["martori"],
      answer: "Ildikó și Mandea/Șerban 💫",
    },
    {
      keywords: ["dress", "cod"],
      answer:
        "Ziua: mai formal, ca la o ceremonie religioasă, I guess, miau. Seara: pantofi sport & haine colorate – pas noir 👟",
    },
    {
      keywords: ["flori", "cadouri"],
      answer:
        "Un singur trandafir. Avem vazele pregătite. One flower, one vase! Vezi IMPORTANT.",
    },
    {
      keywords: ["rsvp", "confirm"],
      answer: "Confirmă prin formularul RSVP din site.",
    },
    {
      keywords: ["plus", "+1"],
      answer: "Da, se poate, dar menționează la RSVP 🙏",
    },
  ];

  const getAnswer = (text) => {
    const lower = text.toLowerCase();
    for (let item of answers) {
      if (item.keywords.some((k) => lower.includes(k))) {
        return item.answer;
      }
    }
    return "Miau… nu știu exact 😼 dar întreabă din nou sau vorbește cu Cezar.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const catReply = { from: "cat", text: getAnswer(input) };

    setMessages([...messages, userMessage, catReply]);
    setInput("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#dff3ff",
        padding: "20px",
        fontFamily: '"Courier Prime", "Courier New", monospace',
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Pisica va răspunde 🐾
        </h1>

        <div
          style={{
            border: "1px solid #111",
            borderRadius: "15px",
            padding: "15px",
            height: "420px",
            overflowY: "auto",
            background: "white",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent:
                  msg.from === "user" ? "flex-end" : "flex-start",
                marginBottom: "10px",
                alignItems: "flex-end",
                gap: "8px",
              }}
            >
              {msg.from === "cat" && (
                <img
                  src="/cat-grey.png"
                  alt="cat"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                  }}
                />
              )}

              <span
                style={{
                  display: "inline-block",
                  padding: "10px",
                  borderRadius: "10px",
                  background:
                    msg.from === "user" ? "#ff2e8b" : "#eee",
                  color: msg.from === "user" ? "white" : "black",
                  maxWidth: "75%",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", marginTop: "10px", gap: "10px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrie întrebarea..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #111",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              backgroundColor: "#ff2e8b",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Miau
          </button>
        </div>
      </div>
    </main>
  );
}
