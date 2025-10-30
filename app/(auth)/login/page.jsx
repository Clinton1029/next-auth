"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    // 👉 Will connect to NextAuth later
    console.log("Logging in:", { email, password });
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold flex justify-center"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Login"}
          </button>
        </form>

        <div className="text-center text-sm mt-6">
          <p className="text-gray-400">
            Don’t have an account?{" "}
            <Link href="/(auth)/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <button className="border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition">
            Continue with Google
          </button>
        </div>
      </motion.div>
    </section>
  );
}
