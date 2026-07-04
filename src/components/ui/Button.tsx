import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  download?: boolean;
  external?: boolean;
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-ink text-canvas hover:bg-ink/90 border border-ink",
  secondary:
    "bg-surface text-ink border border-line hover:border-accent hover:text-ink",
  ghost: "bg-transparent text-ink border border-line hover:bg-surface",
};

/** 링크형 버튼. 앵커/외부 링크/다운로드를 모두 지원. */
export function Button({
  href,
  children,
  variant = "primary",
  icon,
  download,
  external,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
      {icon}
    </a>
  );
}
