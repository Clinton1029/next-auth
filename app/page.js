// app/page.jsx

import Link from 'next/link';

export default function HomePage() {
  return (
    // Uses the dark background and centers the content vertically and horizontally
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-400">
          Project Home
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Welcome! Please sign in or register to continue to the dashboard.
        </p>
        
        {/* Navigation Button */}
        <Link href="/login">
          <button className="px-8 py-3 font-semibold text-lg text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
}