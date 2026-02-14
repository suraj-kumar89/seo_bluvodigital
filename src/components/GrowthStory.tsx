const GrowthStory = () => {
  return (
    <section className={`w-full py-10 `}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative overflow-hidden rounded-[28px]">
          {/* Background image */}
          <img
            src='/assets/growthstory.png'
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover bg-[#FFFFFF0A]"
          />



          {/* Content */}
          <div className="relative flex flex-col items-center justify-center gap-6 px-6 py-20 md:py-24 text-center">
            <h2 className="text-[36px] md:text-[56px] font-semibold md:leading-[72px] leading-[48px] md:tracking-[-1.12px]">
              <span className="">
                Let’s Build Your Next <br /> Big
              </span>{" "}
                <span className="text-[#4D9EFF]">
                Growth Story
              </span>
            </h2>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href='/'
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold !text-white bg-[#3B82F6] hover:bg-[#FFEA4D] hover:!text-black"
                >
                  Book Free Audit
                </a>

                <a
                  href='/'
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 ring-1 ring-white/30 transition"
                >
                  Talk to an Expert
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
