// app/layout.jsx

// 1. Import Tailwind's global styles
import './globals.css'; 
// 2. Import a modern font (using Next.js Font Optimization)
import { Inter } from 'next/font/google';

// Initialize the Inter font (a common modern choice)
const inter = Inter({ subsets: ['latin'] });

// Metadata for SEO (Server Component)
export const metadata = {
  title: 'Modern NextAuth Frontend Mockup',
  description: 'A sleek register/login flow using Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the imported font to the body.
        Set the default background color to match the desired dark theme 
        (though the page components will override this with bg-gray-900). 
      */}
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}