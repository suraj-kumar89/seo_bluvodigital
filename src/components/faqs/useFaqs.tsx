export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const useFaqs = (): Faq[] => [
  {
    id: "q1",
    question: "How is Shopify SEO different from regular SEO?",
    answer:
      "Shopify SEO layers technical fixes (Liquid, app conflicts, theme speed), product/collection structures, and rich data to win commercial intent keywords that actually convert.",
  },
  {
    id: "q2",
    question: "How long will it take to see results?",
    answer:
      "Expect early traction in 6–8 weeks for indexation & technical fixes; compounding growth typically arrives over 3–6 months as category pages and PDPs mature.",
  },
  {
    id: "q3",
    question: "Can SEO really reduce my ad spend?",
    answer:
      "Yes—ranking for high-intent queries reduces dependency on paid clicks and lifts blended ROAS. We also use SEO insights to prune wasted spend in paid.",
  },
  {
    id: "q4",
    question: "Do I need to create content every week?",
    answer:
      "No. Quality beats quantity. We prioritize revenue pages (collections, PDPs), helpful evergreen guides, and structured internal linking over constant blogging.",
  },
  {
    id: "q5",
    question: "How do I know what’s happening behind the scenes?",
    answer:
      "You’ll get dashboards tying SEO work to revenue, annotated roadmaps, and dev-ready tickets. Every change is tracked and easy to review.",
  },
  {
    id: "q6",
    question: "What if my store is small or just starting?",
    answer:
      "We right-size the plan: technical foundations, fast paths to first rankings, and a pragmatic content plan that fits your bandwidth.",
  },
  {
    id: "q7",
    question: "Do you work with brands outside India?",
    answer:
      "Yes—Shopify stores across geographies. We adapt for language, local SERP features, and international technical setups.",
  },
  {
    id: "q8",
    question: "Will I lose rankings during a theme change?",
    answer:
      "Not if handled correctly. We map URLs, preserve markup, migrate schema/internal links, and validate before/after with crawls.",
  },
];
