// src/sections/outperforms/useOutPerforms.ts

export type OutperformRow = {
  id: string;
  label: string;
  bluvo: string;          // Bluvo’s Shopify SEO column
  others: string;         // Other Agencies column
};

export function useOutPerforms(): OutperformRow[] {
  return [
    {
      id: "frontline",
      label: "Frontline-Led Execution",
      bluvo:
        "Every account has direct senior involvement. Strategy, implementation, QA—handled by specialists who actually ship outcomes.",
      others:
        "Execution is often handed to juniors after pitching. Strategy stays on slides; implementation lags behind."
    },
    {
      id: "dashboards",
      label: "Transparent Dashboards Tied to Sales",
      bluvo:
        "We connect your SEO KPIs to revenue, CAC and LTV. Live dashboards show how organic drives pipeline and orders.",
      others:
        "Rankings and traffic reported in isolation, with little proof of impact on revenue or payback."
    },
    {
      id: "conversion",
      label: "Conversions-Focused SEO",
      bluvo:
        "PDPs, collections and UX flows are optimized to convert—copy, internal links, filters, schema, and speed all aligned.",
      others:
        "Page output is keyword-first, UX later. CRO is out of scope; missed intent lowers conversion."
    },
    {
      id: "selective",
      label: "Selective Onboarding for Impact",
      bluvo:
        "We take on work only when we can move the metrics that matter. Clear hypotheses, clear owners, clear timelines.",
      others:
        "Most scopes are generic, multi-month checklists with diffuse ownership and unclear success criteria."
    },
    {
      id: "alignment",
      label: "End-to-End Growth Alignment",
      bluvo:
        "SEO integrates with paid, lifecycle and merchandising. Roadmaps map to promos, inventory and margin realities.",
      others:
        "Channels stay siloed. SEO plans ignore promo calendars, stock and contribution margin."
    },
    {
      id: "speed",
      label: "Speed = Execution",
      bluvo:
        "From scoping to fixes, approvals are streamlined. Dev-ready tickets and version-controlled changes reduce cycle time.",
      others:
        "Slow feedback loops, unclear tickets and dependency sprawl delay releases by weeks."
    }
  ];
}
