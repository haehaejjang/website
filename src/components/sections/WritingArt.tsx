import { writing, artTools, artNote, designValue } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function WritingArt() {
  return (
    <section id="writing-art" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Writing & Art"
          title="이야기와 리소스를 기획으로"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Writing */}
          <div className="md:col-span-7">
            <Reveal>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Writing
              </h3>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {writing.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="w-40 shrink-0 text-base font-semibold tracking-tight text-ink">
                      {item.title}
                    </span>
                    <span className="text-sm text-muted">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Art */}
          <div className="md:col-span-5">
            <Reveal delay={0.05}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Art
              </h3>
              <div className="mt-6 rounded-xl border border-line bg-surface p-6">
                <div className="flex flex-wrap gap-2">
                  {artTools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {artNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Design Value */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Design Value
            </span>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/90 sm:text-xl">
              {designValue}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
