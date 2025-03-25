"use client";
import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full h-[90vh] bg-black text-gray-300 py-16 px-6 flex flex-col items-center">
      {/* Title & Subtitle */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn} 
        className="max-w-3xl w-full text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-white tracking-wide">Let's Get Acquainted</h1>
        <p className="text-gray-500 mt-3 text-lg">
          A brief overview of my background, goals, and interests.
        </p>
      </motion.div>

      {/* Grid Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Introduction Card */}
        <motion.div 
          variants={fadeIn} initial="hidden" animate="visible"
          className="p-6 bg-gray-900/80 rounded-2xl shadow-lg backdrop-blur-lg transition transform hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Introduction</h2>
          <p className="text-gray-400">
          "Passionate CSE student at Delhi Technological University (DTU), specializing in Web Development, Artificial Intelligence, and Blockchain. Strong problem-solving skills with a solid grasp of Data Structures & Algorithms (DSA). Competitive Programmer with a Codeforces rating of 1351."
          </p>
        </motion.div>

        {/* Background Card */}
        <motion.div 
          variants={fadeIn} initial="hidden" animate="visible"
          className="p-6 bg-gray-900/80 rounded-2xl shadow-lg backdrop-blur-lg transition transform hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Background</h2>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>📌 Name: Karamjeet Sony</li>
            <li>🎂 Birthday: 3rd March</li>
            <li>🧑 Gender: Male (He/Him/His)</li>
            <li>🌍 Location: New Delhi (GMT+5:30)</li>
            <li>💬 Languages: English & Hindi</li>
          </ul>
        </motion.div>

        {/* Goals Card */}
        <motion.div 
          variants={fadeIn} initial="hidden" animate="visible"
          className="p-6 bg-gray-900/80 rounded-2xl shadow-lg backdrop-blur-lg transition transform hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Goals</h2>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>🚀 Follow: AI Engineering</li>
            <li>💻 Practice: Software Development</li>
            <li>🤝 Support: Tech Communities</li>
            <li>🎓 Complete: Master's Degree</li>
          </ul>
        </motion.div>

        {/* Interests Card */}
        <motion.div 
          variants={fadeIn} initial="hidden" animate="visible"
          className="p-6 bg-gray-900/80 rounded-2xl shadow-lg backdrop-blur-lg transition transform hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Interests</h2>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>📕 Read: Books </li>
            <li>🎵 Listen: Songs & Music</li>
            <li>🎨 Create: Content & Media</li>
            <li>🌎 Explore: New Things</li>
          </ul>
        </motion.div>
      </div>
      <div className="mx-auto text-center mt-7 text-xs text-gray-500 border-t border-gray-700 w-[98vw]"> 
        <p className="mt-5">Copyright © 2025 Karamjeet Sony</p>
      </div>
    </section>
  );
}