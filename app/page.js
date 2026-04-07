import Link from "next/link";
import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  const buttonStyle = {
    width: "220px",
    padding: "14px 24px",
    borderRadius: "999px",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "16px",
    boxShadow: "none",
  };

  return (
    <div
      className={courier.className}
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
              fontSize: "clamp(24px, 5vw, 34px)",
              marginBottom: "14px",
              color: "#6d60d9",
              fontWeight: 700,
              letterSpacing: "0.18em",
              lineHeight: 1.3,
            }}
          >
            06 · 06 · 26
          </div>

          <div
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              color: "#1f3f75",
              fontWeight: 600,
              letterSpacing: "0.04em",
              lineHeight: 1.5,
            }}
          >
            ora 19:00
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
                ...buttonStyle,
                border: "1.5px solid #d85b73",
                color: "#d85b73",
              }}
            >
              Important
            </button>
          </Link>

          <Link href="/detalii" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                ...buttonStyle,
                border: "1.5px solid #355287",
                color: "#355287",
              }}
            >
              Detalii
            </button>
          </Link>

          <Link href="/rsvp" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                ...buttonStyle,
                border: "1.5px solid #7b66d9",
                color: "#7b66d9",
              }}
            >
              RSVP
            </button>
          </Link>

          <Link href="/pisica" style={{ textDecoration: "none", width: "100%" }}>
            <button
              style={{
                ...buttonStyle,
                border: "1.5px solid #5aa67a",
                color: "#5aa67a",
              }}
            >
              Pisica va răspunde
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          right: "18px",
          bottom: "14px",
          fontSize: "12px",
          color: "#ff74cf",
          letterSpacing: "0.03em",
        }}
      >
        handcrafted by Andreiana ♡
      </div>
    </div>
  );
}
