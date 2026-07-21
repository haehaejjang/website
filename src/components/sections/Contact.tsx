import { Download, FileText, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contact() {
  const emailSubject =
    profile.emailSubject ?? "게임 기획자 포트폴리오 문의드립니다";

  const emailBody =
    profile.emailBody ??
    "안녕하세요, 안세은 님.\n포트폴리오를 확인하고 연락드립니다.\n\n문의 내용:\n";

  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="CONTACT"
          title="함께 이야기할 수 있습니다"
          description="포트폴리오와 이력서는 아래 버튼으로 확인할 수 있습니다. 프로젝트 제안, 협업이나 채용 관련 문의는 이메일로 편하게 연락 주세요."
        />

        <div className="rounded-2xl border border-line bg-canvas p-7 shadow-sm sm:p-9">
          <p className="text-sm leading-7 text-muted">
            포트폴리오와 이력서는 아래 버튼으로 확인할 수 있습니다.
            게임 기획, 콘텐츠 기획, 시스템 문서화, 시나리오 설계와 관련된
            문의는 이메일로 연락 주세요.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-card"
            >
              Send Email
              <Mail size={17} />
            </a>

            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View Portfolio
              <Download size={17} />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View Resume
              <FileText size={17} />
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-line bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Email
            </p>
            <a
              href={emailHref}
              className="mt-2 block text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
