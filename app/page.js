import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        padding: "24px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            flex: "1 1 620px",
            maxWidth: "720px",
            width: "100%",
            background: "rgba(255,255,255,0.92)",
            borderRadius: "32px",
            padding: "48px 24px",
            textAlign: "center",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px, 8vw, 66px)",
              margin: "0 0 18px 0",
              color: "#3f9a6f",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textShadow: "0 0 30px rgba(63,154,111,0.35)",
              lineHeight: 1.05,
            }}
          >
            La Terenuri
          </h1>

          <div
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              marginBottom: "24px",
              color: "#1f3f75",
              fontWeight: 600,
              letterSpacing: "0.03em",
              lineHeight: 1.3,
            }}
          >
            cu Andreiana și Cezar
          </div>

          <div
            style={{
              fontSize: "clamp(16px, 3vw, 20px)",
              color: "#b14f6a",
              marginBottom: "14px",
              lineHeight: 1.5,
            }}
          >
            06 · 06 · 26
          </div>

          <div
            style={{
              fontSize: "clamp(15px, 3vw, 18px)",
              color: "#5f5f5f",
              lineHeight: 1.7,
            }}
          >
            Bună seara, prieteeeni!
          </div>
        </div>

        <div
          style={{
            flex: "0 1 220px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <Link href="/important" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                width: "220px",
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1.5px solid #d85b73",
                background: "white",
                color: "#d85b73",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              Important
            </button>
          </Link>

          <Link href="/detalii" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                width: "220px",
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1.5px solid #355287",
                background: "white",
                color: "#355287",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              Detalii
            </button>
          </Link>

          <Link href="/rsvp" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                width: "220px",
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1.5px solid #7b66d9",
                background: "white",
                color: "#7b66d9",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              RSVP
            </button>
          </Link>

          <Link href="/pisica" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                width: "220px",
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1.5px solid #5aa67a",
                background: "white",
                color: "#5aa67a",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              Pisica va răspunde
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
