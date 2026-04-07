"use client";

import { useState } from "react";

export default function PisicaPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("unde") || lower.includes("loc")) {
      return "Pisica spune: După Hotel Ramada, la terenurile de tenis.";
    }

    if (lower.includes("martori")) {
      return "Pisica spune: Ildikó și Șerban (Mandea).";
    }

    if (lower.includes("ora") || lower.includes("când") || lower.includes("cand")) {
      return "Pisica spune: 19:00 🐾";
    }

    if (lower.includes("cadou")) {
      return "Pisica spune: Prezența voastră este cel mai frumos cadou.";
    }

    return "Pisica spune: Miiiau… verifică invitația pentru toate detaliile.";
  };

  const handleSend = () => {
    if (!question.trim()) return;
    setAnswer(getAnswer(question));
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f7f7fb",
      fontFamily: "Georgia, serif"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "400px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h1>Pisica va răspunde 🐾</h1>

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Întreabă pisica..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleSend}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer"
          }}
        >
          Trimite
        </button>

        {answer && (
          <p style={{ marginTop: "20px" }}>
            {answer}
          </p>
        )}
      </div>
    </main>
  );
}
