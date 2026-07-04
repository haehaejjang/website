import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** 들어갈 자료 유형 (예: GAMEPLAY, SYSTEM DIAGRAM) */
  label: string;
  className?: string;
  ratio?: "video" | "square" | "wide";
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

/** 실제 이미지가 없을 때 사용하는 자료 유형 표시 박스. */
export function Placeholder({
  label,
  className,
  ratio = "video",
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed border-line bg-canvas",
        ratioClass[ratio],
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Image Placeholder
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
          {label}
        </span>
      </div>
    </div>
  );
}
