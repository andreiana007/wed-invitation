export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body
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
