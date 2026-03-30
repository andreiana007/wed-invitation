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
        textAlign: "left",
        boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
      }}>
        <h1 style={{
          color: "#3f9a6f",
          fontSize: "42px",
          marginBottom: "40px",
          fontWeight: 700
        }}>
          Detalii
        </h1>

       {/* CEREMONIE */}
<div style={{
  marginBottom: "30px",
  fontWeight: 700,
  color: "#1f3f75"
}}>
  Ceremonie
</div>

<div style={{ marginBottom: "6px" }}>
  Catedrala Sfântul Iosif
</div>

<div style={{ marginBottom: "4px" }}>
  Strada General Berthelot 19
</div>

<div style={{ marginBottom: "10px" }}>
  București
</div>

<div style={{ marginBottom: "6px", color: "#7266d8" }}>
  6 iunie 2026
</div>

<div style={{ marginBottom: "24px", color: "#1f3f75" }}>
  ora 12:50
</div>

        {/* SEPARATOR */}
        <div style={{
          height: "1px",
          background: "rgba(0,0,0,0.08)",
          margin: "30px 0"
        }} />

        {/* PETRECERE */}
        <div style={{
          marginBottom: "30px",
          fontWeight: 700,
          color: "#3f9a6f"
        }}>
          Petrecere
        </div>

        <div style={{ marginBottom: "6px", color: "#1f3f75" }}>
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

        {/* MAP */}
        <div style={{ marginBottom: "30px" }}>
          <iframe
            src="https://www.google.com/maps?q=Ramada+Plaza+Bucuresti&output=embed"
            width="100%"
            height="250"
            style={{
              border: "0",
              borderRadius: "16px"
            }}
            loading="lazy"
          />
        </div>

        <a
          href="https://maps.google.com/?q=Ramada+Plaza+Bucuresti"
          target="_blank"
          rel="noreferrer"
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
