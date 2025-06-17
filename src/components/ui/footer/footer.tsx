import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center text-sm text-[#777777]">
        
        {/* Left Side */}
        <div>
          Created by{" "}
          <a
            href="https://www.turuncu.com.tr"
            className="hover:underline text-[#777777]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Turuncu Internet Solutions
          </a>
        </div>

        {/* Right Side */}
        <div>
          Copyright © 2025, Perinatal Medicine Foundation.
        </div>
        
      </div>
    </footer>
  );
}
