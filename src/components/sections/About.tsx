import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="About"
          title="왜 이 시스템이 필요한가"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="space-y-6">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-lg leading-relaxed text-ink/85 sm:text-xl">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line bg-surface p-6"
                  >
                    <p className="text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
