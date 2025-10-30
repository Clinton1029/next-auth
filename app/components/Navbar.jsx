"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          NextAuth<span className="text-blue-400">App</span>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/(auth)/login" className="hover:text-blue-400">Login</Link>
          <Link href="/(auth)/register" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Register
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/80 text-center py-6"
          >
            <Link href="/(auth)/login" className="block py-2">Login</Link>
            <Link href="/(auth)/register" className="block py-2 text-blue-400">Register</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
