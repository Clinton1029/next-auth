import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./providers/SessionProvider";

export const metadata = {
  title: "NextAuth Modern App",
  description: "Modern Next.js app with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          <main className="pt-20">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
