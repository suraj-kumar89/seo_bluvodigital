// --- useHiddenLeaks.ts ---
export type HiddenLeakPoint = {
id: string;
text: string;
};


export type HiddenLeaksData = {
titlePrimary: string; // "The Hidden Leaks That Keep Shopify Stores From"
titleAccent: string; // "Scaling"
intro: string;
points: HiddenLeakPoint[];
outro: string;
imageSrc?: string; // right side image
};


export function useHiddenLeaks(): HiddenLeaksData {
return {
titlePrimary: "The Hidden Leaks That Keep Shopify Stores From",
titleAccent: "Scaling",
intro:
"Shopify makes launching easy but scaling profitably is another story. These are the problems most founders face:",
points: [
{ id: "1", text: "Bloated apps and heavy themes slowing your site" },
{ id: "2", text: "Duplicate collections and messy tags confusing Google" },
{ id: "3", text: "Thin product and collection pages that never rank" },
{ id: "4", text: "Paid ads carrying all the weight, collapsing the moment you pause spend" },
],
outro:
"These are not just technical issues. They are revenue leaks. Every day they stay unfixed, you are leaving money on the table.",
imageSrc: "/assets/hiddenleaksimage.png", // replace with your actual asset
};
}