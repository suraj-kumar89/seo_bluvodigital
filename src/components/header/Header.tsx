import React from "react";
import { useHeader, type NavItem } from "./useHeader";
import BullseyeButton from "../BullseyeButton"
type HeaderProps = {
  /** Path to your logo svg or a React node */
  logo?: React.ReactNode;
  /** Override nav items, otherwise hook default is used */
  items?: NavItem[];
  /** Label for CTA */
  ctaLabel?: string;
  /** Click handler for CTA */
  onCta?: () => void;
  /** Optional className passthrough */
  className?: string;
};

export default function Header({
  items,
  ctaLabel = "Let’s Talk",
  onCta,
}: HeaderProps) {
  const { navItems, isActive } = useHeader(items);

  return (
    <header className=" backdrop-blur w-full"
    >
      <div
        className={[
          "mx-auto max-w-[1440px]",
          // height and spacing from your layout
          "h-[100px] px-10",
          "flex items-center justify-between",
        ].join(" ")}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
            <img src="/logo.svg" alt="logo" />
        </div>

        {/* Middle: Nav */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
<a
  href={item.href}
  aria-current={active ? "page" : undefined}
  className={[
    "relative inline-flex items-center",
    "font-semibold text-[16px] leading-[120%]",
    active ? "text-white" : "text-white/60",
    "transition-all duration-300",
    "focus:outline-none  rounded-sm",
    "py-2 group",
    "hover:text-white",
  ].join(" ")}
>
  {item.label}
  <span
    aria-hidden
    className={[
      "pointer-events-none absolute -bottom-[6px] left-0 h-[1.5px]",
      active ? "w-full bg-white" : "w-0 bg-white/80",
      "transition-all duration-300 origin-left",
      "group-hover:w-full group-focus:w-full",
      // glowing underline
      "group-hover:shadow-[0_0_10px_#3385E6]",
    ].join(" ")}
  />
</a>

                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-3">
        <BullseyeButton onClick={onCta}>{ctaLabel}</BullseyeButton>

        </div>
      </div>
    </header>
  );
}
