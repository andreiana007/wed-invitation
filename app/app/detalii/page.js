export default function Detalii() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #faf7ff, #eef2ff)",
      fontFamily: "'Courier New', monospace",
      padding: "24px"
    }}>
      <div style={{
        maxWidth: "700px",
        width: "100%",
        background: "rgba(255,255,255,0.92)",
        borderRadius: "32px",
        padding: "60px 40px",
        textAlign: "left"
      }}>
        <h1 style={{ color: "#3f9a6f", fontSize: "42px", marginBottom: "30px" }}>
          Detalii
        </h1>

        <div style={{ color: "#1f3f75", marginBottom: "8px", fontWeight: 600 }}>
          📍 Hotel Ramada Plaza
        </div>

        <div style={{ marginBottom: "4px" }}>
          Bulevardul Poligrafiei 3–5
        </div>

        <div style={{ marginBottom: "16px" }}>
          București
        </div>

        <div style={{ marginBottom: "24px", opacity: 0.7 }}>
          lângă terenurile de tenis
        </div>

        <div style={{ color: "#7266d8", marginBottom: "30px" }}>
          06 · 06 · 26 · ora 19:00
        </div>

        <a
          href="https://maps.google.com/?q=Ramada+Plaza+Bucuresti"
          target="_blank"
          style={{
            padding: "12px 20px",
            border: "1.5px solid #1f3f75",
            borderRadius: "999px",
            textDecoration: "none",
            color: "#1f3f75",
            fontWeight: 700,
            letterSpacing: "0.08em"
          }}
        >
          Deschide în Maps
        </a>
      </div>
    </div>
  );
}
