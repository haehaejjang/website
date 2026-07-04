import { career, collaborationStyle } from "@/data/career";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Career() {
  return (
    <section id="career" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Career"
          title="함께 만든 기록"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Timeline */}
          <div className="md:col-span-7">
            <ol className="relative border-l border-line">
              {career.map((entry, i) => (
                <Reveal key={`${entry.period}-${i}`} delay={(i % 4) * 0.04}>
                  <li className="relative ml-6 pb-10 last:pb-0">
                    <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas" />
                    <span className="text-xs font-semibold tracking-[0.15em] text-muted">
                      {entry.period}
                    </span>
                    <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                      {entry.title}
                    </h3>
                    {entry.description ? (
                      <p className="mt-1.5 text-sm text-muted">
                        {entry.description}
                      </p>
                    ) : null}
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Collaboration Style */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="sticky top-28 rounded-2xl border border-line bg-surface p-8">
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
