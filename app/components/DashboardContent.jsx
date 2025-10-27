// components/DashboardContent.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SignOutButton from './SignOutButton'; // Assuming SignOutButton is in the same directory

export default function DashboardContent() {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check our mock session state from local storage
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true') {
      setIsAuth(true);
    } else {
      // Redirect if not logged in
      router.push('/login');
    }
  }, [router]); // Dependency on router to avoid lint warnings

  // --- Loading/Redirect State ---
  if (!isAuth) {
    // Show a clean loading state while checking auth state
    return (
      <div className="text-center p-8 text-xl font-semibold text-white">
        Checking session, please wait...
      </div>
    );
  }

  // --- Authenticated Content ---
  return (
    // MODERN CARD: Light background, rounded corners, large shadow
    <div className="p-12 bg-white rounded-2xl shadow-2xl text-center max-w-lg w-full transition duration-500 hover:shadow-green-500/50">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
        🎉 Welcome to the Mock Dashboard!
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        You are authenticated in the frontend mockup.
      </p>
      <p className="text-sm text-gray-500 mb-8">
        This clean layout is ready for your real backend integration.
      </p>
      <SignOutButton />
    </div>
  );
}