'use client';

import React from 'react';
import type { HiddenLeaksData } from './useHiddenLeaks';
import { useHiddenLeaks } from './useHiddenLeaks';
import { useSeoResult } from "../seoresult/useSeoResult";
import SeoResult from '../seoresult/SeoResult'

const MeshSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="595" height="724" viewBox="0 0 595 724" fill="none">
    <path
      opacity="0.2"
      d="M87.5498 724L87.5498 0M178.906 724L178.906 0M270.263 724L270.263 0M361.619 724L361.619 0M452.976 724L452.976 0M544.332 724L544.332 0M635.689 724L635.689 0M2.39592e-05 87.55H724M1.9966e-05 178.906H724M1.59728e-05 270.263H724M1.19796e-05 361.619H724M7.9864e-06 452.976H724M3.9932e-06 544.332H724M0 635.689H724"
      stroke="url(#paint0_radial_4706_6033)"
      strokeOpacity="0.6"
    />
    <defs>
      <radialGradient id="paint0_radial_4706_6033" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(362 362) rotate(90) scale(362)">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export interface HiddenLeaksProps {
  data?: HiddenLeaksData & { solution?: string };
  className?: string;
}

const HiddenLeaks: React.FC<HiddenLeaksProps> = ({ data }) => {
  const { stats, tabs, activeTabId, setActiveTabId, activeImage } = useSeoResult();
  
  const hiddenLeaks = useHiddenLeaks();
  const d = {
    solution:
      "The steady-growth plan. We rebuild your store’s SEO around revenue: clean technical base, speed, canonical structure, scalable content, and CRO—to turn SEO into your strongest revenue channel.",
    ...(data ?? hiddenLeaks),
  };

  // Active item state (default = first)
  const [activeIdx, setActiveIdx] = React.useState(0);
  const items = d.points ?? [];

  // Detail text per point (from your mock)
  const details: Record<string, string> = {
    '1':
      "Shopify stores often rely on too many third-party apps and unoptimised themes. Each one adds extra code, increasing load time and killing conversions. A slow site doesn’t just frustrate visitors — it tells Google your store isn’t worth ranking.",
    '2':
      "Shopify’s default structure can create duplicate URLs and overlapping tags without you realising. This confuses search engines about which page to prioritise, splitting your ranking power and wasting valuable crawl budget.",
    '3':
      "Many Shopify stores have pages with weak content, missing internal links, or poor keyword alignment. These pages fail to show relevance or authority — meaning even great products stay invisible in search results.",
    '4':
      "If all your sales come from ads, you’re renting traffic — not owning it. The moment you reduce spend, growth stops. Without organic visibility, every month begins at zero again, making scaling unpredictable and expensive.",
  };

  const activeDetail =
    items.length ? details[items[activeIdx]?.id] ?? items[activeIdx]?.text ?? '' : '';

  return (
    <div className="relative isolate w-full overflow-hidden">
    <SeoResult
      stats={stats}
      tabs={tabs}
      activeTabId={activeTabId}
      onChangeTab={setActiveTabId}
      activeImage={activeImage}
      className="md:my-16"
    /> 
      <div className="pointer-events-none absolute right-0 bottom-2/5 hidden md:block z-0">
        <MeshSVG />
      </div>
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-24 md:px-8 lg:pt-16 lg:pb-28">
        {/* HEADER */}
        <div className="mx-auto  max-w-4xl text-center">
          <h2 className="text-white  text-[28px] md:text-[40px] md:leading-[52px] md:tracking-[-0.4px] font-semibold">
            The Hidden Leaks That Keep <br /> Shopify Stores From <span className="text-[#4D9EFF]">Scaling</span>
          </h2>
          <p className="mt-3 md:text-[18px] text-[14px] md:leading-[24px] text-white/80 ">
            Shopify makes launching easy but scaling profitably is another story. These are the <br className='md:block hidden' />problems most founders face:
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="my-12 grid grid-cols-1 gap-8 md:my-16 md:grid-cols-2 md:gap-12">
          {/* LEFT LIST */}
          <div className="relative">
            <ul className="space-y-1">
              {items.map((p, idx) => {
                const isActive = idx === activeIdx;
                return (
<li
  key={p.id}
  role="button"
  aria-selected={isActive}
  tabIndex={0}
  onClick={() => setActiveIdx(idx)}
  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveIdx(idx)}
  onMouseEnter={() => setActiveIdx(idx)}     // ← change active on hover
  onFocus={() => setActiveIdx(idx)}          // ← change active on keyboard focus
  className={[
    'group flex items-center gap-2 py-1 transition cursor-pointer select-none',
    isActive
      ? 'border-l-2 border-[#a71313] bg-gradient-to-r from-[#FFFFFF1A] to-transparent'
      : 'hover:border-l-2 hover:border-[#a71313] hover:bg-gradient-to-r hover:from-[#FFFFFF1A] hover:to-transparent',
  ].join(' ')}
>
  <span
    className={[
      'text-[12px] leading-[22px] p-2 font-semibold transition',
      isActive ? 'text-[#EAEAEA]' : 'text-[#B3B3B3] group-hover:text-[#D1D1D1]',
    ].join(' ')}
  >
    {p.text}
  </span>
</li>

                );
              })}
            </ul>
          </div>

          {/* RIGHT: changes with active item */}
          <div className="relative  z-20">
            <div style={{background: 'rgba(255, 255, 255, 0.04)'}} className="relative rounded-xl  p-5 sm:p-6 overflow-hidden">
              <p className="relative z-10 text-[20px] leading-6 text-white text-center p-5">
                {activeDetail}
              </p>
            </div>  
          </div>
        </div>

        {/* CTA STRIP */}
        <div style={{background: 'rgba(255, 255, 255, 0.04)'}} className="mt-0 md:!pl-[40px] md:!pr-[96px] rounded-lg p-4 md:p-6 flex flex-col justify-center md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="md:text-[32px] text-[18px] font-semibold text-white">Fix the Leaks. Unlock Growth.</div>
            <p className="mt-1 md:text-[14px] text-[12px] leading-5 text-[#E0E0E0]">
              This is exactly what Bluvo was built to fix. We are a Shopify SEO agency focused on compounding sales, not
              <br className='md:block hidden'/>
              vanity metrics. Our job is to close these leaks and turn organic growth into your strongest revenue channel.
            </p>
          </div>

          <div className="md:self-stretch shrink-0 flex flex-col justify-center">
            <div className="relative">
              <img src="/assets/solutionhere.svg" alt="" className="absolute bottom-[20%] right-44" />
              <button className="relative z-10 w-full rounded-md bg-[#4D9EFF] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#FFEA4D] hover:text-black">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiddenLeaks;
