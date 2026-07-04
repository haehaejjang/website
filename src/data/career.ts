export type CareerItem = {
  period: string;
  title: string;
  description?: string;
};

export const career: CareerItem[] = [
  {
    period: "2023.03 – 2025.12",
    title: "CIEN 게임 제작 동아리 / 만화두레 디지털 아트 동아리",
    description:
      "다수의 팀 프로젝트에서 기획, 시나리오, 아트, PM 역할 수행",
  },
  {
    period: "2023.07",
    title: "아스트로 VR 게임 기획 공모전 출품",
  },
  {
    period: "2023.07",
    title: "창세기전 모바일 RPG 게임 테스터 참여",
  },
  {
    period: "2024.02",
    title: "컴투스 멘토링 스쿨 클라이언트 부문 1기",
    description: "Unity C# 기반 리듬 게임 BEAT:)S 제작",
  },
  {
    period: "2025.01 – 2025.03",
    title: "Unity C# 스터디",
  },
  {
    period: "2025.08 – 2025.11",
    title: "중앙대학교 게임 인문학 교양 조교",
  },
  {
    period: "2025.12 – 2026.02",
    title: "게임 분석 스터디",
    description: "라이브 서비스 게임 시스템 분석 및 역기획 문서 작성",
  },
];

export const collaborationStyle: string[] = [
  "기능 단위로 기획서를 작성합니다.",
  "개발자가 구현 조건을 확인할 수 있도록 데이터 테이블을 만듭니다.",
  "아티스트가 필요한 리소스를 파악할 수 있도록 화면 단위로 정리합니다.",
  "회의 후 결정사항을 작업 단위로 분해해 팀원 간 해석 차이를 줄입니다.",
];
