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
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "32px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "56px",
            margin: "20px 0 10px 0",
            color: "#2f7a4f",
            fontWeight: 500,
            textShadow: "0 0 20px rgba(47,122,79,0.25)",
          }}
        >
          La Terenuri
        </h1>

        {/* NAMES */}
        <div
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            color: "#1e3a8a", // dark blue
            opacity: 0.9,
          }}
        >
          cu Andreiana și Cezar
        </div>

        {/* DATE */}
        <div
          style={{
            fontSize: "26px",
            marginBottom: "10px",
            color: "#6b63d9", // purple
            textShadow: "0 0 12px rgba(107,99,217,0.2)",
          }}
        >
          06 · 06 · 26
        </div>

        {/* TIME */}
        <div
          style={{
            fontSize: "15px",
            color: "#1e3a8a", // dark blue
            opacity: 0.8,
            letterSpacing: "0.12em",
          }}
        >
          ora 19:00
        </div>
      </div>
    </div>
  );
}
