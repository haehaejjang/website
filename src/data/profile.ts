export const profile = {
  name: "안세은",
  nameEn: "SE EUN AN",
  role: "Game Designer",
  tagline: "콘텐츠 · 시스템 · 시나리오 기획",
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

  // 기존 코드 호환용
  portfolioPdf: "/portfolio.pdf",

  // 새 버튼 링크용: 실제 Google Drive 링크로 교체하세요.
  portfolioUrl: "https://drive.google.com/file/d/PORTFOLIO_FILE_ID/view?usp=sharing",
  resumeUrl: "#",

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
    { value: "4,400H+", label: "테일즈런너 플레이 시간" },
    { value: "3년 이상", label: "게임 제작" },
    { value: "2개 이상", label: "수상 경력" },
    { value: "60개 이상", label: "게임 플레이 경험" },
  ],
} as const;

export type Profile = typeof profile;
