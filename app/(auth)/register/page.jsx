"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-md p-10 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
      >
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Create an Account 🚀
        </h1>

        {/* Register Form */}
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-transform duration-200"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="border-t border-gray-700 w-1/4"></div>
          <span className="text-gray-500 text-sm mx-3">or</span>
          <div className="border-t border-gray-700 w-1/4"></div>
        </div>

        {/* OAuth Icon Buttons */}
        <div className="flex justify-center gap-6">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition hover:scale-105">
            <FcGoogle size={28} />
          </button>

          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition hover:scale-105">
            <FaGithub size={26} className="text-white" />
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
