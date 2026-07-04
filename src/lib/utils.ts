/** 조건부 className을 공백으로 합칩니다. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const siteUrl = "https://seeun-ahn.vercel.app";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];
