export type CourseLevelItem = {
  tier: string;        // e.g., "Shopify-First Expertise"
  label: string;       // e.g., "Scale/900"
  description: string; // body copy
  bg: string;          // hex/rgb for card bg
  lightText?: boolean; // toggle white type
  icon?: string;       // optional emoji or icon char
};

export default function useCourseLevel() {
  const items: CourseLevelItem[] = [
    {
      tier: "Shopify-First Expertise",
      label: "Scale/900",
      description:
        "Shopify has its own quirks — from Liquid templates to collections, apps, and site speed changes. We specialize in solving these invisible blocks so your store performs on Shopify and Google like it’s an authority.",
      bg: "#1A1C20",
      lightText: true,
      icon: "/assets/revenueicon/shopping.svg",
    },
    {
      tier: "Founder-Led Involvement",
      label: "Hands-on Strategy",
      description:
        "Your growth’s too important to hand off to juniors. Every strategy is shaped and reviewed at the founder level so you always get battle-tested eCommerce sense and business-first thinking.",
      bg: "#17191C",
      lightText: true,
      icon: "/assets/revenueicon/king.svg",
    },
    {
      tier: "Radical Transparency",
      label: "Clarity Over Vanity",
      description:
        "No smoke, just signal. You’ll get visibility with live dashboards and decisive reporting that make every action tie to revenue impact—not vanity metrics like impressions or keyword counts.",
      bg: "#15171A",
      lightText: true,
      icon: "/assets/revenueicon/insightful.svg",
    },
    {
      tier: "End-to-End Execution",
      label: "From SEO → CRO → Rev",
      description:
        "From technical SEO to content, CRO, and authority building—everything is handled in-house. That means you get consistent velocity, cohesive strategy, and a partner that actually ships results.",
      bg: "#131416",
      lightText: true,
      icon: "/assets/revenueicon/ethics.svg",
    },
  ];

  return { items };
}
