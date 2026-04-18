"use client";
import { useState } from "react";

export default function PisicaPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "cat", text: "Miau. Întreabă-mă orice și vă răspund la ce știu." },
  ]);

  const answers = [
    {
      keywords: ["biserica", "catedrala", "unde", "ceremonie"],
      answer:
        "Ceremonia la Catedrala romano-catolică Sfântul Iosif, Str. General Berthelot 19, București. Petrecerea la Ramada Plaza, Bdv. Poligrafiei 3-5, langa terenurile de tenis.",
    },
     {
      keywords: ["cine", "esti", "tu", "pisica", "ceapcici"],
      answer: "Sunt Ceapcici, sau Gria, sau pisica cu o mie de nume",
    },
    {
      keywords: ["ceremonia", "oră", "ora", "cind", "cand"],
      answer: "Ora 12:50 ceremonia (nu întârzia, pisica vă vede 👀), petrecerea la ora 19:00",
    },
    {
      keywords: ["petrecerea", "locație", "locatie", "unde", "petrecere cand"],
      answer:
        "Ramada Plaza, București, bd. Poligrafiei 3-5. Lângă terenurile de tenis, în spate. Vezi pinul de pe hartă. La ora 19.00.",
    },
    {
      keywords: ["cât ține", "cat tine"],
      answer: "Cât ne ține trupul, dar și capul 😏",
    },
    {
      keywords: ["persoane", "câți", "cati"],
      answer:
        "Vine exact cine ne dorim noi trei, Andreiana, Cezar si cu mine. Cool, funny, sportivi și nesportivi.",
    },
    {
      keywords: ["muzica", "muzică"],
      answer:
        "Au ales-o ei doi, Andreiana si Cezar, începe din secolul 19 până în 2026. Și o surpriză. Nu, nu cântă Cezar.",
    },
    {
      keywords: ["tenis", "juca", "racheta"],
      answer: "Da, se poate juca tenis sau ceva cu tenis. Aduceți-vă racheta 🎾",
    },
    {
      keywords: ["martori", "martorii"],
      answer: "Ildikó și Mandea/Șerban",
    },
    {
      keywords: ["dress", "cod", "ținută", "tinuta", "imbrac", "haine"],
      answer:
        "Ziua: mai formal, ca la o ceremonie religioasă, I guess. Seara: pantofi sport & haine colorate – pas noir 👟👟",
    },
    {
      keywords: ["flori", "cadouri", "trandafir"],
      answer:
        "Un singur trandafir. Avem vazele pregătite. One flower, one vase! Vezi la sectiunea IMPORTANT.",
    },
    {
      keywords: ["rsvp", "confirm", "confirmare"],
      answer: "Confirmă prin formularul RSVP din site.",
    },
    {
      keywords: ["plus", "+1", "posibil"],
      answer: "Da, se poate, dar menționează la RSVP, pls",
    },
    {
      keywords: ["telefon", "număr", "numar", "whatsapp", "sună", "suna", "contact"],
      answer:
        "Andreiana: 0722650221. Cezar: 0722545082. WhatsApp sau sunați.",
    },
  ];

  const getAnswer = (text) => {
    const lower = text.toLowerCase();

    for (let item of answers) {
      if (item.keywords.some((k) => lower.includes(k))) {
        return item.answer;
      }
    }

    return "Miau… nu știu, dar vezi invitatia sau vorbește cu Andreiana ori Cezar, mai ales cu Cezar. Purrr ";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const catReply = { from: "cat", text: getAnswer(input) };

    setMessages((prev) => [...prev, userMessage, catReply]);
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
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1bb76e",
            fontWeight: "bold",
          }}
        >
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
                justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  background: msg.from === "user" ? "#ff2e8b" : "#eee",
                  color: msg.from === "user" ? "white" : "black",
                  maxWidth: "75%",
                  lineHeight: "1.5",
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
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Scrie întrebarea..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #111",
              fontFamily: '"Courier Prime", "Courier New", monospace',
              fontSize: "16px",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              backgroundColor: "#ff2e8b",
              color: "white",
              border: "none",
              padding: "12px 16px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontFamily: '"Courier Prime", "Courier New", monospace',
              fontSize: "16px",
            }}
          >
            Miau
          </button>
        </div>

        <div
          style={{
            marginTop: "28px",
            textAlign: "center",
            lineHeight: "1.8",
            fontSize: "0.98rem",
            color: "#1bb76e",
          }}
        >
          Andreiana:{" "}
          <a href="tel:0722650221" style={{ color: "#1bb76e" }}>
            0722650221
          </a>{" "}
          /{" "}
          <a
            href="https://wa.me/40722650221"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1bb76e" }}
          >
            WhatsApp
          </a>
          <br />
          Cezar:{" "}
          <a href="tel:0722545082" style={{ color: "#1bb76e" }}>
            0722545082
          </a>{" "}
          /{" "}
          <a
            href="https://wa.me/40722545082"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1bb76e" }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
