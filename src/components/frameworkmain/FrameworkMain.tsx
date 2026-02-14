'use client'
import Framework from '../framework/Framework'

export default function FrameworkMain() {

  return (
    <div className=" md:px-20 px-6 md:py-20 py-10 md:flex gap-16">
      <div className="">
        <div className=" sticky top-24 ">
          <h2 className="text-[36px] md:text-[56px] font-semibold text-[#FFF] md:leading-[72px] leading-[48px] md:tracking-[-1.12px] mb-4">
            A Proven Shopify SEO Framework <span className='text-[#4D9EFF]'>Built <br className='md:block hidden' /> for Growth</span>
          </h2>
          <p className="text-[#E0E0E0] text-[18px] pb-6">
           We are not here to run experiments on your brand. Bluvo is built to turn Shopify SEO into your strongest revenue engine.
          </p>
          <button
              type="button"
              className="
                flex items-center justify-center gap-1.5
                px-6 py-3
                rounded-lg
                bg-[#E1F0FF]
                shadow-[0_4px_100px_0_rgba(77,158,255,0.10)]
                text-black font-semibold text-[14px] leading-[20px]
                transition-all duration-300
                hover:bg-[#D7E9FF] hover:shadow-[0_4px_100px_0_rgba(77,158,255,0.20)]
                active:scale-[0.97]
              "
            >
              Start My Growth Plan
          </button>
        </div>
      </div>

      <div className="w-full h-fit ">
          <Framework />
      </div>
    </div>
  )
}
