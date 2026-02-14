// hooks/useCovers.ts
export type SpecialistFeature = {
  id: number;
  description: string;
};

export const useSpecialistSection = (): SpecialistFeature[] => {
  return [
    {
      id: 1,
      description:
        "We solve Shopify quirks like apps, Liquid code, and duplicate URLs that confuse Google",
    },
    {
      id: 2,
      description:
        "Structured data and schema implementation tailored for ecommerce visibility (rich snippets, product reviews, pricing)",
    },
    {
      id: 3,
      description:
        "Deep integration with paid marketing insights to align SEO with your CAC and LTV goals",
    },
    {
      id: 4,
      description:
        "Every optimisation is tied to conversions, not just traffic",
    },
    {
      id: 5,
      description:
        "Product and collection pages optimised to rank and convert, not left as thin templates",
    },
    {
      id: 6,
      description:
        "Built for scale so your SEO grows as your business grows",
    },
    {
      id: 7,
      description:
        "Site speed fixes designed for heavy Shopify themes and third-party apps",
    },
  ];
};
