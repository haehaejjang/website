"use client";

import { useState } from "react";
import { Check, Copy, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // 클립보드 복사가 막힌 환경을 대비한 예비 동작
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-line bg-surface px-6 py-24 sm:px-8"
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-md">
          <SectionTitle
            eyebrow="CONTACT"
            title="기타 정보"
            description="포트폴리오와 이력서는 아래 버튼으로 확인할 수 있습니다. 프로젝트 제안, 협업이나 채용 관련 문의는 이메일로 연락 주세요."
          />
        </div>

        <div className="rounded-2xl border border-line bg-canvas p-6 shadow-sm sm:p-8">
          <p className="text-sm leading-7 text-muted">
            버튼을 누르면 포트폴리오와 이력서 PDF를 새 탭에서 확인할 수 있습니다.
            이메일 주소는 아래 버튼으로 복사할 수 있습니다.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-card"
            >
              {copied ? "복사 완료" : "이메일 복사"}
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>

            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              포트폴리오 보기
              <FileText size={17} />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              이력서 보기
              <FileText size={17} />
            </a>
          </div>

          <div className="mt-7 rounded-xl border border-line bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              EMAIL
            </p>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="mt-2 block text-left text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              {profile.email}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
