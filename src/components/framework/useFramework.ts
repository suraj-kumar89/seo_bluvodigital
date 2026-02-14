export type FrameworkItem = {
  step: string;
  title: string;
  description: string;
  bg: string;
  lightText?: boolean;
};

export default function useFramework() {
  const items: FrameworkItem[] = [
    { step: "01", title: "Kickoff Call", description: "Shopify has its own quirks — from Liquid templates to collections, apps, and site speed challenges. We specialise in solving these technical blocks so your store performs at peak efficiency and Google recognises it as an authority.", bg: "#1A1C20", lightText: true },
    { step: "02", title: "Store and Product Immersion", description: "We dig into your Shopify store, products, and positioning to understand what makes you different and how that should reflect in search.", bg: "#17191C", lightText: true },
    { step: "03", title: "Customer Journey Mapping", description: "We map how your buyers search, compare, and purchase, ensuring SEO supports them at every step of the funnel.", bg: "#181A1E", lightText: true },
    { step: "04", title: "Technical SEO Audit", description: "We fix the issues that hold back growth: site speed, Liquid errors, duplicate URLs, indexing gaps, and messy app setups.", bg: "#15171A", lightText: true },
    { step: "05", title: "Competitor & Gap Analysis", description: "We uncover what your competitors rank for, where they fall short, and the opportunities you can own.", bg: "#16181B", lightText: true },
    { step: "06", title: "Keyword Research & Revenue Mapping", description: "We go beyond volume-based keyword lists. By combining keyword research with revenue mapping, we prioritise terms that directly connect to your products, categories, and high-value buyers.", bg: "#131416", lightText: true },
    { step: "07", title: "90 Day Roadmap", description: "A step-by-step plan that blends technical fixes, content strategy, and authority building — designed to deliver momentum fast.", bg: "#14161A", lightText: true },
    { step: "08", title: "Execution & Optimisation", description: "From PDPs and collections to blogs and internal linking, every action is focused on driving rankings that convert into sales.", bg: "#121316", lightText: true },
    { step: "09", title: "Authority Building", description: "We strengthen trust through high-quality backlinks, PR mentions, and partnerships that compound visibility over time.", bg: "#101215", lightText: true },
    { step: "10", title: "Transparent Reporting", description: "No vanity metrics. You’ll see exactly what was done, what moved the needle, and what’s next.", bg: "#0F1114", lightText: true },
  ];
  return { items };
}
