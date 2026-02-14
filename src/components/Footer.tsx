// src/sections/footer/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 text-white">
      <div className="md:max-w-[1200px] mx-auto  py-8">
        {/* Top row */}
        <div className="flex items-center justify-between gap-6">
          {/* Brand logo (left) */}
          <img
            src="/assets/logo.svg" // <- replace path
            alt="Bluvo Digital"
            className="md:w-32 md:h-32 w-24 h-14 object-contain"
          />

          {/* Partner badge + tagline (right) */}
          <div className="flex flex-col items-end text-left gap-3 md:text-sm text-[12px] text-white/70">
            <img
              src="/assets/googlepartner.png" // <- replace path
              alt="Google Partner"
              className="md:w-36 md:h-10 w-12 h-4 object-contain"
            />
            <span className=" ">
              Officially certified as a Google Partner
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 mb-6 h-[0.5px] w-full bg-[#7D7D7D]" />

        {/* Bottom row */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row items-center justify-between">
          {/* Left: legal links */}
          <nav className="flex items-center gap-6 text-[13px] text-white/60">
            <a href="/terms" className="hover:text-white transition">
              Terms and Conditions
            </a>
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </nav>

          {/* Right: copyright */}
          <div className="text-[13px] text-white/60">
            ©2025 Bluvo Digital. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
