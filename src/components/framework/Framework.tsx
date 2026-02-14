"use client";

import useFramework from "./useFramework";
import { LeftCard, RightCard } from "./Card";

export default function Framework() {
  const { items } = useFramework();

  const leftItems  = items.filter((_, i) => i % 2 === 0);
  const rightItems = items.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1200px] px-0 md:px-6">
        {/* Mobile View */}
        <div className="md:hidden mt-8 space-y-6">
          {items.map((c) => (
            <LeftCard key={c.step} {...c} />
          ))}
        </div>

        {/* Desktop: 2 columns, right column shifted down */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col gap-8">
            {leftItems.map((c) => (
              <LeftCard key={c.step} {...c} />
            ))}
          </div>

          {/* 👇 add mt only to the column */}
          <div className="flex flex-col gap-8 mt-20">
            {rightItems.map((c) => (
              <RightCard key={c.step} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
