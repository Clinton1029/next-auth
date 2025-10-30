"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <motion.h1
        className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to NextAuth Modern App
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Sign in securely with Google or your credentials and explore your dashboard.
      </motion.p>
      <motion.a
        href="/login"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.a>
    </section>
  );
}
