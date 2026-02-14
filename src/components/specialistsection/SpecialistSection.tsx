import React from "react";
import { useSpecialistSection } from "./useSpecialistSection";

const SpecialistSection: React.FC = () => {
  const features = useSpecialistSection();

  // 4 in row 1, 3 in row 2
  const row1 = features.slice(0, 4);
  const row2 = features.slice(4, 7);

  return (
    <section className="w-full text-white md:py-20 px-6 md:px-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto md:p-6 p-8 bg-[#24242480] rounded-2xl">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-[28px] md:text-[56px] font-semibold md:leading-[72px] md:tracking-[-1.12px] text-center pb-6 md:pb-0 md:text-start">
          Why Shopify SEO <br /> Requires <span className="text-[#4D9EFF]">a Specialist</span>
        </h2>
        <button className="bg-[#4D9EFF] text-[16px] font-semibold text-white py-3 px-4 rounded-full hover:bg-[#FFEA4D] hover:text-black">
          Start My Growth Plan
        </button>
        </div>

        {/* Features */}
        <div className="mt-16 space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {row1.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-3 sm:flex-col" 
              >
                <img
                  src="/tick.png"
                  alt=""
                  className="w-[19px] h-[19px] mt-[2px] flex-shrink-0"
                />
                <p className="text-white text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>


          {/* Row 2 */}
          {/* Row 2: keep 4 columns on lg, leave the 4th slot empty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {row2.map((feature) => (
              <div className="flex items-start gap-3 sm:flex-col"  key={feature.id}>
                <img src="/tick.png" alt="" className="w-[19px] h-[19px]" />
                <p className="text-[#FFFFFF] text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Empty placeholder for lg only (keeps the 4th column empty) */}
            <div className="hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
