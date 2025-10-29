'use client';

import { useState, useCallback } from 'react';

// --- MOCK useRouter: Retained for conceptual Next.js routing simulation ---
const useRouter = () => ({
  push: (path) => {
    console.log(`[Router Mock] Successful login/redirection logic activated. Would navigate to: ${path}`);
  },
});
// ----------------------------------------------------------------------------------

// All Firebase-specific environment variable declarations have been removed.

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // We use the router mock, simulating Next.js navigation.
  const router = useRouter(); 

  const handleRegister = useCallback(async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    try {
      // This fetch call simulates posting registration data to a Next.js API Route (/api/register)
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration successful! You can now sign in.');
        // Clear fields on success
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        // In a real Next.js app, you might programmatically route to the login page here.
      } else {
        // Handle errors like 409 Conflict (User exists)
        setMessage(data.error || `Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Network or system error:', error);
      setMessage('A network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, confirmPassword]);

  const darkInputClasses = 'mt-1 block w-full px-4 py-2 border-2 border-gray-600 rounded-lg shadow-inner bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-200';

  return (
    <div className="w-full max-w-md p-6 space-y-5 bg-gray-800 rounded-xl shadow-2xl shadow-indigo-900/50 border border-gray-700">
      
      <h2 className="text-3xl font-extrabold text-center text-white tracking-tight">
        CREATE ACCOUNT
      </h2>
      
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-200 uppercase mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`${darkInputClasses} ${email ? 'font-bold' : ''}`}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-bold text-gray-200 uppercase mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`${darkInputClasses} ${password ? 'font-bold' : ''}`}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-200 uppercase mb-1">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={`${darkInputClasses} ${confirmPassword ? 'font-bold' : ''}`}
            disabled={isLoading}
          />
        </div>

        {/* Form Message */}
        {message && (
          <p className={`text-sm font-bold ${message.includes('successful') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800 transition duration-300 transform hover:scale-[1.01] disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'REGISTERING...' : 'REGISTER'}
        </button>
      </form>

      {/* Switch Link */}
      <div className="text-center">
        <a 
          href="/login" // Conceptual route to the login page
          className="font-bold text-xs text-indigo-400 hover:text-indigo-300 transition duration-150 py-1 px-2 rounded-lg hover:bg-gray-700" 
        >
          Already have an account? Sign In
        </a>
      </div>
      
      {/* External Login Buttons (Mocks) */}
      <div className="mt-4">
          <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-600"></div></div>
              <div className="relative flex justify-center text-sm"><span className="bg-gray-800 px-2 text-gray-400 font-semibold">OR</span></div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="w-full flex items-center justify-center px-4 py-2 space-x-2 border border-gray-600 rounded-lg shadow-md text-sm font-bold text-gray-200 bg-gray-700 hover:bg-gray-600 transition duration-150" disabled={isLoading}>
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-4 h-4"/>
                <span>Google</span>
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 space-x-2 border border-gray-900 rounded-lg shadow-md text-sm font-bold text-white bg-gray-900 hover:bg-gray-700 transition duration-150" disabled={isLoading}>
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.682-.217.682-.483 0-.237-.008-.888-.01-1.748-2.784.606-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.527 2.341 1.077 2.91.824.092-.644.357-1.078.653-1.32-.27-.263-.59-2.224-.59-3.57 0-1.57.53-2.843 1.538-3.545-.154-.26-.54-.92.144-2.26C9.176 4.717 9.545 4.5 12 4.5c2.455 0 2.824.217 3.528 1.002.684 1.34.298 2.0.144 2.26.402.702 1.538 1.975 1.538 3.545 0 1.346-.32 3.307-.59 3.57.297.242.592.703.653 1.32.302.242.607.703.653 1.32.002.092.004.184.004.275 0 1.56-.53 2.843-1.538 3.545C16.892 20.242 16.597 20.703 16.295 21.017c.006.142.012.285.012.427 0 .266.182.575.682.483C19.135 20.197 22 16.442 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
                <span>GitHub</span>
            </button>
          </div>
      </div>
    </div>
  );
}
