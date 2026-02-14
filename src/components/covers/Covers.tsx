import React from "react";
import { useCovers } from "./useCovers";

const Covers: React.FC = () => {
  const features = useCovers();  
const row1 = features.slice(0, 3);
const row2 = features.slice(3, 5);

  return (
    <section className="relative w-full  text-white md:py-20 py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[56px] font-semibold md:leading-[72px] md:tracking-[-1.12px]">
          Shopify SEO <br />
          <span className="text-[#4D9EFF]">That Covers It All</span>
        </h2>
        <p className="text-[#E0E0E0] text-[16px] mt-4 mx-auto">
          Scaling a Shopify store takes more than keywords and backlinks.
          You need SEO that fixes <br className="md:block hidden" /> technical gaps, builds trust with Google,
          and turns every page into a revenue driver.
        </p>
      {/* Row 1: exactly 3 cards on lg */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {row1.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#1A1A1A] rounded-2xl p-6 text-left border border-white/10 "
          >
            <div className="w-10 h-10 mb-4 flex items-center justify-center bg-white/10 rounded-lg">
              <img src={feature.icon} alt={feature.title} width={24} height={24} />
            </div>
            <h3 className="text-[18px] text-[#FFFFFF] font-semibold mb-2">{feature.title}</h3>
            <p className="text-[#B3B3B3] text-[14px] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Row 2: exactly 2 cards on lg, centered */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:mx-auto">
        {row2.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#1A1A1A] rounded-2xl p-6 text-left border border-white/10 "
          >
            <div className="w-10 h-10 mb-4 flex items-center justify-center bg-white/10 rounded-lg">
              <img src={feature.icon} alt={feature.title} width={24} height={24} />
            </div>
            <h3 className="text-[18px] text-[#FFFFFF] font-semibold mb-2">{feature.title}</h3>
            <p className="text-[#B3B3B3] text-[14px] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Covers;
