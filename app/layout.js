import "./globals.css";

export const metadata = {
  title: "Inspire Lupus India",
  description: "Spreading awareness, support, and hope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}