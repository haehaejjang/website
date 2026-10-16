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
  // 절대 URL(http/https)은 기본적으로 새 탭에서 연다. external을 명시하면 그 값이 우선.
  const isAbsolute = /^https?:\/\//i.test(href);
  const openInNewTab = external ?? isAbsolute;
  // download 속성은 동일 출처에서만 동작한다. 외부 URL에서는 브라우저가 무시하므로 붙이지 않는다.
  const canDownload = download && !isAbsolute;

  return (
    <a
      href={href}
      download={canDownload || undefined}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
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
