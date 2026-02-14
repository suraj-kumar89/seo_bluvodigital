'use client';

import React from "react";
import useCourseLevel from "./useCourseLevel";

/** Typography tokens (Tailwind utilities only) */
const t = {
  caption: "text-[16px] leading-[24px] font-normal font-sans text-[#E0E0E0]",
  h4: "text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold",
  big: "text-[32px] md:text-[40px] leading-[34px] md:leading-[44px] font-semibold tracking-[-0.02em]",
  body: "text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-normal",
};

/** Sticky offsets (desktop/mobile) */
const TOPS_DESKTOP = ["top-[210px]", "top-[350px]", "top-[220px]", "top-[260px]"];
const TOPS_MOBILE  = ["top-[116px]",  "top-[130px]", "top-[240px]", "top-[300px]"];

/** Overlap spacing so cards nest */
const OVERLAP_DESKTOP = "md:mt-24";
const OVERLAP_MOBILE  = "mt-10";

function Card({
  tier,
  description,
  bg,
  lightText,
  icon,          // can be a path to an image or a React node (e.g., inline SVG component)
}: {
  tier: string;
  label: string;
  description: string;
  bg: string;
  lightText?: boolean;
  icon?: string | React.ReactNode;
}) {

  return (
    <div
      className="relative rounded-[20px] px-6 py-8 md:px-10 md:py-12 ring-1 ring-white/5"
      style={{ backgroundColor: bg }}
    >
      {/* Header row: icon + tier */}
      <div className="flex items-center gap-3">
        {icon ? (
          <div className="inline-flex items-center justify-center rounded-lg bg-white/10 overflow-hidden">
              <img
                src={icon as string}
                alt={`${tier} icon`}
                className="object-contain"
              />
          </div>
        ) : null}

      </div>
        <div className={`${t.h4} ${lightText ? "text-white" : "text-[#242325]"} pt-8`}>
          {tier}
        </div>
      {/* Content grid */}
      <div className="mt-4 grid grid-cols-1 items-start gap-6 md:grid-cols-[auto_minmax(0,1fr)]">
        <p className={`${t.body} ${lightText ? "text-white/90" : "text-[#242325]/90"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CourseLevel() {
  const { items } = useCourseLevel(); // ensure each item.icon is a string path OR a React node

  return (
    <section className="w-full">
      <div className="mx-auto">
        {/* Sticky stack */}
        <div className="relative mx-auto mt-6 md:mt-16 max-w-[1200px] md:pb-[40vh]">
          {items.map((c, i) => {
            const topDesktop = TOPS_DESKTOP[i] ?? "top-[110px]";
            const topMobile  = TOPS_MOBILE[i]  ?? "top-[90px]";
            return (
              <div
                key={c.tier}
                className={["sticky", topMobile, `md:${topDesktop}`, OVERLAP_MOBILE, OVERLAP_DESKTOP].join(" ")}
                style={{ zIndex: 20 + i }}
              >
                <Card
                  tier={c.tier}
                  label={c.label}
                  description={c.description}
                  bg={c.bg}
                  lightText={c.lightText}
                  icon={c.icon}     // string path (PNG/SVG) or React node
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
