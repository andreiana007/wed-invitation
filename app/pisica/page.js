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
      keywords: ["ceremonia", "oră", "ora"],
      answer: "Ora 12:50 (nu întârzia, pisica vă vede 👀)",
    },
    {
      keywords: ["petrecerea", "locație", "locatie", "unde"],
      answer:
        "La Terenuri – Ramada Plaza, București. Lângă terenurile de tenis, în spate. Vezi pinul de pe hartă.",
    },
    {
      keywords: ["cât ține", "cat tine"],
      answer: "Cât ne ține trupul, dar și capul.",
    },
    {
      keywords: ["persoane", "câți", "cati"],
      answer:
        "Vine exact cine ne dorim. Cool, funny, sportivi și nesportivi.",
    },
    {
      keywords: ["muzica", "muzică"],
      answer:
        "Am ales-o noi doi, începe din secolul 19 până în 2026. Și o surpriză. Nu, nu cântă Cezar. Altceva! 🎶",
    },
    {
      keywords: ["tenis", "juca", "racheta"],
      answer: "Da, se poate juca tenis sau ceva cu tenis. Aduceți-vă racheta 🎾",
    },
    {
      keywords: ["martori", "martorii"],
      answer: "Ildikó și Mandea/Șerban 💫",
    },
    {
      keywords: ["dress", "cod", "ținută", "tinuta"],
      answer:
        "Ziua: mai formal, ca la o ceremonie religioasă, I guess, miau. Seara: pantofi sport sau comozi, fara toc pentru ca e iarba & haine colorate – pas noir 👟",
    },
    {
      keywords: ["flori", "cadouri", "trandafir"],
      answer:
        "Un singur trandafir. Avem vazele pregătite. One flower, one vase! Vezi sectiunea IMPORTANT.",
    },
    {
      keywords: ["rsvp", "confirm", "confirmare"],
      answer: "Confirmă prin formularul RSVP din site.",
    },
    {
      keywords: ["plus", "+1"],
      answer: "Da, se poate, dar menționează la RSVP",
    },
    {
      keywords: ["telefon", "număr", "numar", "whatsapp", "sună", "suna", "contact"],
      answer: "WhatsApp sau sună-ne folosind butoanele din dreapta jos 💚",
    },
  ];

  const getAnswer = (text) => {
    const lower = text.toLowerCase();

    for (let item of answers) {
      if (item.keywords.some((k) => lower.includes(k))) {
        return item.answer;
      }
    }

    return "Miau… nu știu exact, dar întreabă din nou sau vorbește cu Andreiana ori Cezar, mai ales cu Cezar.";
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
      <div style={{ maxWidth: "600px", margin: "0 auto", paddingBottom: "120px" }}>
        
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
                alignItems: "flex-end",
                gap: "8px",
              }}
            >
              {msg.from === "cat" && (
                <span style={{ fontSize: "22px", color: "#5dade2" }}>
                  🐱
                </span>
              )}

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
            }}
          >
            Miau
          </button>
        </div>
      </div>

      {/* FLOATING BUTTONS */}
      <div
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 999,
        }}
      >
        <a href="https://wa.me/40722650221" target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 16px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp Andreiana
        </a>

        <a href="https://wa.me/40722545082" target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 16px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp Cezar
        </a>

        <a href="tel:0722650221"
          style={{
            backgroundColor: "white",
            color: "#111",
            padding: "12px 16px",
            borderRadius: "999px",
            textDecoration: "none",
            border: "1px solid #111",
            fontWeight: "bold",
          }}
        >
          Sună Andreiana
        </a>

        <a href="tel:0722545082"
          style={{
            backgroundColor: "white",
            color: "#111",
            padding: "12px 16px",
            borderRadius: "999px",
            textDecoration: "none",
            border: "1px solid #111",
            fontWeight: "bold",
          }}
        >
          Sună Cezar
        </a>
      </div>
    </main>
  );
}
