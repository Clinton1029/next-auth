// app/layout.jsx

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'; // 💡 Import the new Navbar

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Modern NextAuth Frontend Mockup',
  description: 'A sleek register/login flow using Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        {/* The Navbar will appear here, above all page content */}
        <Navbar />
        
        {/* The children prop holds the content of the current page (e.g., /login or /dashboard) */}
        {children}
        
      </body>
    </html>
  );
}