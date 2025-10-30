"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Create Account 🚀
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button
            type="submit"
            className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-gray-700 w-1/4" />
          <span className="text-gray-500 text-sm mx-2">or</span>
          <div className="border-t border-gray-700 w-1/4" />
        </div>

        {/* OAuth Buttons */}
        <div className="flex justify-center gap-5">
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:scale-110 transition">
            <FcGoogle size={24} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:scale-110 transition">
            <FaGithub size={22} className="text-white" />
          </button>
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
