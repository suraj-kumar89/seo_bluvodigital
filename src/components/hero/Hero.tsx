import React from "react";
import { useHero } from "./useHero";
import HeroForm from "./HeroForm";

/** If your ./useHero already exports these, import them instead. */
type Point = { id?: string | number; text: string; icon: string };
type BrandLogo = { src: string; alt?: string };

type HeroProps = {
  shopifyBadge?: React.ReactNode;
  points?: Point[];
  brands?: BrandLogo[];
  onSubmit?: (payload: Record<string, string>) => void;
  className?: string;
};

export default function Hero({
  points,
  brands,
  onSubmit,
  className,
  shopifyBadge,
}: HeroProps) {
  const { defaultPoints, defaultBrands } = useHero({ onSubmit });
  const pts: Point[] = points ?? (defaultPoints as Point[]) ?? [];
  const logos: BrandLogo[] = brands ?? (defaultBrands as BrandLogo[]) ?? [];

  // Allow a custom CSS var in inline styles
  type CSSVars = React.CSSProperties & { ["--dur"]?: string };
  const marqueeStyle: CSSVars = { ["--dur"]: "28s" };

  return (
    <section className={`relative isolate w-full overflow-hidden ${className || ""}`}>
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* Left Section */}
          <div>
            {/* Headline */}
            <h1 className="text-[36px] md:text-[56px] font-semibold leading-[48px] md:leading-[72px] md:tracking-[-1.12px]">
              <span className="inline-flex items-center gap-3 align-middle">
                {shopifyBadge ?? (
                  <img src="/shopify.png" alt="Shopify" className="h-[48px] md:h-[67px] w-auto" />
                )}
                <span className="whitespace-nowrap">SEO</span>
              </span>
              <span className="items-center align-middle md:pl-2 pr-2">Agency</span>
              <br className="md:block hidden" />
              <span className="items-center align-middle gap-3">
                That Turns Traffic <br className="md:block hidden" /> Into Revenue
              </span>
            </h1>

            {/* Subcopy */}
            <p className="mt-10 text-[#E0E0E0] text-[18px] leading-[28px]">
              At Bluvo, we specialise in making SEO your{" "}
              <span
                className="
                  relative inline-block font-semibold text-white
                  after:content-[''] after:absolute after:left-0 after:right-0
                  after:-bottom-1 after:h-[10px]
                  after:bg-[url('/assets/underline.svg')] after:bg-no-repeat
                  after:bg-[length:100%_100%]
                "
              >
                #1 profit channel.
              </span>
              <br className="md:block hidden" />
              {" "}
              Every optimisation is tied to revenue, not vanity metrics.
            </p>

            {/* Points */}
            <ul className="mt-12 space-y-4">
              {pts.map((p) => (
                <li
                  key={String(p.id ?? p.text)}
                  className="flex items-start gap-3 text-[#E0E0E0] font-semibold text-[18px] leading-[28px]"
                >
                  <span className="shrink-0" dangerouslySetInnerHTML={{ __html: p.icon }} />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>

            {/* Brand strip */}
            <div className="mt-16">
              <div className="text-[#E0E0E0] text-[12px] leading-[18px] tracking-[0.12px] capitalize mb-6">
                Trusted by Ambitious D2C Brands
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="
                      relative z-0
                      flex w-max items-center gap-10
                      animate-[marquee_var(--dur)_linear_infinite]
                    "
                    style={marqueeStyle}
                  >
                    {/* set 1 */}
                    <div className="flex items-center gap-10 shrink-0">
                      {logos.map((b) => (
                        <img
                          key={`set1-${b.alt ?? b.src}`}
                          src={b.src}
                          alt={b.alt ?? "brand logo"}
                          className="h-7 md:h-8 w-auto object-contain"
                          loading="lazy"
                        />
                      ))}
                    </div>
                    {/* set 2 (duplicate) */}
                    <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
                      {logos.map((b) => (
                        <img
                          key={`set2-${b.alt ?? b.src}`}
                          src={b.src}
                          alt={b.alt ?? "brand logo"}
                          className="h-7 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <style>{`
                @keyframes marquee {
                  from { transform: translateX(0); }
                  to   { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .animate-[marquee_var(--dur)_linear_infinite] {
                    animation: none !important;
                    transform: none !important;
                  }
                }
              `}</style>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="relative">
            <HeroForm
              onSubmit={onSubmit}
              className="rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 md:p-10 p-4 w-full max-w-[530px] ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
