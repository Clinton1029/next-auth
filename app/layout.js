import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "NextAuth Modern App",
  description: "Modern Next.js app with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
