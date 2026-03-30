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
            marginBottom: "34px",
          }}
        >
          ora 19:00
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/detalii"
            style={{
              display: "inline-block",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid #1f3f75",
              color: "#1f3f75",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            Detalii
          </a>

          <a
            href="/rsvp"
            style={{
              display: "inline-block",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid #7266d8",
              color: "#7266d8",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            RSVP
          </a>

          <a
            href="/info"
            style={{
              display: "inline-block",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid #3f9a6f",
              color: "#3f9a6f",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            Info
          </a>
        </div>
      </div>

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
