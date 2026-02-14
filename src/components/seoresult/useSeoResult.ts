import { useState } from "react";

export type SeoStat = {
  value: string;
  label: string;
  subtext: string;
};

export type SeoTab = {
  id: string;
  question: string;
  answer: string;
  image: string;
};

export const useSeoResult = () => {
  const stats: SeoStat[] = [
    {
      value: "500K+",
      label: "Non-Brand Organic \n Visitors Every Month",
      subtext: "",
    },
    {
      value: "30+",
      label: "Shopify Stores Scaled \n With SEO And CRO",
      subtext: "",
    },
    {
      value: "7-figure",
      label: "Revenue Pipelines Created \n From Organic Growth",
      subtext: "",
    },
    {
      value: "3X ROI",
      label: "Compared To \n Ad-Only Strategies",
      subtext: "",
    },
  ];

  const tabs: SeoTab[] = [
    {
      id: "tab1",
      question: "Explosive Growth in 7 Days",
      answer:
        "A single strategic SEO fix triggered a wave of visibility and traffic within just one week.",
      image: "/assets/tabs/tab1.svg",
    },
    {
      id: "tab2",
      question: "90-Day Organic Growth Surge",
      answer:
        "Achieved consistent upward trends in clicks and impressions through targeted keyword optimization.",
      image: "/assets/tabs/tab2.svg",
    },
    {
      id: "tab3",
      question: "53 Percent Growth in One Quarter",
      answer:
        "Organic growth driven by high-intent content and structured data improvements.",
      image: "/assets/tabs/tab3.svg",
    },
    {
      id: "tab4",
      question: "Massive SEO Recovery in 15 Days",
      answer:
        "Recovered lost visibility and stabilized rankings using technical SEO corrections.",
      image: "/assets/tabs/tab4.svg",
    },
  ];

  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return {
    stats,
    tabs,
    activeTabId,
    setActiveTabId,
    activeImage: tabs.find((t) => t.id === activeTabId)?.image,
  };
};
