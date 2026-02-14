// src/sections/faqs/Faqs.tsx
import React, { useState } from "react";
import { useFaqs } from "./useFaqs";
import type { Faq } from "./useFaqs";
import { FiPlus } from "react-icons/fi";

type Props = {
  titlePrimary?: string;   // "Have questions?"
  titleSecondary?: string; // "Find answers."
  className?: string;
};

// right-aligned plus that rotates to an "x" when open
const PlusToggle: React.FC<{ open: boolean }> = ({ open }) => (
  <FiPlus
    className={`h-5 w-5 shrink-0 text-white/80 transition-transform duration-200 ${
      open ? "rotate-45" : "rotate-0"
    }`}
    aria-hidden
  />
);

const FaqItem: React.FC<{
  item: Faq;
  open: boolean;
  onToggle: () => void;
}> = ({ item, open, onToggle }) => (
  <div className="rounded-xl ">
    <button
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={`faq-${item.id}`}
      className="w-full px-4 sm:px-5 py-4 sm:py-5 flex items-center gap-3
                 bg-transparent appearance-none border-0 outline-none focus:outline-none
                 text-left"
    >
      {/* Question (takes all space, pushes icon to the far right) */}
      <span className="text-sm md:text-[15px] leading-6 text-white/90 grow">
        {item.question}
      </span>

      {/* Right-end icon */}
      <PlusToggle open={open} />
    </button>

    <div
      id={`faq-${item.id}`}
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="px-4 sm:px-5 pb-5 pt-0 -mt-2 text-[13.5px] leading-6 text-gray-300/95">
          {item.answer}
        </div>
      </div>
    </div>
  </div>
);


const Faqs: React.FC<Props> = ({
  titlePrimary = "Have questions?",
  titleSecondary = "Find answers.",
  className = "",
}) => {
  const data = useFaqs();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  // split into two equal-ish columns for md+
  const mid = Math.ceil(data.length / 2);
  const colA = data.slice(0, mid);
  const colB = data.slice(mid);

  return (
    <section className={`w-full text-white pt-20 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] md:text-[56px] font-semibold md:leading-[72px] leading-[48px] md:tracking-[-1.12px]">
            {titlePrimary}
          </h2>
          <p className="text-[36px] md:text-[56px] font-semibold md:leading-[72px] leading-[48px] md:tracking-[-1.12px] text-[#4D9EFF] mt-1">
            {titleSecondary}
          </p>
        </div>


        {/* FAQ Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
          {/* Column A */}
          <div className="space-y-5 md:space-y-5">
            {colA.map((f) => (
              <FaqItem 
                key={f.id}
                item={f}
                open={openId === f.id}
                onToggle={() => toggle(f.id)}
              />
            ))}
          </div>

          {/* Column B */}
          <div className="space-y-5 md:space-y-5">
            {colB.map((f) => (
              <FaqItem
                key={f.id}
                item={f}
                open={openId === f.id}
                onToggle={() => toggle(f.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faqs;
