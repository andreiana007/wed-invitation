"use client";

import { useState } from "react";

export default function PisicaPage() {
  const [messages, setMessages] = useState([
    { text: "Miau! Întreab-o pe Ceapcici aproape orice 🐾", from: "cat" },
  ]);
  const [input, setInput] = useState("");

  const getAnswer = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("unde") || lower.includes("loc")) {
      return "La Hotel Ramada Plaza, la terenurile de tenis.";
    }

    if (lower.includes("martori")) {
      return "Ildikó și Șerban (Mandea).";
    }

    if (lower.includes("ora") || lower.includes("când") || lower.includes("cand")) {
      return "Ora 19:00 🐾";
    }

    if (lower.includes("cadou")) {
      return "Prezența voastră este cel mai frumos cadou.";
    }

    if (lower.includes("salut") || lower.includes("hello") || lower.includes("buna") || lower.includes("bună")) {
      return "Miau! Bine ai venit.";
    }

    return "Miau... pentru alte detalii, verificați invitația sau sunați-ne.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, from: "user" };
    const catMsg = { text: getAnswer(input), from: "cat" };

    setMessages((prev) => [...prev, userMsg, catMsg]);
    setInput("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f4fc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Courier Prime, Courier, monospace",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "28px",
          padding: "22px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "14px" }}>
          <div style={{ fontSize: "64px", lineHeight: 1, marginBottom: "8px" }}>🐱</div>
          <h1
            style={{
              margin: "0 0 6px 0",
              color: "#4f9b6f",
              fontSize: "28px",
            }}
          >
            Pisica va răspunde
          </h1>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
            Întreab-o pe Ceapcici aproape orice
          </p>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px 4px",
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
              <div
                style={{
                  maxWidth: "75%",
                  padding: "10px 14px",
                  borderRadius: "18px",
                  background: msg.from === "user" ? "#b94b6b" : "#f1f1f1",
                  color: msg.from === "user" ? "white" : "#333",
                  fontSize: "14px",
                  lineHeight: 1.4,
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrie..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "12px 16px",
              borderRadius: "12px",
              border: "none",
              background: "#5aa67a",
              color: "white",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            →
          </button>
        </div>

        <div
          style={{
            marginTop: "16px",
            paddingTop: "14px",
            borderTop: "1px solid #eee",
            textAlign: "center",
            fontSize: "13px",
            color: "#777",
            lineHeight: 1.7,
          }}
        >
          <div>Pentru orice altceva:</div>
          <a href="tel:+40722545082" style={{ color: "#b94b6b", textDecoration: "none" }}>
            Cezar · 0722 545 082
          </a>
          <br />
          <a href="tel:+40722650221" style={{ color: "#b94b6b", textDecoration: "none" }}>
            Andreiana · 0722 650 221
          </a>
        </div>
      </div>
    </main>
  );
}
