import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "안세은 | Game Designer Portfolio",
  description:
    "콘텐츠·시스템·시나리오를 연결해 플레이 경험을 설계하는 게임 기획자 안세은의 포트폴리오입니다.",
  keywords: [
    "게임 기획자",
    "게임 포트폴리오",
    "시스템 기획",
    "콘텐츠 기획",
    "시나리오 기획",
    "게임 개발",
    "포트폴리오",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: "안세은 | Game Designer Portfolio",
    description:
      "콘텐츠·시스템·시나리오를 연결해 플레이 경험을 설계하는 게임 기획자 안세은의 포트폴리오입니다.",
    type: "website",
    url: siteUrl,
    locale: "ko_KR",
    siteName: "안세은 | Game Designer Portfolio",
    // 실제 OG 이미지가 준비되면 /og.png 를 교체하세요. (권장 1200x630)
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "안세은 | Game Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안세은 | Game Designer Portfolio",
    description:
      "콘텐츠·시스템·시나리오를 연결해 플레이 경험을 설계하는 게임 기획자 안세은의 포트폴리오입니다.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
