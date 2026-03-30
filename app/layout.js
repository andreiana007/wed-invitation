export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background:
            "linear-gradient(135deg, #cdb4db 0%, #a2d2ff 50%, #c7f9cc 100%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
