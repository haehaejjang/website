import { cn } from "@/lib/utils";

type SectionTitleProps = {
  /** 섹션 상단의 작은 인덱스/카테고리 라벨 */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tightest text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
