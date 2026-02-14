'use client';
import useCourseLevel from "./useRevenue";

const TOPS_DESKTOP = ["top-[0px]", "top-[0px]", "top-[0px]", "top-[0px]"];
const TOPS_MOBILE  = ["top-[0px]",  "top-[0px]", "top-[0px]", "top-[0px]"];

const OVERLAP_DESKTOP = "md:mt-0";
const OVERLAP_MOBILE  = "mt-0";

function Card({
  image,
}: {
  image: string;
}) {
  return (
    <div className="justify-center items-center flex">
      <img src={image} alt="Google course level card" className="rounded-2xl " />
    </div>
  );
}

export default function Revenue() {
  const { items } = useCourseLevel();

  return (
    <section className="w-full">
      {/* Scale/1600, side padding 120 */}
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px]  ">
        {/* Section header */}
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-[36px] md:text-[56px] font-semibold text-[#FFF] md:leading-[72px] md:tracking-[-1.12px]">
            <span className="text-[#4D9EFF]">A Shopify SEO Agency</span> <br  className="md:block hidden"/> for Brands That Want Real Growth - Not Old SEO Tricks
          </h2>
          <p className="text-[18px] text-[#E0E0E0] pt-10 ">AI content farms are flooding search. Outdated SEO playbooks no longer work. <br className="md:block hidden" /> Bad SEO is dying while smart brands are building stronger authority.</p>
        </div>

        {/* Sticky stack */}
        <div className="relative mx-auto max-w-[1200px] ">
          {items.map((c, i) => {
            const topDesktop = TOPS_DESKTOP[i] ?? "top-[]";
            const topMobile  = TOPS_MOBILE[i]  ?? "top-[]";
            return (
              <div
                key={`course-${i}`}
                className={[
                  "sticky",
                  topMobile,
                  `md:${topDesktop}`,
                  OVERLAP_MOBILE,
                  OVERLAP_DESKTOP,
                ].join(" ")}
                style={{ zIndex: 20 + i }} // dynamic z-index
              >
                <Card image={c.image}  />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
