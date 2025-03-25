"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-start pt-12">
      <div className="absolute inset-0 grid grid-rows-36 grid-cols-54">
        {Array.from({ length: 36 * 54 }).map((_, idx) => (
          <div key={idx} className="border border-gray-800" style={{ borderWidth: "0.5px" }} />
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, black 80%)" }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <header>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold"
          >
            Hi, everyone!
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl font-extrabold text-gray-200 mt-2"
          >
            I’m Karamjeet Sony.
          </motion.h2>
        </header>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl text-gray-400 text-xl mt-6 leading-relaxed"
        >
          Welcome to my profile. I'm a student and developer who loves solving problems while helping others by leveraging Artificial Intelligence, Software Development, and Cloud Computing technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg mt-8"
        >
          <Image src="/profile.jpg" alt="Profile" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
          <Link href={"/connect"}>
            <button className="flex gap-3 items-center border border-white text-white bg-transparent hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium text-base transition-colors cursor-pointer">
              Seeking contact? Let’s connect!
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <Image src="/chat.png" alt="Chat" width={20} height={20} />
              </div>
            </button>
          </Link>
        </motion.div>
      </div>

      <footer className="absolute bottom-4 text-xs text-gray-500 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          Copyright © 2025 Karamjeet Sony
        </motion.p>
      </footer>
    </section>
  );
}