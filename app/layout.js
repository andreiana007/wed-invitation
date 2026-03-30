export default function RootLayout({ children }) {
  return (
    <html lang="ro">
    <link
  href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
  rel="stylesheet"
/>
      <body fontFamily: "'Courier Prime', monospace",
fontWeight: 700,
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#0b1f44",
        }}
      >
        {children}
      </body>
    </html>
  );
}
