// app/login/page.jsx

import AuthForm from '../components/AuthForm';

export default function LoginPage() {
  return (
    // Outer container: Full screen height, centered, dark background
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      
      {/* Container for the AuthForm */}
      <div className="w-full max-w-lg">
        <AuthForm />
      </div>

    </div>
  );
}