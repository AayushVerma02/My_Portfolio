"use client";
import React from "react";
import Image from "next/image";

// Sample data for demonstration
const educationData = [
  {
    title: "B.Tech, Computer Science & Engineering",
    subTitle: "",
    institution: "Delhi Technological University",
    location: "New Delhi, India",
    duration: "Aug 2023 - April 2027 • 4 years",
    highlight: "",
    logo: "/images/college.webp",
  },
  {
    title: "Secondary Education",
    subTitle: "",
    institution: "Govt. Boys senior secondary school Nithari - 1412132",
    location: "New Delhi, India",
    duration: "2020 - 2022",
    highlight: "JEE Qualified",
    logo: "/images/highschool.webp",
  },
  {
    title: "Primary and Secondary Education",
    subTitle: "",
    institution: "Ch. Baldev Singh Senior Secondary School",
    location: "New Delhi, India",
    duration: "2017 - 2020",
    highlight: "First Class Honours",
    logo: "/images/primaryschool.png",
  },
];

export default function EducationSection() {
  return (
    <section className="w-full bg-black text-white py-12 px-4">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Academic Education</h2>
        <p className="text-gray-400 mt-2">
          Discover the stages of my academic learning journey.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] p-6 rounded-lg shadow-md flex flex-col gap-3"
          >
            {/* Card Top: Logo + Title/SubTitle */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={edu.title}
                  fill
                  className="object-contain bg-white rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                {/* If there's a subTitle, show it */}
                {edu.subTitle && (
                  <p className="text-sm text-gray-300">{edu.subTitle}</p>
                )}
              </div>
            </div>

            {/* Card Bottom: Institution, Location, Duration, Highlight */}
            <div className="text-sm text-gray-300 mt-1">
              <p>
                <span className="font-semibold">{edu.institution}</span>,{" "}
                {edu.location}
              </p>
              <p className="text-gray-400">{edu.duration}</p>
              {edu.highlight && (
                <p className="text-gray-400 text-sm">{edu.highlight}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer (Optional) */}
      <div className="mx-auto text-center mt-[25vh] text-xs text-gray-500 border-t border-gray-700"> 
        <p className="mt-5">Copyright © 2025 Karamjeet Sony</p>
      </div>
    </section>
  );
}