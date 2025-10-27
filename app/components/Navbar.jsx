// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SignOutButton from './SignOutButton';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check the mock session state on the client
  useEffect(() => {
    // This runs on the client after mounting
    const checkAuthStatus = () => {
      if (typeof window !== 'undefined') {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      }
    };

    checkAuthStatus();

    // Listen for storage changes (e.g., login/logout from another tab)
    window.addEventListener('storage', checkAuthStatus);
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  // Tailwind styling for a clean, dark, and modern navbar
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Home Link */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold tracking-wider hover:text-indigo-400 transition duration-150">
              AuthApp
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* Links for Logged-In User */}
                <Link href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                  Dashboard
                </Link>
                <SignOutButton />
              </>
            ) : (
              <>
                {/* Links for Logged-Out User */}
                <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                  Sign In / Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}