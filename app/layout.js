"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="ro">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          fontFamily: "'Courier Prime', monospace",
          fontWeight: 700,
          background: "linear-gradient(135deg, #f3f0ff, #eef6ff)",
        }}
      >

        {/* BACK BUTTON - hidden on homepage */}
        {pathname !== "/" && (
          <div
            style={{
              position: "fixed",
              top: "10px",
              left: "10px",
              zIndex: 1000,
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "6px 12px",
                  border: "1px solid #111",
                  borderRadius: "10px",
                  background: "white",
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                ← Înapoi
              </button>
            </Link>
          </div>
        )}

        {children}

      </body>
    </html>
  );
}
