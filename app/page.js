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
        <h1
          style={{
            fontSize: "56px",
            margin: "20px 0 10px 0",
            color: "#5a4fcf",
            fontWeight: 500,
          }}
        >
          La Terenuri
        </h1>

        <div
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            color: "#5a4fcf",
            opacity: 0.8,
          }}
        >
          cu Andreiana și Cezar
        </div>

        <div
          style={{
            fontSize: "26px",
            marginBottom: "10px",
            color: "#5a4fcf",
          }}
        >
          06 · 06 · 26
        </div>

        <div
          style={{
            fontSize: "16px",
            color: "#3b6fb6",
            opacity: 0.6,
          }}
        >
          ora 19:00
        </div>
      </div>
    </div>
  );
}
