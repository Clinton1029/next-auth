// app/layout.jsx
import './globals.css';
import NextAuthSessionProvider from '../components/SessionProvider';

export const metadata = {
  title: 'Next.js Auth Starter',
  description: 'Authentication using NextAuth and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}