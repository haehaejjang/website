export type Placeholder = {
  /** placeholder 박스에 표시할 자료 유형 */
  label: string;
  /** 실제 이미지 경로 (public 기준). 있으면 이미지, 없으면 placeholder 박스 */
  image?: string;
};

export type CaseStudyDetail = {
  problem: string;
  designIntent: string;
  solution: string[];
  implementation: string[];
  result: string[];
};

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  fullTitle?: string;
  genre: string;
  period: string;
  team?: string;
  affiliation?: string;
  motif?: string;
  role: string;
  summary: string;
  skills: string[];
  /** 카드 상단 대표 이미지 (public/images 기준 경로). 없으면 placeholder 표시 */
  coverImage?: string;
  detail: CaseStudyDetail;
  placeholders: Placeholder[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "help",
    index: "01",
    title: "HELP!!!",
    fullTitle:
      "HELP!!! 라고 외치기엔 토푸쨩은 너무나 소심한 모양입니다",
    genre: "비주얼노벨 · 미소녀 시뮬레이션",
    period: "2026.03 – 2026.05",
    team: "4인 / Unreal Engine",
    role: "전체 기획 · 시나리오 총괄",
    coverImage: "/images/tofu-cover.png",
    summary:
      "선택 결과가 엔딩에서만 드러나는 비주얼노벨의 약점을 보완하기 위해, 낮 탐색 → 오후 선택 → 밤 결과 회수 구조를 설계했습니다.",
    skills: ["System Design", "Scenario Design", "Documentation"],
    detail: {
      problem:
        "비주얼노벨은 텍스트를 읽고 선택지를 고르는 구조가 반복되면 플레이 피로가 커질 수 있습니다. 또한 선택 결과가 엔딩에서만 드러나면, 플레이어는 중간 선택의 의미를 체감하기 어렵습니다.",
      designIntent:
        "선택의 결과가 당일 밤 대사, 다음 날 오브젝트 상태, 최종 엔딩 조건에 반복적으로 회수되는 구조를 목표로 했습니다.",
      solution: [
        "하루를 낮 탐색 → 오후 메인 선택 → 밤 결과 회수로 나누었습니다.",
        "선택지는 회피 / 자책 / 돌봄 / 직면 성향으로 나뉩니다.",
        "각 선택은 우울감, 슬픔, 행복, 자신감, 건강, 플래그에 영향을 주도록 설계했습니다.",
      ],
      implementation: [
        "Google Sheets로 Day, 오브젝트, 선택지, 스탯 변화, 플래그, 결과 대사를 분리하여 관리했습니다.",
        "본 개발 전 HTML 프로토타입을 제작해 UI/UX 흐름과 선택지 구조의 재미를 검증했습니다.",
        "개발 과정에서 AI를 활용하여 UI 및 인게임 이미지를 명확히 추출하였습니다.",
      ],
      result: [
        "2026년 5월 23일 ~ 5월 24일 PlayX4 전시",
        "SNS 팔로워 20명에서 192명으로 증가",
        "아크릴 키링 300개 제작 후 이틀 간 모두 분배, 현수막, 안내 책자 제작",
      ],
    },
    placeholders: [
      { label: "DAY FLOWCHART" },
      { label: "STAT & FLAG TABLE" },
      { label: "GOOGLE SHEET SCREENSHOT" },
    ],
  },
  {
    id: "unhinged",
    index: "02",
    title: "UNHINGED",
    genre: "AI 기반 3D 심리 공포 퍼즐 / 1인칭",
    period: "2026.05 – 2026.06",
    affiliation: "미래내일 일경험 NCAI 1기 인턴",
    team: "5인 / Unity",
    role: "기획 · 클라이언트 · UI",
    coverImage: "/images/unhinged-cover.png",
    summary:
      "기존 공포 퍼즐의 ‘열쇠를 찾아 문을 여는’ 구조를 비틀어, 문 자체를 떼어내고 배치하는 핵심 메카닉을 설계했습니다.",
    skills: ["System Design", "Content Design", "Production Support"],
    detail: {
      problem:
        "탈출형 공포 게임은 ‘열쇠를 찾고 문을 여는’ 구조가 반복되면 퍼즐 경험이 단조로워질 수 있습니다. 또한 공포 연출과 퍼즐 시스템이 분리되면, 플레이어는 시스템을 단순 장애물 처리로만 받아들일 위험이 있습니다.",
      designIntent:
        "문을 단순히 여는 대상이 아니라, 플레이어가 직접 이동시키고 배치하는 핵심 오브젝트로 전환하고자 했습니다. 문이 공간의 경계를 바꾸는 장치가 되면, 퍼즐과 공포 연출을 동시에 강화할 수 있다고 판단했습니다.",
      solution: [
        "문을 떼어 다른 벽에 부착하는 핵심 조작을 설계했습니다.",
        "문 배치에 따라 이동 동선과 위험 구간이 달라지는 퍼즐 구조를 구성했습니다.",
        "Dual-AI 추격과 거리 기반 사운드를 연결해 긴장감을 강화했습니다.",
        "문 메카닉을 주인공의 정체에 대한 복선으로 연결했습니다.",
      ],
      implementation: [
        "Unity에서 UI, 거리 기반 추적 사운드, 데스 UI 입력 처리를 구현했습니다.",
        "VARCO 3D 에셋과 사운드를 제작 및 이식했습니다.",
        "충돌·스케일·재질 문제를 디버깅했습니다.",
      ],
      result: ["팀 투표 우수팀 선정.", "우수상 수상."],
    },
    placeholders: [
      { label: "DOOR MECHANIC DIAGRAM" },
      { label: "GAMEPLAY SCREENSHOT" },
      { label: "UNITY EDITOR" },
      { label: "DEATH UI" },
    ],
  },
  {
    id: "lostark-reverse",
    index: "03",
    title: "Lost Ark 시스템 역기획",
    genre: "개인 작업 · 라이브 서비스 분석",
    period: "2025.12 – 2026.02",
    role: "카오스 던전 · 쿠르잔 전선 분석",
    coverImage: "/images/lostark-cover.png",
    summary:
      "반복 콘텐츠의 피로 원인을 보상 누락 압박과 다캐릭터 숙제 부담으로 정의하고, 보상 루프 개선안을 제안했습니다.",
    skills: ["System Design", "Documentation"],
    detail: {
      problem:
        "로스트아크의 일일 반복 콘텐츠는 성장에 필요한 보상을 제공하지만, 장기 플레이어에게는 ‘숙제’로 인식되기 쉽습니다. 문제의 핵심은 단순히 반복 횟수가 많다는 점이 아니라, 보상을 놓치면 손해라는 압박과 캐릭터 수가 늘수록 증가하는 반복 부담에 있다고 판단했습니다.",
      designIntent:
        "접속 동기는 유지하되, 매일 플레이해야 한다는 압박은 줄이는 구조를 목표로 했습니다.",
      solution: [
        "카오스 던전과 쿠르잔 전선의 입장 조건, 소모 방식, 보상 구조를 비교했습니다.",
        "기존 반복 루프를 데이터 테이블 5종으로 분해했습니다.",
        "일일 보상의 일부를 주간 단위로 전환하는 개선안을 제안했습니다.",
        "라이트 유저도 보상을 회수할 수 있는 싱글모드 교환 구조를 제안했습니다.",
        "악용 방지를 위해 교환 제한, 캐릭터 단위 제한, 주간 보상 상한을 설정했습니다.",
      ],
      implementation: [
        "보상 획득 조건, 소모 방식, 교환 제한, 보상량을 표로 정리했습니다.",
        "역기획서와 개선 제안서 형태로 문서화했습니다.",
      ],
      result: [
        "라이브 서비스 반복 콘텐츠를 유저 피로도, 보상 구조, 악용 가능성 관점에서 분석한 산출물을 제작했습니다.",
      ],
    },
    placeholders: [
      { label: "CURRENT LOOP DIAGRAM" },
      { label: "IMPROVED LOOP DIAGRAM" },
      { label: "REWARD TABLE" },
      { label: "SYSTEM ANALYSIS TABLE" },
    ],
  },
  {
    id: "darkness",
    index: "04",
    title: "어둠",
    genre: "스토리형 공포 탈출 / 2D 사이드뷰",
    period: "2024.07 – 2024.08",
    role: "PM 겸 기획자",
    coverImage: "/images/darkness-cover.png",
    summary:
      "기획, 아트, 개발 간 해석 차이로 작업 기준이 흔들리는 문제를 문서화와 우선순위 정리로 해결했습니다.",
    skills: ["Collaboration", "Documentation", "Content Design"],
    detail: {
      problem:
        "프로젝트 중 기획, 아트, 개발 간 해석 차이로 작업 기준이 흔들리는 문제가 발생했습니다. 같은 퍼즐 구조를 두고도 필요한 리소스, 구현 범위, 연출 방식에 대한 이해가 달라 일정 지연 위험이 있었습니다.",
      designIntent:
        "팀원들이 같은 기준으로 작업할 수 있도록, 기획 의도와 구현 단위를 명확히 분리하는 것이 필요했습니다.",
      solution: [
        "퍼즐 규칙, 레벨 배치, 필요 아트 리소스를 표로 재정리했습니다.",
        "기능 우선순위를 필수 구현과 선택 구현으로 구분했습니다.",
        "손전등을 활용한 시야 제한과 공포 연출을 핵심 플레이 경험으로 고정했습니다.",
        "회의 내용을 작업 단위로 정리해 팀 내 의사결정 기준을 통일했습니다.",
      ],
      implementation: [
        "기획서, 레벨 구조, 리소스 목록, 작업 우선순위를 팀원이 확인할 수 있는 문서로 정리했습니다.",
      ],
      result: ["프로젝트를 완주했습니다.", "팀원 투표로 우수 팀원에 선출되었습니다."],
    },
    placeholders: [
      { label: "LEVEL DESIGN", image: "/images/darkness-ingame.png" },
      { label: "TASK TABLE", image: "/images/darkness-leveldesign.png" },
      { label: "GAMEPLAY SCREENSHOT", image: "/images/darkness-flowchart.png" },
    ],
  },
  {
    id: "forest-child",
    index: "05",
    title: "숲의 아이",
    genre: "스토리형 어드벤처 / 2D 탑뷰 픽셀",
    period: "2023.03 – 2023.12",
    motif: "동화 ‘빨간 모자’",
    role: "기획 · 시나리오 · 아트",
    coverImage: "/images/forest-cover.png",
    summary:
      "익숙한 동화 소재를 단순 재현하지 않고, 플레이어가 공간을 탐색하며 이야기를 해석하는 어드벤처 구조로 재구성했습니다.",
    skills: ["Scenario Design", "Content Design", "Art"],
    detail: {
      problem:
        "‘빨간 모자’ 모티프는 익숙한 소재이기 때문에, 단순 재현에 머무르면 플레이어에게 새로운 탐색 동기를 주기 어렵습니다.",
      designIntent:
        "원작 동화의 상징을 유지하되, 플레이어가 직접 공간을 탐색하며 이야기를 해석하도록 만드는 것을 목표로 했습니다.",
      solution: [
        "동화 속 인물과 공간을 게임 오브젝트와 이벤트로 재구성했습니다.",
        "2D 탑뷰 탐색 구조에 맞춰 스토리 진행 순서와 상호작용 지점을 배치했습니다.",
        "캐릭터 디자인, 도트 아트, 시나리오를 함께 설계해 톤을 통일했습니다.",
      ],
      implementation: [
        "시나리오, 캐릭터 디자인, 도트 리소스를 함께 담당했습니다.",
        "콘텐츠의 시각적 톤과 서사 톤이 어긋나지 않도록 조정했습니다.",
      ],
      result: ["한국게임학회 추계학술발표대회 인기상 수상."],
    },
    placeholders: [
      { label: "MAP STRUCTURE", image: "/images/forest-map-structure.png" },
      { label: "CHARACTER ART", image: "/images/forest-characterart.png" },
      { label: "OBJECT RELATION DIAGRAM", image: "/images/forest-reward.png" },
    ],
  },
];
