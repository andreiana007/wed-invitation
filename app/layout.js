export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
