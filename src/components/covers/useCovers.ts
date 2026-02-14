// hooks/useCovers.ts
export type CoverFeature = {
  id: number;
  icon: string;       // path to your SVG or Lucide icon name
  title: string;
  description: string;
};

export const useCovers = (): CoverFeature[] => {
  return [
    {
      id: 1,
      icon: "/assets/icons/icon1.svg",
      title: "Technical SEO & Site Speed Fixes",
      description:
        "We solve Shopify-specific technical issues like Liquid code bloat, slow-loading themes, app conflicts, and indexing problems. Faster, cleaner stores rank higher and convert better.",
    },
    {
      id: 2,
      icon: "/assets/icons/icon2.svg",
      title: "Conversion-First Content Strategy",
      description:
        "From collection and product pages to blogs, our content is built to do more than rank. We create high-converting copy that brings traffic in and moves shoppers to checkout.",
    },
    {
      id: 3,
      icon: "/assets/icons/icon3.svg",
      title: "CRO Optimisation That Drives Sales",
      description:
        "SEO is wasted if your traffic doesn’t convert. We optimise PDPs, collection layouts, and UX flows so every click has a higher chance of turning into revenue.",
    },
    {
      id: 4,
      icon: "/assets/icons/icon4.svg",
      title: "Transparent Reporting Tied to Revenue",
      description:
        "Forget vanity metrics. Every report we deliver connects SEO efforts to your sales pipeline. You’ll see exactly how much revenue SEO is adding to your store.",
    },
        {
      id: 5,
      icon: "/assets/icons/icon5.svg",
      title: "Transparent Reporting Tied to Revenue",
      description:
        "Forget vanity metrics. Every report we deliver connects SEO efforts to your sales pipeline. You’ll see exactly how much revenue SEO is adding to your store.",
    },
  ];
};
