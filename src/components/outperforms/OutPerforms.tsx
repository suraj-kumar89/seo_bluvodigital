// src/sections/outperforms/OutPerforms.tsx
import React from "react";
import { useOutPerforms } from "./useOutPerforms";

type Props = {
  titlePrimary?: string;  // e.g., "Why Bluvo Outperforms"
  titleSecondary?: string; // e.g., "Typical SEO Agencies"
  bluvoColTitle?: string; // default: "Bluvo’s Shopify SEO"
  otherColTitle?: string; // default: "Other Agencies"
  className?: string;
};

const OutPerforms: React.FC<Props> = ({
  bluvoColTitle = "Bluvo’s Shopify SEO",
  otherColTitle = "Other Agencies",
  className = ""
}) => {
  const rows = useOutPerforms();

  return (
    <section className={`w-full text-white py-20 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[28px] md:text-[56px] font-semibold md:leading-[72px] md:tracking-[-1.12px] md:w-[60%]">
            Why Bluvo <span className="text-[#4D9EFF]">Outperforms</span> Typical SEO Agencies
          </h2>
          <p className="text-[18px] md:text-right text-[#E0E0E0] ">
            See how our Shopify-first SEO approach <br /> delivers real growth while
            others stay <br /> stuck on vanity metrics.
          </p>
        </div>

        {/* Card container */}
        <div className="mt-24 rounded-2xl bg-[#1A1A1A80] ">
          {/* Column headers */}
          <div className="grid grid-cols-1 md:grid-cols-14">
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wide md:col-span-4 md:block hidden">
              &nbsp;
            </div>
            <div className="px-5 py-4 text-[18px] font-semibold tracking-wide border-b-[1px] border-[#4D9EFF] text-[#FFFFFF] md:col-span-5">
              {bluvoColTitle}
            </div>
            <div className="px-5 py-4 text-[18px] font-semibold tracking-wide border-b-[1px] border-[#4D4D4D] text-[#B3B3B3] md:col-span-5 md:block hidden">
              {otherColTitle}
            </div>
          </div>

          {/* Rows */}
          <div className="">
            {rows.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-1 md:grid-cols-14 "
              >
                {/* Left label */}
                <div className="md:col-span-4 px-5 py-6 md:block hidden">
                  <div className="text-[18px] leading-7 font-normal text-[#4D9EFF]">
                    {r.label}
                  </div>
                </div>

                {/* Bluvo column */}
                <div className="md:col-span-5 px-5 py-6">
                  <p className="text-[14px] leading-6 text-[#FFFFFF]">
                    {r.bluvo}
                  </p>
                </div>

                {/* Others column */}
                <div className="md:col-span-5 px-5 py-6 bg-white/[0.02] md:bg-transparent md:block hidden">
                  <p className="text-[14px] leading-6 text-[#B3B3B3]">
                    {r.others}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutPerforms;
