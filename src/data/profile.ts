export const profile = {
  name: "안세은",
  nameEn: "SE EUN AN",
  role: "Game Designer",
  tagline: "콘텐츠·시스템·시나리오 기획",
  heroDescription:
    "플레이어의 행동 루프와 선택 경험을 분석하고, 이를 시스템 구조·데이터 테이블·시나리오 플로우로 구체화합니다. 실현 가능한 기획과 이해 가능한 기획서를 작성합니다.",
  mission:
    "콘텐츠·시스템·시나리오를 연결해 플레이 경험을 설계하고, 개발자와 아티스트가 구현하기 쉬운 형태로 기획을 문서화하는 게임 기획자.",
  heroKeywords: [
    "Content Design",
    "System Design",
    "Scenario Design",
    "Documentation",
    "Unity / Unreal",
    "Dot Design",
    "Vibe Coding with AI",
  ],
  email: "judys_bb@naver.com",
  phone: "010-5919-9613",

  portfolioPdf: "/pdf/Mainportfolio.pdf",
  portfolioUrl: "/pdf/Mainportfolio.pdf",
  resumeUrl: "https://drive.google.com/file/d/1-sk6m5SwL09F6gP61EyozSENv60N-S4R/view?usp=sharing";

import { useState } from "react";
import { Check, Copy, Download, FileText, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const emailSubject =
    profile.emailSubject ?? "게임 기획자 포트폴리오 문의드립니다";

  const emailBody =
    profile.emailBody ??
    "안녕하세요, 안세은 님.\n포트폴리오를 확인하고 연락드립니다.\n\n문의 내용:\n";

  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = emailHref;
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-surface px-6 py-24 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <SectionTitle
            eyebrow="CONTACT"
            title="함께 이야기할 수 있습니다"
            description="포트폴리오와 이력서는 아래 버튼으로 확인할 수 있습니다. 프로젝트 제안, 협업이나 채용 관련 문의는 이메일로 연락 주세요."
          />
        </div>

        <div className="rounded-2xl border border-line bg-canvas p-6 shadow-sm sm:p-8">
          <p className="text-sm leading-7 text-muted">
            버튼을 누르면 포트폴리오와 이력서 PDF를 새 탭에서 확인할 수 있습니다.
            이메일 버튼은 주소를 복사합니다.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-card"
            >
              {copied ? "이메일 복사됨" : "Copy Email"}
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>

            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
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

          <div className="mt-7 rounded-xl border border-line bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Email
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
}",

  emailSubject: "게임 기획자 포트폴리오 문의드립니다",
  emailBody:
    "안녕하세요, 안세은 님.\n포트폴리오를 확인하고 연락드립니다.\n\n문의 내용:\n",

  links: [
    { label: "GitHub", href: "https://github.com/haehaejjang" },
    { label: "Blog", href: "https://blog.naver.com/judys_bb" },
    {
      label: "Notion",
      href: "https://automatic-slipper-285.notion.site/Portfolio-03f3c1335d214596b554b8e61db76ff0?pvs=74",
    },
  ],
  about: [
    "중앙대학교 국어국문학과와 게임 인터랙티브 미디어 융합전공을 이수하며, 서사 구조와 게임 제작을 함께 학습했습니다.",
    "기획자로서 가장 중요하게 보는 것은 플레이어 경험이 어떤 구조로 만들어지는지입니다. 플레이어의 반복 행동, 선택의 결과, 피드백 루프를 기준으로 콘텐츠와 시스템을 기획합니다.",
    "Unity, Unreal, 아트 툴을 직접 학습해 개발자와 아티스트가 이해하기 쉬운 기획서, 데이터 테이블, 플로우 문서를 작성합니다.",
  ],
  stats: [
    { value: "10개 이상", label: "프로젝트" },
    { value: "10,000H+", label: "게임 플레이 시간" },
    { value: "3년 이상", label: "게임 제작" },
    { value: "2개 이상", label: "수상 경력" },
    { value: "60개 이상", label: "게임 플레이 경험" },
  ],
} as const;

export type Profile = typeof profile;
