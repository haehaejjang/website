import { career, collaborationStyle, categoryBadgeStyle } from "@/data/career";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Career() {
  return (
    <section id="career" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Career"
          title="함께 만든 기록"
          description="프로젝트·활동·수상·경력을 시간 순으로 정리했습니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* 카드형 타임라인 */}
          <div className="lg:col-span-8">
            <ol className="relative space-y-4 border-l border-line pl-6 sm:pl-8">
              {career.map((entry, i) => (
                <Reveal key={`${entry.period}-${entry.title}`} delay={(i % 4) * 0.04}>
                  <li className="relative">
                    {/* 타임라인 점 */}
                    <span className="absolute -left-[25px] top-6 h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas sm:-left-[33px]" />
                    <div className="rounded-xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_12px_40px_-28px_rgba(17,17,17,0.4)] sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-tight",
                            categoryBadgeStyle[entry.category],
                          )}
                        >
                          {entry.category}
                        </span>
                        <span className="text-xs font-medium tracking-[0.1em] text-muted">
                          {entry.period}
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                        {entry.title}
                      </h3>
                      {entry.description ? (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {entry.description}
                        </p>
                      ) : null}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Collaboration Style — 오른쪽 sticky card */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28 rounded-2xl border border-line bg-surface p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Collaboration Style
                </h3>
                <ul className="mt-6 space-y-4">
                  {collaborationStyle.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-[15px] leading-relaxed text-ink/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
