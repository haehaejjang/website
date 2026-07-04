"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { navItems, cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-content flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.2em] text-ink"
        >
          {profile.nameEn}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-line bg-canvas md:hidden">
          <div className="container-content flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
