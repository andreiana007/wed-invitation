export default function RSVP() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #faf7ff, #eef2ff)",
        fontFamily: "'Courier New', monospace",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          background: "rgba(255,255,255,0.92)",
          borderRadius: "32px",
          padding: "60px 40px",
          textAlign: "left",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        <h1
          style={{
            color: "#7266d8",
            fontSize: "42px",
            marginBottom: "30px",
            fontWeight: 700,
          }}
        >
          RSVP
        </h1>

        <div
          style={{
            marginBottom: "30px",
            lineHeight: "1.7",
            color: "#1f3f75",
            fontWeight: 600,
          }}
        >
          Spune-ne daca vii, pls!
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYN2vkkS_p82uO6roUn57ckmusjCs_VXCYY8V6jSLi0Hl0lg/viewform"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 26px",
            borderRadius: "999px",
            border: "1.5px solid #7266d8",
            color: "#7266d8",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Aici e perfect!
        </a>
      </div>
    </div>
  );
}
