import { useMemo } from "react";

/** Public type so TeamSection and other components can reuse it */
export type Member = {
  name: string;
  bio: string;
  avatar: string;        // e.g. "/assets/shitanshu.png"
  linkedin?: string;
  logos?: string[];      // array of logo image URLs
};

export type UseTeamSectionOptions = {
  titlePrimary?: string;
  titleAccent?: string;
  intro?: string;
  members?: Member[];
  limit?: number;
};

export type UseTeamSectionResult = {
  titlePrimary: string;
  titleAccent: string;
  intro: string;
  members: Member[];
};

/** Default content (matches your example) */
export const DEFAULT_MEMBERS: Member[] = [
  {
    name: "Shitanshu Kumar",
    bio: "Founder of Bluvo Digital. Performance marketing and SEO strategist. Has scaled 50+ D2C brands.",
    avatar: "/shitanshu.png",
    linkedin: "https://www.linkedin.com/in/shitanshu-kumar1/",
    logos: [
      "/sithanshulogos/Alfa.png",
      "/sithanshulogos/BienLeaf.png",
      "/sithanshulogos/FabHotels.png",
      "/sithanshulogos/NeilPatel.png",
      "/sithanshulogos/Dennison.png", // avoid spaces in filename
    ],
  },
  {
    name: "Pritesh Mishra",
    bio: "SEO Manager. 5 years of experience in Shopify SEO. Has delivered results for brands in fashion, lifestyle and wellness.",
    avatar: "/pritesh.png",
    linkedin: "https://www.linkedin.com/in/pritesh-kumar-4b86b2220/",
    logos: [
      "/priteshlogos/NPDigital.png",
      "/priteshlogos/TimesofIndia.png",
      "/priteshlogos/ValueCreatives.png",
      "/priteshlogos/Thegoodroad.png",
    ],
  },
];

export function useTeamSection(options?: UseTeamSectionOptions): UseTeamSectionResult {
  const {
    titlePrimary = "Your Growth",
    titleAccent = "Team",
    intro = "Meet the team behind Bluvo Digital, a group of performance marketers and SEO specialists who have helped leading D2C brands grow traffic, revenue, and profitability through data-driven Shopify SEO strategies.",
    members = DEFAULT_MEMBERS,
    limit = 2,
  } = options || {};

  const limited = useMemo(() => {
    // Keep order, trim to desired count
    return Array.isArray(members) ? members.slice(0, Math.max(0, limit)) : [];
  }, [members, limit]);

  return {
    titlePrimary,
    titleAccent,
    intro,
    members: limited,
  };
}
