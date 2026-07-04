import { profile } from "@/data/profile";
import { navItems } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-content flex flex-col gap-8 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-sm text-muted transition hover:text-ink"
          >
            {profile.email}
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="container-content flex flex-col gap-1 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {profile.name} · {profile.nameEn}. All rights reserved.
          </p>
          <p>Game Designer Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
