"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const ProjectCard = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ opacity: 0.85 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-900"
    >
      <div className="absolute inset-0">
        <img
          src="/images/backgroundProject.png"
          alt="DeepTrace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-800/30 to-gray-800" />
      </div>

      <motion.div
        animate={{ y: hovered ? -40 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute bottom-16 left-5 w-full pr-5 flex flex-col items-start gap-2"
      >
        <h3 className="text-3xl font-bold text-white">DeepTrace</h3>
        <p className="text-gray-400 text-sm">
          Blockchain and Machine Learning-based Deepfake Detection platform.
        </p>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "React", "TailwindCSS", "Node.js", "MongoDB", "Express", "Solidity", "Flask", "Figma"].map(
            (tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 text-xs rounded-lg"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </motion.div>
      <AnimatePresence>
        {hovered && (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 bottom-5 -translate-x-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-lg cursor-pointer"
            onClick={() => router.push("/deepfake")}
          >
            View Details →
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;