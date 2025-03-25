"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const WorkPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start p-5"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-bold mb-2"
      >
        My Work
      </motion.h1>
      {/* <ProjectCard /> */}
    </motion.div>
  );
};

export default WorkPage;