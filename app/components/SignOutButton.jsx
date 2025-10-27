// components/SignOutButton.jsx
'use client';

import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
    // Redirect to the homepage after sign out
    router.push('/');
    // Force a storage event check in Navbar in case it's not detected immediately
    window.dispatchEvent(new Event('storage')); 
  };

  return (
    <button
      onClick={handleSignOut}
      // MODIFIED: Red accent for clear "exit" action
      className="text-white bg-red-600 font-semibold px-4 py-2 rounded-lg text-sm shadow-md hover:bg-red-500 transition duration-200 transform hover:scale-105"
    >
      Sign Out
    </button>
  );
}