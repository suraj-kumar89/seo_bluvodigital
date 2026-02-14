'use client'

import CourseLevel from '../courselevel/CourseLevel'

export default function Growth() {

  return (
    <div className=" md:pl-[120px] md:py-20 py-10 md:px-0 px-6 flex gap-16">
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col w-[50%] ">
        {/* Sticky Title + Subheading */}
        <div className="">
          <h2 className="text-[28px] text-center md:text-start md:text-[56px] font-semibold text-[#FFF] md:leading-[72px] md:tracking-[-1.12px]mb-4">
            <span className='text-[#4D9EFF]'>A Shopify SEO Agency</span> <br /> Obsessed With Your Revenue
          </h2>
          <p className="text-[#E0E0E0] text-center md:text-start text-[18px] pt-6">
            We are not here to run experiments on your brand. Bluvo is built to turn Shopify SEO into your strongest revenue engine.
          </p>
          <CourseLevel />
        </div>
      </div>

      {/* RIGHT COLUMN: Sticky Image */}
      <div className="w-[45%] h-fit sticky top-24 hidden lg:block">
        <img
          src="/Shopify_Dashboard.png"
          alt="Growth Visual"
          className="w-full h-auto rounded-l-2xl object-contain"
        />
      </div>
    </div>
  )
}
