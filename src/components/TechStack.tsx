// src/sections/techstack/TeckStack.tsx
import React from "react";

const TechStack: React.FC = () => {
  // Put your real PNG paths in /public/logos/... or adjust as needed
  const row1 = [
    { src: "/assets/tools/semrush.png", alt: "semrush" },
    { src: "/assets/tools/ahrefs.png", alt: "ahrefs" },
    { src: "/assets/tools/screamingfrog.png", alt: "Screaming Frog" },
    { src: "/assets/tools/ubersuggest.png", alt: "ubersuggest" },
  ];

  const row2 = [
    { src: "/assets/tools/gsc.png", alt: "Google Search Console" },
    { src: "/assets/tools/ga.png", alt: "Google analytics" },
    { src: "/assets/tools/gtm.png", alt: "Google Tag Manager" },
    { src: "/assets/tools/moz.png", alt: "MOZ" },
  ];

  return (
    <section className="w-full text-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[56px] text-center font-semibold md:leading-[72px] leading-[48px] md:tracking-[-1.12px]">
          <span >Our Shopify SEO </span>
          <span className=" text-[#4D9EFF]">
            Tech Stack
          </span>
        </h2>

        {/* Row 1: 4 logos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:gap-10 gap-4 items-center justify-items-center">
          {row1.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="object-contain "
              loading="lazy"
            />
          ))}
        </div>

        {/* Row 2: 3 logos centered */}
        <div className="md:mt-12 mt-4 grid grid-cols-2 sm:grid-cols-4 md:gap-10 gap-4 items-center justify-items-center">
          {row2.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
