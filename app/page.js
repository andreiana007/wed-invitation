export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #faf7ff, #eef2ff)",
        padding: "24px",
        fontFamily: "'Courier New', monospace",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            flex: "1 1 620px",
            maxWidth: "720px",
            width: "100%",
            background: "rgba(255,255,255,0.92)",
            borderRadius: "32px",
            padding: "48px 24px",
            textAlign: "center",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px, 8vw, 66px)",
              margin: "0 0 18px 0",
              color: "#3f9a6f",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textShadow: "0 0 30px rgba(63,154,111,0.35)",
              lineHeight: 1.05,
            }}
          >
            La Terenuri
          </h1>

          <div
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              marginBottom: "24px",
              color: "#1f3f75",
              fontWeight: 600,
              letterSpacing: "0.03em",
              lineHeight: 1.3,
            }}
          >
            cu Andreiana și Cezar
          </div>

          <div
            style={{
              fontSize: "clamp(24px, 6vw, 32px)",
              marginBottom: "14px",
              color: "#7266d8",
              letterSpacing: "0.12em",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            06 · 06 · 26
          </div>

          <div
            style={{
              fontSize: "clamp(15px, 3.6vw, 17px)",
              color: "#1f3f75",
              letterSpacing: "0.14em",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            ora 19:00
          </div>
        </div>

        <div
          style={{
            flex: "0 1 240px",
            width: "100%",
            maxWidth: "240px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            alignItems: "stretch",
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
              textAlign: "left",
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
              textAlign: "left",
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
              textAlign: "left",
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
              textAlign: "left",
            }}
          >
            Pisica va răspunde
          </a>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          fontSize: "11px",
          color: "#ff4fd8",
          fontWeight: 500,
          textShadow:
            "0 0 8px rgba(255,79,216,0.9), 0 0 16px rgba(255,79,216,0.6)",
          zIndex: 10,
        }}
      >
        handcrafted by Andreiana ♡
      </div>
    </div>
  );
}
