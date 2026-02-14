// src/sections/getintouch/useGetinTouch.ts
import type { JSX } from "react";

export type ContactInfo = {
  phone: string;
  location: string;
  email: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  /** e.g. <FiTwitter /> will be passed from the component */
  icon?: JSX.Element;
};

export type SelectOption = { value: string; label: string };

export function useGetinTouch() {
  const contact: ContactInfo = {
    phone: "+91 82871 24652",
    location: "12th Avenue, Gaur City 2,\nNoida, India",
    email: "team@bluvodigital.com",
  };

  const services: SelectOption[] = [
    { value: "shopify-seo", label: "Shopify SEO" },
    { value: "technical-seo", label: "Technical SEO" },
    { value: "content-seo", label: "Content & On-Page" },
    { value: "analytics", label: "Analytics & Tracking" },
    { value: "consulting", label: "SEO Consulting" },
  ];

  const budgets: SelectOption[] = [
    { value: "<1k", label: "< $1k / mo" },
    { value: "1-3k", label: "$1k - $3k / mo" },
    { value: "3-5k", label: "$3k - $5k / mo" },
    { value: "5-10k", label: "$5k - $10k / mo" },
    { value: ">10k", label: "> $10k / mo" },
  ];

  const socials: SocialLink[] = [
    { id: "x", label: "X", href: "#" },
    { id: "fb", label: "Facebook", href: "#" },
    { id: "ig", label: "Instagram", href: "#" },
    { id: "ln", label: "LinkedIn", href: "#" },
    { id: "yt", label: "YouTube", href: "#" },
  ];

  return { contact, services, budgets, socials };
}
