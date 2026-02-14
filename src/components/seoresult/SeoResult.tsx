import React from "react";
import {
  useSeoResult,
  type SeoStat,
  type SeoTab,
} from "./useSeoResult";

type SeoResultProps = {
  /** Optional controlled overrides */
  stats?: SeoStat[];
  tabs?: SeoTab[];
  activeTabId?: string;
  onChangeTab?: React.Dispatch<React.SetStateAction<string>>;
  activeImage?: string;
  className?: string;
};

const SeoResult: React.FC<SeoResultProps> = ({
  stats: statsOverride,
  tabs: tabsOverride,
  activeTabId: activeTabIdOverride,
  onChangeTab,
  activeImage: imageOverride,
  className = "",
}) => {
  // Uncontrolled (internal) state/data from hook
  const { stats, tabs, activeTabId, setActiveTabId, activeImage } = useSeoResult();

  // Decide which source to use (controlled > uncontrolled)
  const statsToUse = statsOverride ?? stats;
  const tabsToUse = tabsOverride ?? tabs;
  const activeId = activeTabIdOverride ?? activeTabId;
  const setTab = onChangeTab ?? setActiveTabId;
  const imageToUse = imageOverride ?? activeImage;

  return (
    <section className={`w-full  md:px-[6rem] px-6 text-white ${className}`}>
      <div className="md:flex">
        {/* --- Top Heading --- */}
        <div className="mb-[2rem] md:w-[40%]">
          <h2 className="md:text-[40px] text-[28px] font-semibold md:leading-[52px] md:tracking-[-0.4px]">
            <span className="text-[#4D9EFF]">Numbers That Speak </span>
            <span className="text-white block">for Themselves</span>
          </h2>
        </div>

        {/* --- Stats Row --- */}
        <div className="grid md:grid-cols-4 grid-cols-2 pb-[2rem] md:px-0 px-0 mb-[2rem] flex-wrap gap-4 xl:gap-14">
          {statsToUse.map((s, i) => (
            <div key={i} className="flex flex-col md:min-w-[120px]">
              <div
                className="font-semibold text-[#E0E0E0] md:text-[32px] text-[20px] md:leading-[44px]"
              >
                {s.value}
              </div>
              <p
                className="capitalize text-[#B3B3B3] text-[12px] leading-[18px]"
                style={{ fontWeight: 400 }}
              >
                {s.label.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Tabs Section --- */}
      <div className="flex flex-col md:flex-row gap-2 bg-[#4D9EFF0F] p-2 rounded-xl">
        <div className="w-full flex items-center justify-center md:hidden block">
          {imageToUse ? (
            <img
              src={imageToUse}
              alt="SEO tab result"
              className="transition-all duration-500 ease-in-out"
            />
          ) : null}
        </div>
        {/* Left Tabs */}
        <div className="flex flex-col w-full md:w-[35%] h-auto space-y-3 items-stretch">
          {tabsToUse.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <div
                key={tab.id}
                role="button"
                aria-expanded={isActive}
                className={`rounded-lg border transition-all duration-300 cursor-pointer bg-[#4D9EFF1A] p-5 h-auto min-h-0  ${
                  isActive ? "border-[#4D9EFF]" : "border-transparent"
                }`}
                onClick={() => setTab(tab.id)}
              >
                <p
                  className="font-semibold text-[16px] leading-[24px]"
                  style={{ color: "var(--text-default-Heading, #FFF)" }}
                >
                  {tab.question}
                </p>

                {/* Slide open (top -> bottom) when active */}
                <div
                  className={`mt-1 grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="text-[12px] leading-[18px] text-[#B3B3B3] capitalize"
                      style={{ fontWeight: 400 }}
                    >
                      {tab.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Graph/Image */}
        <div className="w-full flex items-center justify-center md:block hidden">
          {imageToUse ? (
            <img
              src={imageToUse}
              alt="SEO tab result"
              className="transition-all duration-500 ease-in-out w-full h-auto object-contain"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default SeoResult;
