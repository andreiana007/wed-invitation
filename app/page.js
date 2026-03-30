export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #fff7fb, #eff6ff)",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.88)",
          borderRadius: "32px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ fontSize: "12px", letterSpacing: "0.3em", color: "#7c8594" }}>
          SAVE THE DATE
        </div>

        <h1 style={{ fontSize: "56px", margin: "20px 0", color: "#2f3a4a" }}>
          Petrecere la Terenuri
        </h1>

        <div style={{ fontSize: "26px", marginBottom: "20px", color: "#4a5565" }}>
          06 · 06 · 26
        </div>

        <p style={{ marginBottom: "30px", color: "#5f6b7a" }}>
          O seară de vară, muzică, oameni și lumină.
        </p>
      </div>
    </div>
  );
}
