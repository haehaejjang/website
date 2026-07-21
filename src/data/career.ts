export type CareerCategory = "프로젝트" | "활동" | "수상" | "경력";

export type CareerItem = {
  period: string;
  category: CareerCategory;
  title: string;
  description?: string;
};

export const career: CareerItem[] = [
  {
    period: "2023.03 – 2023.07",
    category: "프로젝트",
    title: "도키도키 교수님과 … 대학원생 대축제!!!",
    description: "개그 비주얼노벨 · 기획 · 마케팅 · 아트",
  },
  {
    period: "2023.03 – 2023.12",
    category: "프로젝트",
    title: "숲의 아이",
    description: "2D 탑뷰 픽셀 어드벤처 · 기획 · 시나리오 · 아트",
  },
  {
    period: "2023.03 – 2025.12",
    category: "활동",
    title: "만화두레 · CIEN 동아리",
    description: "디지털 아트 동아리 및 게임 제작 동아리 활동",
  },
  {
    period: "2023.07",
    category: "활동",
    title: "아스트로 VR 게임 기획 공모전 출품",
  },
  {
    period: "2023.07",
    category: "활동",
    title: "〈창세기전〉 모바일 RPG 게임 테스터 참여",
  },
  {
    period: "2023.11",
    category: "수상",
    title: "한국게임학회 추계학술발표대회 인기상",
    description: "수상작: 숲의 아이",
  },
  {
    period: "2024.02",
    category: "활동",
    title: "컴투스 멘토링 스쿨 클라이언트 부문 1기",
    description: "Unity C# 기반 리듬 게임 BEAT:)S 제작",
  },
  {
    period: "2024.03 – 2024.07",
    category: "프로젝트",
    title: "LUCID DREAM",
    description: "로그라이트 · 게임 기획 · 서브 컨셉 아트",
  },
  {
    period: "2024.07 – 2024.08",
    category: "프로젝트",
    title: "어둠",
    description: "스토리형 공포 탈출 · PM · 기획 · 아트",
  },
  {
    period: "2025.01 – 2025.03",
    category: "활동",
    title: "Unity C# 스터디",
  },
  {
    period: "2025.02 – 2025.05",
    category: "프로젝트",
    title: "그대는 나의 천사",
    description: "서브컬처 비주얼노벨 · 전체 기획 · 시나리오",
  },
  {
    period: "2025.07 – 2025.08",
    category: "프로젝트",
    title: "Memory Loss",
    description: "턴제 로그라이트 · 팀장 · 전체 기획 · 아트",
  },
  {
    period: "2025.08 – 2025.11",
    category: "경력",
    title: "중앙대학교 게임 인문학 교양 조교",
  },
  {
    period: "2025.09 – 2025.12",
    category: "프로젝트",
    title: "서브컬처 미소녀 비주얼노벨",
    description: "게임 기획 · 시나리오 작성",
  },
  {
    period: "2025.12 – 2026.02",
    category: "프로젝트",
    title: "로스트아크 시스템 역기획",
    description: "카오스 던전 · 쿠르잔 전선 분석 및 개선 제안",
  },
  {
    period: "2025.12 – 2026.02",
    category: "활동",
    title: "게임 분석 스터디",
    description: "라이브 서비스 게임 시스템 분석 및 역기획 문서 작성",
  },
  {
    period: "2026.03 – 2026.05",
    category: "프로젝트",
    title: "HELP!!!",
    description: "비주얼노벨 · 미소녀 시뮬레이션 · 전체 기획 · 시나리오 총괄",
  },
  {
    period: "2026.05 – 2026.06",
    category: "프로젝트",
    title: "UNHINGED",
    description: "3D 심리 공포 퍼즐 · 기획 · 클라이언트 · UI",
  },
];

/** category별 badge 스타일 (Tailwind 클래스) */
export const categoryBadgeStyle: Record<CareerCategory, string> = {
  프로젝트: "border-accent/40 bg-accent/10 text-ink",
  활동: "border-sky-300/50 bg-sky-50 text-sky-700",
  수상: "border-amber-300/60 bg-amber-50 text-amber-700",
  경력: "border-emerald-300/50 bg-emerald-50 text-emerald-700",
};

export const collaborationStyle: string[] = [
  "기능 단위로 기획서를 작성합니다.",
  "개발자가 구현 조건을 확인할 수 있도록 데이터 테이블을 만듭니다.",
  "아티스트가 필요한 리소스를 파악할 수 있도록 화면 단위로 정리합니다.",
  "회의 후 결정사항을 작업 단위로 분해해 팀원 간 해석 차이를 줄입니다.",
];
