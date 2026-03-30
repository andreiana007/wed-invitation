export default function Detalii() {
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
          maxWidth: "720px",
          background: "rgba(255,255,255,0.92)",
          borderRadius: "32px",
          padding: "56px 40px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ color: "#3f9a6f", fontSize: "42px" }}>
          Detalii
        </h1>

        <div style={{ marginTop: "30px", color: "#1f3f75" }}>
          📍 Terenuri – București  
        </div>

        <div style={{ marginTop: "10px", color: "#7266d8" }}>
          06 · 06 · 26 · ora 19:00
        </div>

        <div style={{ marginTop: "30px", fontSize: "14px", opacity: 0.7 }}>
          Mai multe detalii în curând.
        </div>
      </div>
    </div>
  );
}
