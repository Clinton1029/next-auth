// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SignOutButton from './SignOutButton'; // Assuming this component exists

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
    // MODIFIED: Deeper dark background and shadow for modern contrast
    <nav className="bg-gray-900 shadow-xl border-b border-indigo-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Home Link - Stronger, bolder style */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-extrabold tracking-widest uppercase hover:text-indigo-400 transition duration-200">
              AuthApp
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {isLoggedIn ? (
              <>
                {/* Links for Logged-In User */}
                <Link 
                  href="/dashboard" 
                  className="text-gray-200 hover:bg-gray-700 hover:text-indigo-400 px-3 py-2 rounded-lg text-base font-semibold transition duration-200"
                >
                  Dashboard
                </Link>
                {/* SignOutButton component will handle the styling for the button */}
                <SignOutButton />
              </>
            ) : (
              <>
                {/* Links for Logged-Out User - Accentuated Sign In/Register Button */}
                <Link 
                  href="/login" 
                  className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:bg-indigo-500 transition duration-200 transform hover:scale-105"
                >
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