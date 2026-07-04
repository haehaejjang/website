export const profile = {
  name: "안세은",
  nameEn: "SE EUN AN",
  role: "Game Designer",
  tagline: "콘텐츠 · 시스템 · 시나리오 기획",
  heroDescription:
    "플레이어의 행동 루프와 선택 경험을 분석하고,\n이를 시스템 구조·데이터 테이블·시나리오 플로우로 구체화합니다.",
  mission:
    "콘텐츠·시스템·시나리오를 연결해 플레이 경험을 설계하고, 개발자와 아티스트가 구현하기 쉬운 형태로 기획을 문서화하는 게임 기획자.",
  heroKeywords: [
    "Content Design",
    "System Design",
    "Scenario Design",
    "Documentation",
    "Unity / Unreal",
  ],
  email: "judys_bb@naver.com",
  phone: "010-5919-9613",
  // 실제 파일이 준비되면 아래 경로에 교체하세요.
  portfolioPdf: "/portfolio.pdf",
  resumeUrl: "#",
  links: [
    { label: "GitHub", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Notion", href: "#" },
  ],
  about: [
    "국어국문학과와 게임 인터랙티브 미디어 융합전공을 이수하며, 서사 구조와 게임 제작을 함께 학습했습니다.",
    "기획자로서 가장 중요하게 보는 것은 “왜 이 시스템이 필요한가”입니다. 플레이어가 어떤 행동을 반복하게 되는지, 선택의 결과가 어떻게 체감되는지, 콘텐츠와 시스템이 어떤 감정을 만드는지를 기준으로 기획합니다.",
    "Unity, Unreal, 아트 툴을 직접 학습해 개발자와 아티스트가 이해하기 쉬운 기획서, 데이터 테이블, 플로우 문서를 작성하는 것을 강점으로 합니다.",
  ],
  stats: [
    { value: "5,000h+", label: "TalesRunner" },
    { value: "6,000h+", label: "Lost Ark" },
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Years Game Making" },
  ],
} as const;

export type Profile = typeof profile;
