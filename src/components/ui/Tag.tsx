import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-tight",
        variant === "accent"
          ? "border-accent/40 bg-accent/10 text-ink"
          : "border-line bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
