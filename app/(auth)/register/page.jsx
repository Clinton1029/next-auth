"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Create an Account 🚀
        </h1>

        {/* Register Form */}
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-gray-600 w-1/4"></div>
          <span className="text-gray-400 text-sm mx-3">or</span>
          <div className="border-t border-gray-600 w-1/4"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white text-gray-800 font-semibold hover:bg-gray-100 transition"
          >
            <FcGoogle size={22} />
            <span>Continue with Google</span>
          </button>

          <button
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#24292F] text-white font-semibold hover:bg-[#333] transition"
          >
            <FaGithub size={22} />
            <span>Continue with GitHub</span>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
