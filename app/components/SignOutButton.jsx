// components/SignOutButton.jsx
'use client';

import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // Clear the mock session state
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };
  
  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 mt-4 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
    >
      Sign Out
    </button>
  );
}