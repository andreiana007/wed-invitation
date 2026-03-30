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
          border: "1px solid rgba(255,255,255,0.7)",
          borderRadius: "32px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#7c8594",
            marginBottom: "24px",
          }}
        >
          Save the Date
        </div>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1,
            color: "#2f3a4a",
            margin: "0 0 16px 0",
            fontWeight: 500,
          }}
        >
          Party
        </h1>

        <div
          style={{
            fontSize: "28px",
            color: "#4a5565",
            marginBottom: "16px",
          }}
        >
          06 · 06 · 26
        </div>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#5f6b7a",
            maxWidth: "520px",
            margin: "0 auto 32px auto",
          }}
        >
          A soft, elegant invitation experience in pale pink and powder blue.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 22px",
              borderRadius: "999px",
              border: "none",
              background: "#2f3a4a",
              color: "white",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Open Invite
          </button>

          <button
            style={{
              padding: "14px 22px",
              borderRadius: "999px",
              border: "1px solid #d9dfeb",
              background: "white",
              color: "#4a5565",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
