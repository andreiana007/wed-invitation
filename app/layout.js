export const metadata = {
  title: "Party 06 · 06 · 26",
  description: "Private party invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Georgia, serif", background: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
