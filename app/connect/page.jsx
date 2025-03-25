"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Connect() {
  // Example: contact cards data (icon, label, handle, link)
  const contacts = [
    {
      icon: "/mail.png",
      label: "Email",
      handle: "contact@karamjeet.sony",
      link: "mailto:karamjeetsony8449@gmail.com",
    },
    {
      icon: "/github.png",
      label: "GitHub",
      handle: "AayushVerma02",
      link: "https://github.com/AayushVerma02",
    },
    {
      icon: "/youtube.png",
      label: "YouTube",
      handle: "Karamjeet Sony",
      link: "https://youtube.com/@",
    },
    {
      icon: "/linkedin.png",
      label: "LinkedIn",
      handle: "Karamjeet Sony",
      link: "https://linkedin.com/in/Karamjeet_Sony",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler (no real backend here)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-black text-gray-400 py-16 px-6 flex flex-col items-center">
      {/* Title & Subtitle */}
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Connect</h1>
        <p className="text-gray-500 mt-2">
          Connect with me through social media and other communication channels.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* Left Column: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 bg-gray-900 p-6 rounded-lg shadow-md min-h-[400px]"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-1 text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name (e.g. Karamjeet Sony)"
              className="bg-black border border-gray-700 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-gray-500 transition-all"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-1 text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email (e.g. contact@Karamjeet.dev)"
              className="bg-black border border-gray-700 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-gray-500 transition-all"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-medium mb-1 text-gray-300">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter your subject (e.g. Just saying Hi!)"
              className="bg-black border border-gray-700 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-gray-500 transition-all"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium mb-1 text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message here..."
              className="bg-black border border-gray-700 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-gray-500 transition-all resize-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 w-full bg-gray-700 border border-gray-600 rounded-md py-2 text-sm text-white hover:bg-gray-600 transition-transform transform hover:scale-105 cursor-pointer"
          >
            Submit
          </button>
        </form>

        {/* Right Column: Social/Contact Cards */}
        <div className="w-full md:w-72 flex flex-col gap-5 min-h-[400px]">
          {contacts.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-300 text-black border border-gray-400 rounded-lg p-5 flex items-center gap-4 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{item.label}</span>
                <span className="text-gray-600 text-xs">{item.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-xs text-gray-500 space-y-1 border-t border-gray-600 w-[98vw] mx-auto pt-5">
        <p>Copyright © 2025 Karamjeet Sony</p>
      </div>
    </section>
  );
}