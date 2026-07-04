# 안세은 | Game Designer Portfolio

콘텐츠·시스템·시나리오를 연결해 플레이 경험을 설계하는 게임 기획자 안세은의 싱글 페이지 포트폴리오입니다.
채용 담당자가 읽기 쉬운 editorial · minimal 방향으로, 문제 정의 → 기획 의도 → 해결 구조를 보여주는 데 초점을 맞췄습니다.

## 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **framer-motion** — 절제된 등장 애니메이션
- **lucide-react** — 아이콘

외부 CMS는 사용하지 않으며, 모든 콘텐츠는 `src/data`의 TypeScript 파일에서 관리합니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx        # 메타데이터 · Open Graph · 폰트
│   ├── page.tsx          # 섹션 조립
│   ├── globals.css       # Tailwind · 전역 스타일
│   ├── sitemap.ts        # /sitemap.xml
│   └── robots.ts         # /robots.txt
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Skills, CaseStudies, Projects, WritingArt, Career, Contact
│   └── ui/               # SectionTitle, ProjectCard, CaseStudyCard, Tag, Modal, Button, Placeholder, Reveal
├── data/                 # profile, skills, caseStudies, projects, career (콘텐츠 원본)
└── lib/
    └── utils.ts          # cn(), navItems, siteUrl
```

## 콘텐츠 수정 방법

컴포넌트를 건드리지 않고 `src/data`의 파일만 수정하면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `data/profile.ts` | 이름, 소개, Hero 문구, 연락처, 다운로드/링크 경로, About 통계 |
| `data/skills.ts` | Core Skills 카드 (AI Tools는 `secondary: true`로 보조 역량 처리) |
| `data/caseStudies.ts` | Case Study 5종 (Problem · Design Intent · Solution · Implementation · Result) |
| `data/projects.ts` | Other Projects, Writing, Art |
| `data/career.ts` | Career 타임라인, Collaboration Style |

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
```

프로덕션 빌드 확인:

```bash
npm run build
npm run start
```

## 실제 자산 교체

- 포트폴리오 PDF: `public/portfolio.pdf` 로 저장 (경로는 `data/profile.ts`의 `portfolioPdf`)
- OG 이미지: `public/og.png` 로 저장 (1200×630 권장)
- 이력서·GitHub·Blog·Notion 링크: `data/profile.ts`의 `resumeUrl`, `links`
- 배포 도메인: `src/lib/utils.ts`의 `siteUrl`

## Vercel 배포

1. 이 저장소를 GitHub에 푸시합니다.
2. [vercel.com](https://vercel.com) 에서 **New Project → 저장소 선택**.
3. Framework Preset이 자동으로 **Next.js**로 잡힙니다. 추가 환경 변수는 필요 없습니다.
4. **Deploy** 를 누르면 빌드 후 배포됩니다.
5. 배포 도메인이 정해지면 `src/lib/utils.ts`의 `siteUrl`을 실제 도메인으로 바꿔 다시 커밋하면 sitemap·robots·OG가 정확한 URL을 사용합니다.

CLI로 배포할 수도 있습니다:

```bash
npm i -g vercel
vercel          # 미리보기 배포
vercel --prod   # 프로덕션 배포
```
