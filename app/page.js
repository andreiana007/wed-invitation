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
          padding: "56px 40px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "64px",
            margin: "0 0 14px 0",
            color: "#3f9a6f",
            fontWeight: 600,
            letterSpacing: "0.02em",
            textShadow: "0 0 30px rgba(63,154,111,0.35)",
          }}
        >
          La Terenuri
        </h1>

        {/* NAMES */}
        <div
          style={{
            fontSize: "20px",
            marginBottom: "24px",
            color: "#1f3f75",
            fontWeight: 500,
          }}
        >
          cu Andreiana și Cezar
        </div>

        {/* DATE */}
        <div
          style={{
            fontSize: "30px",
            marginBottom: "14px",
            color: "#7266d8",
            letterSpacing: "0.08em",
            fontWeight: 500,
          }}
        >
          06 · 06 · 26
        </div>

        {/* TIME */}
        <div
          style={{
            fontSize: "16px",
            color: "#1f3f75",
            letterSpacing: "0.08em",
            fontWeight: 500,
          }}
        >
          ora 19:00
        </div>
      </div>

      {/* SIGNATURE */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "24px",
          fontSize: "12px",
          color: "#ffffff",
          opacity: 0.6,
          fontFamily: "'Courier New', monospace",
        }}
      >
        handcrafted by Andreiana ♡
      </div>
    </div>
  );
}
