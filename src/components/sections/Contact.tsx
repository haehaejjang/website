import { Download, FileText, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Contact"
          title="좋은 경험을 설계하는 기획자"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Reveal>
              <p className="text-2xl font-semibold tracking-tight text-ink">
                {profile.name}
              </p>
              <p className="mt-1 text-muted">{profile.role}</p>

              <dl className="mt-8 space-y-4">
                <div className="flex flex-col gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-lg text-ink transition hover:text-accent"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${profile.phone.replace(/-/g, "")}`}
                      className="text-lg text-ink transition hover:text-accent"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* 외부 링크 placeholder — 실제 URL로 교체하세요 */}
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-dashed border-line px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-muted transition hover:border-accent hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
                <p className="text-sm leading-relaxed text-muted">
                  포트폴리오와 이력서는 아래 버튼으로 확인할 수 있습니다.\n
                  기획 협업이나 채용 관련 문의는 이메일로 편하게 연락 주세요.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    href={`mailto:${profile.email}`}
                    variant="primary"
                    icon={<Mail size={16} />}
                    className="w-full"
                  >
                    Send Email
                  </Button>
                  <Button
                    href={profile.portfolioPdf}
                    variant="secondary"
                    download
                    icon={<Download size={16} />}
                    className="w-full"
                  >
                    Download Portfolio
                  </Button>
                  <Button
                    href={profile.resumeUrl}
                    variant="ghost"
                    icon={<FileText size={16} />}
                    className="w-full"
                  >
                    View Resume
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
