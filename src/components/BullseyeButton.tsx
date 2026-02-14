// BullseyeButton.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  onClick?: () => void;
  children: React.ReactNode;         // default (resting) label
  hoverLabel?: string;               // label shown on hover (default: "Book a call")
};

export default function BullseyeButton({
  children,
  hoverLabel = "Book a call",
}: Props) {
  const [hovered, setHovered] = useState(false);
const nav = useNavigate();
  return (
    <button
      onClick={() => nav("/contact_us")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        btn-bullseye
        relative inline-flex items-center justify-center
        md:min-w-[170px] px-6 md:px-[28px] py-[10px] rounded-full
        font-semibold text-[16px] leading-6
        bg-white text-black
        shadow transition-[transform,background-color,color]
        duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20
        overflow-hidden
      "
    >
      {/* resting label */}
      <span
        className={`transition-all duration-200 ${
          hovered ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
        {children}
      </span>

      {/* hover label (Book a call) */}
      <span
        className={`absolute transition-all duration-200 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {hoverLabel}
      </span>

      {/* scoped styles */}
      <style>{`
        .btn-bullseye {
          cursor: pointer;
          isolation: isolate; /* keeps ::before beneath content only */
        }
        .btn-bullseye::before {
          content: "";
          position: absolute;
          inset: 0;
          margin: auto;
          width: 50px;
          height: 50px;
          border-radius: inherit;
          transform: scale(0);
          transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;

          /* blue ➜ yellow ➜ blue concentric bullseye */
          background: radial-gradient(
            circle at center,
            #3385e6 0 22%,
            #ffea4d 22% 62%,
            #3385e6 62% 100%
          );
        }
        .btn-bullseye:hover {
          background-color: #3385e6;  /* requested hover bg */
          color: #ffffff;             /* better contrast on blue */
          transform: scale(1.06);
        }
        .btn-bullseye:active {
          transform: scale(1);
        }
        .btn-bullseye:hover::before {
          transform: scale(14.2);      /* grows to fill the pill */
        }
      `}</style>
    </button>
  );
}
