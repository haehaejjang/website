import { skills } from "@/data/skills";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Core Skills"
          title="기획을 구현으로 잇는 역량"
          description="플레이 경험을 콘텐츠·시스템·시나리오로 나누어 설계하고, 개발자와 아티스트가 바로 쓸 수 있는 문서로 정리합니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 3) * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border p-6 transition duration-300 hover:-translate-y-1",
                  skill.secondary
                    ? "border-dashed border-line bg-canvas"
                    : "border-line bg-surface hover:border-accent/50 hover:shadow-[0_12px_40px_-28px_rgba(17,17,17,0.4)]",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {skill.title}
                  </h3>
                  {skill.secondary ? (
                    <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                      보조 역량
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
