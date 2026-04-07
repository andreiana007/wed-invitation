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
      lower.includes("bună")
    ) {
      return "Pisica spune: Miau! 🐾";
    }

    return "Pisica spune: Miau... verifică invitația.";
  };

  const handleSend = () => {
    if (!question.trim()) return;
    setAnswer(getAnswer(question));
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Pisica va răspunde 🐾</h1>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Întreabă pisica..."
      />

      <button onClick={handleSend}>Trimite</button>

      {answer && <p>{answer}</p>}
    </main>
  );
}
