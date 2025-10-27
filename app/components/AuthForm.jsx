// components/AuthForm.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  // 💡 MOCK DATA STORAGE 
  const mockUser = {
    email: 'test@example.com',
    password: 'password123',
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setMessage('');

    if (isRegistering) {
      // --- REGISTER LOGIC MOCK ---
      if (password !== confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }
      
      localStorage.setItem('mockRegistered', 'true');
      setMessage('Registration successful! Please login.');
      setIsRegistering(false); // Switch to login view
      
    } else {
      // --- LOGIN LOGIC MOCK ---
      if (email === mockUser.email && password === mockUser.password) {
        localStorage.setItem('isLoggedIn', 'true'); 
        router.push('/dashboard');
      } else {
        setMessage('Invalid email or password. Use test@example.com / password123');
      }
    }
  };

  // --- Dark Input Class Definition ---
  // MODIFIED: Reduced vertical padding from py-3 to py-2
  const darkInputClasses = 'mt-1 block w-full px-4 py-2 border-2 border-gray-600 rounded-lg shadow-inner bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-200';

  return (
    // MODIFIED: Reduced padding from p-10 to p-6 and spacing from space-y-8 to space-y-5
    <div className="w-full max-w-md p-6 space-y-5 bg-gray-800 rounded-xl shadow-2xl shadow-indigo-900/50 border border-gray-700">
      
      {/* MODIFIED: Reduced text size from text-4xl to text-3xl */}
      <h2 className="text-3xl font-extrabold text-center text-white tracking-tight">
        {isRegistering ? 'CREATE ACCOUNT' : 'WELCOME BACK'}
      </h2>
      
      {/* MODIFIED: Reduced spacing from space-y-6 to space-y-4 */}
      <form onSubmit={handleAuth} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-200 uppercase mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`${darkInputClasses} ${email ? 'font-bold' : ''}`}
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
          />
        </div>

        {isRegistering && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-200 uppercase mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`${darkInputClasses} ${confirmPassword ? 'font-bold' : ''}`}
            />
          </div>
        )}

        {/* Form Message */}
        {message && (
          <p className={`text-sm font-bold ${message.includes('successful') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
        
        {/* Submit Button: Reduced vertical padding from py-3 to py-2 and text size from text-lg to text-base */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800 transition duration-300 transform hover:scale-[1.01]"
        >
          {isRegistering ? 'REGISTER' : 'SIGN IN'}
        </button>
      </form>

      {/* Switch Link: Smallest text and padding remain */}
      <div className="text-center">
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setMessage('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }}
          className="font-bold text-xs text-indigo-400 hover:text-indigo-300 transition duration-150 py-1 px-2 rounded-lg hover:bg-gray-700" 
        >
          {isRegistering ? 'Already have an account? Sign In' : "Don't have an account? Register"}
        </button>
      </div>
      
      {/* External Login Buttons */}
      <div className="mt-4"> {/* Reduced mt-6 to mt-4 for tighter spacing */}
          <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-600"></div></div>
              <div className="relative flex justify-center text-sm"><span className="bg-gray-800 px-2 text-gray-400 font-semibold">OR</span></div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-3"> {/* Reduced mt-6 to mt-4 and gap-4 to gap-3 */}
            {/* Google Button Mock - Reduced py-3 to py-2 */}
            <button className="w-full flex items-center justify-center px-4 py-2 space-x-2 border border-gray-600 rounded-lg shadow-md text-sm font-bold text-gray-200 bg-gray-700 hover:bg-gray-600 transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-4 h-4"/> {/* Reduced w-5/h-5 to w-4/h-4 */}
                <span>Google</span>
            </button>
            {/* GitHub Button Mock - Reduced py-3 to py-2 */}
            <button className="w-full flex items-center justify-center px-4 py-2 space-x-2 border border-gray-900 rounded-lg shadow-md text-sm font-bold text-white bg-gray-900 hover:bg-gray-700 transition duration-150">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.682-.217.682-.483 0-.237-.008-.888-.01-1.748-2.784.606-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.527 2.341 1.077 2.91.824.092-.644.357-1.078.653-1.32-.27-.263-.59-2.224-.59-3.57 0-1.57.53-2.843 1.538-3.545-.154-.26-.54-.92.144-2.26C9.176 4.717 9.545 4.5 12 4.5c2.455 0 2.824.217 3.528 1.002.684 1.34.298 2.0.144 2.26.402.702 1.538 1.975 1.538 3.545 0 1.346-.32 3.307-.59 3.57.297.242.592.703.653 1.32.302.242.607.703.653 1.32.002.092.004.184.004.275 0 1.56-.53 2.843-1.538 3.545C16.892 20.242 16.597 20.703 16.295 21.017c.006.142.012.285.012.427 0 .266.182.575.682.483C19.135 20.197 22 16.442 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
                <span>GitHub</span>
            </button>
          </div>
      </div>
    </div>
  );
}