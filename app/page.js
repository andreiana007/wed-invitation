export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #faf7ff, #eef2ff)",
        padding: "24px",
        fontFamily: "'Courier New', monospace",
        position: "relative",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          background: "rgba(255,255,255,0.92)",
          borderRadius: "32px",
          padding: "60px 40px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        <h1
          style={{
            fontSize: "66px",
            margin: "0 0 18px 0",
            color: "#3f9a6f",
            fontWeight: 700,
            letterSpacing: "0.03em",
            textShadow: "0 0 30px rgba(63,154,111,0.35)",
          }}
        >
          La Terenuri
        </h1>

        <div
          style={{
            fontSize: "22px",
            marginBottom: "28px",
            color: "#1f3f75",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
        >
          cu Andreiana și Cezar
        </div>

        <div
          style={{
            fontSize: "32px",
            marginBottom: "16px",
            color: "#7266d8",
            letterSpacing: "0.12em",
            fontWeight: 600,
          }}
        >
          06 · 06 · 26
        </div>

        <div
          style={{
            fontSize: "17px",
            color: "#1f3f75",
            letterSpacing: "0.14em",
            fontWeight: 600,
          }}
        >
          ora 19:00
        </div>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <a
  href="/important"
  style={{
    padding: "12px 20px",
    borderRadius: "999px",
    border: "1.5px solid #e11d48",
    color: "#e11d48",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    background: "rgba(255,255,255,0.9)",
  
  }}
>
  Important
</a>
        <a
          href="/detalii"
          style={{
            padding: "12px 20px",
            borderRadius: "999px",
            border: "1.5px solid #1f3f75",
            color: "#1f3f75",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          Detalii
        </a>

        <a
          href="/rsvp"
          style={{
            padding: "12px 20px",
            borderRadius: "999px",
            border: "1.5px solid #7266d8",
            color: "#7266d8",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          RSVP
        </a>

        <a
          href="/info"
          style={{
            padding: "12px 20px",
            borderRadius: "999px",
            border: "1.5px solid #3f9a6f",
            color: "#3f9a6f",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          Pisica va răspunde
        </a>
      </div>

      {/* SIGNATURE */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "24px",
          fontSize: "11px",
          color: "#ff4fd8",
          fontWeight: 500,
          textShadow:
            "0 0 8px rgba(255,79,216,0.9), 0 0 16px rgba(255,79,216,0.6)",
        }}
      >
        handcrafted by Andreiana ♡
      </div>
    </div>
  );
}
