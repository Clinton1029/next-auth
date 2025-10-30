"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/login"); // Replace with signOut() later when we add NextAuth
    }, 1000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to Your Dashboard ✨
        </h1>

        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          This is your personal space. Once authentication is set up, this page will
          display your profile info, analytics, and app data.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Example Cards */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-xl p-6 bg-white/10 border border-white/10 hover:bg-white/20 transition"
          >
            <h2 className="text-xl font-semibold text-white mb-2">User Info</h2>
            <p className="text-gray-400 text-sm">
              See your account details and recent activity here once authenticated.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-xl p-6 bg-white/10 border border-white/10 hover:bg-white/20 transition"
          >
            <h2 className="text-xl font-semibold text-white mb-2">Analytics</h2>
            <p className="text-gray-400 text-sm">
              Track your recent sessions and sign-in history.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleLogout}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
