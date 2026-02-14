import type { FrameworkItem } from "./useFramework";

const t = {
  h4: "text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold",
  body: "text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-normal",
};

type BaseProps = FrameworkItem & { className?: string };

function CardBase({ title, step, description, bg, lightText, className }: BaseProps) {
  const text = lightText ? "text-white" : "text-[#242325]";
  const sub  = lightText ? "text-white/90" : "text-[#242325]/90";

  return (
    <article
      className={[
        "relative rounded-[20px] px-6 py-8 md:px-8 md:py-10",
        "ring-1 ring-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "hover:shadow-xl transition-shadow",
        className ?? "",
      ].join(" ")}
      style={{ backgroundColor: bg }}
    >
      <div className="flex items-center gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
          <span className="text-white font-semibold">{step}</span>
        </div>
      </div>

      <h3 className={`${t.h4} ${text} pt-6`}>{title}</h3>
      <p className={`${t.body} ${sub} mt-3`}>{description}</p>
    </article>
  );
}

export const LeftCard = (props: FrameworkItem) => <CardBase {...props} />;
export const RightCard = (props: FrameworkItem) => <CardBase {...props} />;
