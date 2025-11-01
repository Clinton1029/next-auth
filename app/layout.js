import "./globals.css";
import Navbar from "./components/Navbar";
import SessionProviderWrapper from "./providers/SessionProvider";

export const metadata = {
  title: "NextAuth Modern App",
  description: "Modern Next.js app with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <Navbar />
          <main className="pt-20">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
