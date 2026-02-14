const SeoProfitSection = () => {
  return (
    <section className="relative w-full text-white md:py-20 py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center px-6">
        {/* Main Headings */}
        <h2 className="text-[28px] md:text-[56px] font-semibold md:leading-[72px] md:tracking-[-1.12px] mb-3">
          Make SEO Your <br />
          <span className="text-[#4D9EFF]">Most Profitable Channel</span>
        </h2>
        <p className="text-[#E0E0E0] text-[18px] font-semibold mx-auto md:mb-2 mb-4">
          Paid ads are a treadmill. Stop paying and sales stop.
        </p>
        <p className="text-[#E0E0E0] text-[16px] mx-auto">
          SEO compounds over time. Lower CAC, higher LTV and sales <br className="md:block hidden" /> continue -
          even when ad budgets stop.
        </p>
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <img src="/assets/graph1.png" alt="Paid Ads Graph" />
            <img src="/assets/graph2.png" alt="SEO Growth Graph" />
        </div>
      </div>
    </section>
  );
};

export default SeoProfitSection;
