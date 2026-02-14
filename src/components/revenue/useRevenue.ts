export const COLORS = {
  textPrimary: "#242325",
  textSecondary: "#47464A",
  tertiary: "#6B6A70",

  blueLite: "#E4F1FE",
  lavender: "#E9D8FF",
  purple: "#A894FF",
};

export type CourseTier = {
  image: string;
  /** Tailwind-ready background class, e.g. "bg-[#121316]" */
};

export const LEVELS: CourseTier[] = [
  {
    image: "/oldimage.png",
  },
  {
    image: "/newimage.png",
  },
];

export default function useRevenue() {
  return { items: LEVELS };
}
