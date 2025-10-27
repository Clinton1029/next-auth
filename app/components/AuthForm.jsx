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

  // 💡 MOCK DATA STORAGE (Replace with API calls later)
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
      
      // Simulating a successful registration and redirecting to login
      localStorage.setItem('mockRegistered', 'true');
      setMessage('Registration successful! Please login.');
      setIsRegistering(false); // Switch to login view
      
    } else {
      // --- LOGIN LOGIC MOCK ---
      if (email === mockUser.email && password === mockUser.password) {
        // Simulate setting a session token
        localStorage.setItem('isLoggedIn', 'true'); 
        router.push('/dashboard');
      } else {
        setMessage('Invalid email or password. Use test@example.com / password123');
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        {isRegistering ? 'Create Your Account' : 'Welcome Back'}
      </h2>
      
      <form onSubmit={handleAuth} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {isRegistering && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}

        {/* Form Message */}
        {message && (
          <p className={`text-sm font-medium ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
        >
          {isRegistering ? 'Register' : 'Sign In'}
        </button>
      </form>

      {/* Switch Link */}
      <div className="text-center text-sm">
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setMessage('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {isRegistering ? 'Already have an account? Sign In' : "Don't have an account? Register"}
        </button>
      </div>
      
      {/* 💡 External Login Buttons (Front-end only design) */}
      <div className="mt-6">
          <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
              <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">Or sign in with</span></div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Google Button Mock */}
            <button className="w-full flex items-center justify-center px-4 py-2 space-x-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-5 h-5"/>
                <span>Google</span>
            </button>
            {/* GitHub Button Mock */}
            <button className="w-full flex items-center justify-center px-4 py-2 space-x-2 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.682-.217.682-.483 0-.237-.008-.888-.01-1.748-2.784.606-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.527 2.341 1.077 2.91.824.092-.644.357-1.078.653-1.32-.27-.263-.59-2.224-.59-3.57 0-1.57.53-2.843 1.538-3.545-.154-.26-.54-.92.144-2.26C9.176 4.717 9.545 4.5 12 4.5c2.455 0 2.824.217 3.528 1.002.684 1.34.298 2.0.144 2.26.402.702 1.538 1.975 1.538 3.545 0 1.346-.32 3.307-.59 3.57.297.242.592.703.653 1.32.302.242.607.703.653 1.32.002.092.004.184.004.275 0 1.56-.53 2.843-1.538 3.545C16.892 20.242 16.597 20.703 16.295 21.017c.006.142.012.285.012.427 0 .266.182.575.682.483C19.135 20.197 22 16.442 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
                <span>GitHub</span>
            </button>
          </div>
      </div>
    </div>
  );
}