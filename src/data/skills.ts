export type Skill = {
  title: string;
  description: string;
  /** 보조 역량으로만 노출할 때 true */
  secondary?: boolean;
};

export const skills: Skill[] = [
  {
    title: "Content Design",
    description: "이벤트, 미션, 스테이지, 오브젝트 상호작용 설계",
  },
  {
    title: "System Design",
    description: "스탯, 플래그, 선택지, 엔딩 조건, 보상 루프 설계",
  },
  {
    title: "Scenario Design",
    description: "캐릭터 대사 톤, 선택 결과 회수형 시나리오 작성",
  },
  {
    title: "Documentation",
    description: "Google Sheets, Excel 기반 데이터 문서화",
  },
  {
    title: "Collaboration",
    description: "개발자/아티스트가 이해할 수 있는 기능 단위 문서 작성",
  },
  {
    title: "Production Support",
    description: "Unity, Unreal, Piskel, Medibang 기반 제작 이해",
  },
  {
    title: "AI Tools",
    description:
      "ChatGPT, Claude, VARCO 3D, Kling을 기획 검토와 프로토타입 제작 보조 도구로 활용",
    secondary: true,
  },
];
