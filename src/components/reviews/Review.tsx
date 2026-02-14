'use client';

import React from 'react';
import { useReviews, type ReviewItem } from './useReviews';
import { GoArrowLeft  } from "react-icons/go";
function ArrowBtn({
  onClick,
  dir,
}: { onClick: () => void; dir: 'prev' | 'next' }) {
  const isPrev = dir === 'prev';
  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? 'Previous review' : 'Next review'}
      className="
        inline-flex h-10 w-10 items-center justify-center rounded-full
        bg-white/10 text-white hover:bg-white/20 transition
        ring-1 ring-white/10
      "
    >
      <GoArrowLeft
        className={isPrev ? '' : 'rotate-180'}
        aria-hidden
      />
    </button>
  );
}

type TinyCardProps = {
  item: ReviewItem;
  align?: 'left' | 'right';
  onClick?: () => void;
  selected?: boolean;
};

function TinyCard({ item,  onClick, }: TinyCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-lg bg-[#1A1A1A] text-white/90 ",
        "p-3 md:p-4 w-[240px] md:w-[280px] h-[80px] md:h-[120px]",
        "flex items-center gap-3 md:gap-4 cursor-pointer transition",
        "",
      ].join(" ")}
    >
      <img
        src={item.avatar}
        alt={item.name}
        className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover flex-none md:block hidden"
        loading="lazy"
      />
      <div className="min-w-0 flex-1 text-left">
        <div className="text-sm md:text-[15px] font-semibold text-white truncate">
          {item.name}
        </div>
        <div className="text-[12px] md:text-[13px] text-white/60 truncate">
          {item.role}
        </div>
      </div>
      {/* <div className={`text-white/90 text-lg md:text-xl font-semibold md:block hidden ${align === 'left' ? 'ml-auto' : ''}`}>
        {item.metric}
      </div> */}
    </button>
  );
}


function CenterCard({ item }: { item: ReviewItem }) {
  return (
    <>
      {/* MOBILE: quote only + footer row (no big photo) */}
      <div className="md:hidden">
        <blockquote className="text-white/90 text-[15px] leading-[24px]">
          “{item.quote}”
        </blockquote>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <div className="text-white font-semibold leading-5 text-sm">{item.name}</div>
              <div className="text-white/60 text-xs">{item.role}</div>
            </div>
          </div>
          {/* <div className="text-white/80 text-xl font-semibold">{item.metric}</div> */}
        </div>
      </div>

      {/* DESKTOP: photo + quote (your previous layout) */}
        <div className="md:block hidden " > 
            <div className='flex flex-row items-start gap-6'>
            <div className="">
                <img src={item.photo} alt={item.name} className="rounded-2xl md:h-[378px] " /> 
            </div> {/* Quote + metric */} 
            <div className="md:w-[60%] md:h-[378px]  flex flex-col">
              <blockquote className="text-white/90 text-[15px] md:text-[17px] leading-[24px] md:leading-[28px]">
                “{item.quote}”
              </blockquote>

              <div className="mt-6 md:mt-auto flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold leading-6">{item.name}</div>
                  <div className="text-white/60 text-sm">{item.role}</div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </>
  );
}


export default function Review() {
  const { items } = useReviews();
  const [active, setActive] = React.useState(0); // index of center card

  const count = items.length;
  const prevIndex = (active - 1 + count) % count;
  const nextIndex = (active + 1) % count;

  const goPrev = () => setActive(prevIndex);
  const goNext = () => setActive(nextIndex);

  // keyboard support
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section className="relative isolate w-full overflow-hidden py-12 md:py-16">
      {/* Heading */}
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <h2 className="text-[36px] md:text-[56px] font-semibold md:leading-[72px] md:tracking-[-0.02em]">
          <span className="text-[#4D9EFF]">Reviews</span>{' '}
          <span className="text-white">from our Clients</span>
        </h2>
        <p className="mt-3 text-white/70 text-[14px] md:text-[15px]">
          We partner with ambitious D2C brands that want SEO to drive real growth, not vanity metrics.
        </p>
      </div>

{/* Carousel Row */}
<div className="mx-auto mt-10 md:mt-14 max-w-7xl px-6 md:px-8">
<div className="hidden md:grid md:grid-cols-[260px_minmax(0,1fr)_260px] md:gap-8">
  {/* LEFT: arrow top-right, card bottom-left */}
  <div className="flex h-[378px] flex-col justify-between">
    <div className="self-end">
      <ArrowBtn dir="prev" onClick={goPrev} />
    </div>
    <div className="self-start">
      <TinyCard
        item={items[prevIndex]}
        align="right"
        onClick={() => setActive(prevIndex)}
        selected={active === prevIndex}
      />
    </div>
  </div>

  {/* CENTER */}
  <div className="justify-self-center">
    <CenterCard item={items[active]} />
  </div>

  {/* RIGHT: card top-right, arrow bottom-left */}
  <div className="flex h-[360px] flex-col justify-between">
    <div className="self-end">
      <TinyCard
        item={items[nextIndex]}
        align="left"
        onClick={() => setActive(nextIndex)}
        selected={active === nextIndex}
      />
    </div>
    <div className="self-start">
      <ArrowBtn dir="next" onClick={goNext} />
    </div>
  </div>
</div>
{/* MOBILE */}
<div className="md:hidden">
  <CenterCard item={items[active]} />

  {/* horizontally scrollable tiny cards */}
  <div
    className="
      mt-6 flex gap-3 overflow-x-auto
      [-ms-overflow-style:none] [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden 
    "
  >
    {items.map((it, idx) => (
      <TinyCard
        key={it.id}
        item={it}
        onClick={() => setActive(idx)}
        selected={idx === active}
      />
    ))}
  </div>
</div>

</div>

    </section>
  );
}
