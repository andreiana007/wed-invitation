"use client";

import { useState } from "react";

export default function PisicaPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("unde") || lower.includes("loc")) {
      return "Pisica spune: La Hotel Ramada Plaza, la terenurile de tenis.";
    }

    if (lower.includes("martori")) {
      return "Pisica spune: Ildikó și Șerban (Mandea).";
    }

    if (
      lower.includes("ora") ||
      lower.includes("când") ||
      lower.includes("cand")
    ) {
      return "Pisica spune: 19:00 🐾";
    }

    if (lower.includes("cadou")) {
      return "Pisica spune: Prezența voastră este cadoul.";
    }

    if (
      lower.includes("salut") ||
      lower.includes("buna") ||
      lower.includes("bună") ||
      lower.includes("hello")
    ) {
      return "Pisica spune: Miau! Bine ai venit 🐾";
    }

    return "Pisica spune: Miau... verifică invitația pentru toate detaliile.";
  };

  const handleSend = () => {
    if (!question.trim()) return;
    setAnswer(getAnswer(question));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f7fb",
        fontFamily: "Georgia, serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          Pisica va răspunde 🐾
        </h1>

        <p style={{ marginBottom: "20px", color: "#666" }}>
          Întreabă pisica orice despre petrecere
        </p>

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Scrie întrebarea ta..."
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Trimite
        </button>

        {answer && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "12px",
              background: "#f0f4ff",
            }}
          >
            {answer}
          </div>
        )}
      </div>
    </main>
  );
}
