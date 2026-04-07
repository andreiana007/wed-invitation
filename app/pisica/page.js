"use client";

import { useState } from "react";

export default function PisicaPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getAnswer = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("unde") || lower.includes("loc")) {
      return "La Hotel Ramada Plaza, la terenurile de tenis.";
    }

    if (lower.includes("martori")) {
      return "Ildikó și Șerban (Mandea).";
    }

    if (
      lower.includes("ora") ||
      lower.includes("când") ||
      lower.includes("cand")
    ) {
      return "19:00 🐾";
    }

    if (lower.includes("cadou")) {
      return "Prezența voastră este cadoul.";
    }

    return "Miau... verifică invitația pentru detalii.";
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
        background: "#fffaf7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          borderRadius: "24px",
          padding: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {/* HEADER (THIS WAS MISSING) */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          
          {/* CAT IMAGE */}
          <img
            src="https://cdn.pixabay.com/photo/2021/11/13/16/08/cat-6790676_1280.png"
            alt="Ceapcici"
            style={{
              width: "120px",
              marginBottom: "10px",
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
            }}
          />

          {/* TITLE */}
          <h2 style={{ marginBottom: "4px" }}>
            Pisica va răspunde 🐾
          </h2>

          {/* SUBTITLE */}
          <p style={{ color: "#777", fontSize: "14px" }}>
            Întreab-o pe Ceapcici aproape orice
          </p>
        </div>

        {/* CHAT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px",
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
              }}
            >
              <div
                style={{
                  background:
                    msg.from === "user" ? "#b94b6b" : "#f1f1f1",
                  color: msg.from === "user" ? "white" : "#333",
                  padding: "10px 14px",
                  borderRadius: "18px",
                  maxWidth: "70%",
                  fontSize: "14px",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrie..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "none",
              background: "#b94b6b",
              color: "white",
              cursor: "pointer",
            }}
          >
            →
          </button>
        </div>

        {/* CONTACT */}
        <div
          style={{
            marginTop: "15px",
            textAlign: "center",
            fontSize: "13px",
            color: "#777",
          }}
        >
          <p>Pentru orice altceva:</p>

          <a href="tel:+40722545082" style={{ color: "#b94b6b" }}>
            Cezar · 0722 545 082
          </a>
          <br />
          <a href="tel:+40722650221" style={{ color: "#b94b6b" }}>
            Andreiana · 0722 650 221
          </a>
        </div>
      </div>
    </main>
  );
}
