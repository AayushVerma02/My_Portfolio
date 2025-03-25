"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md border-b border-gray-500 p-2">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href={"/"}>
          <h1 className="text-lg font-bold opacity-75 hover:opacity-100">Karamjeet Sony</h1>
        </Link>
        <nav className="space-x-6">
          <Link href="/about" className="hover:text-gray-100 transition-colors text-gray-400">About</Link>
          <Link href="/education" className="hover:text-gray-100 transition-colors text-gray-400">Education</Link>
          {/* <Link href="/experience" className="hover:text-gray-100 transition-colors text-gray-400">Experience</Link> */}
          <Link href="/work" className="hover:text-gray-100 transition-colors text-gray-400">Work</Link>
          <Link href="/connect" className="hover:text-gray-100 transition-colors text-gray-400">Connect</Link>
        </nav>

        <div className="flex space-x-4 items-center justify-center">
          <Link href="/resume.pdf" target="_blank">
            <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer">
              <img src="/images/resume.png" alt="" className="h-5 mr-1"/>Resume
            </button>
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image 
              src="/linkedin.png" 
              alt="LinkedIn" 
              width={25} 
              height={25} 
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 bg-white rounded-full"
            />
          </Link>
          <Link href="https://github.com" target="_blank">
            <Image 
              src="/github.png"
              alt="GitHub" 
              width={30} 
              height={30} 
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 bg-white rounded-full"
            />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Image 
              src="/youtube.png" 
              alt="YouTube" 
              width={30} 
              height={30} 
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 bg-white rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}