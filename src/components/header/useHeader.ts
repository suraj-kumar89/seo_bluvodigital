import { useMemo } from "react";

export type NavItem = {
  label: string;
  href: string;
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function useHeader(overrides?: NavItem[]) {
  const navItems = useMemo(
    () => (overrides?.length ? overrides : DEFAULT_ITEMS),
    [overrides]
  );

  // Basic active checker
  const isActive = (href: string) => {
    if (typeof window === "undefined") return false;

    const current = window.location.pathname || "/";

    // active if exact match or current starts with href
    return href !== "/"
      ? current.startsWith(href)
      : current === "/";
  };

  return { navItems, isActive };
}