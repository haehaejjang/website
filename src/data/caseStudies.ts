export type Placeholder = {
  /** placeholder 박스에 표시할 자료 유형 */
  label: string;
  /** 실제 이미지 경로 (public 기준). 있으면 이미지, 없으면 placeholder 박스 */
  image?: string;
};

export type ExternalLink = {
  label: string;
  href: string;
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
  externalLinks?: ExternalLink[];
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
    externalLinks: [
      {
        label: "포트폴리오 링크",
        href: "https://drive.google.com/file/d/1cRgJlZfMrQ5_leAeA-uhjja-dWjmw-3i/view?usp=drive_link",
      },
      {
        label: "인게임 영상",
        href: "https://drive.google.com/file/d/1fvFr9X_GnNFZPYikF3elzPqzYA9wONCY/view?usp=drive_link",
      },
    ],
    coverImage: "/images/tofu-cover.png",
    summary:
      "선택 결과가 엔딩에서만 드러나는 비주얼노벨의 약점을 보완하기 위해, 낮 탐색 → 오후 선택 → 밤 결과 회수 구조를 설계하여 Day 별로 관리할 수 있는 선택지를 제공했습니다.",
    skills: ["System Design", "Scenario Design", "Documentation"],
    detail: {
      problem:
        "비주얼 노벨의 읽고 선택을 반복하는 고정된 구조는 플레이어들에게 피로감을 줄 수 있다고 생각했습니다. 또한 선택 결과가 엔딩에서만 드러나면, 플레이어는 중간 선택의 의미를 체감하기 어렵습니다.",
      designIntent:
        "선택의 결과가 당일 밤 대사, 다음 날 오브젝트 상태, 최종 엔딩 조건에 반복적으로 회수되는 구조를 목표로 했습니다.",
      solution: [
        "하루를 낮 탐색 → 오후 메인 선택 → 밤 결과 회수로 나누었습니다.",
        "선택지의 성향을 회피 / 자책 / 돌봄 / 직면 등으로 나누어 이에 맞는 대사와 결과를 출력하도록 관리하였습니다.",
        "각 선택은 우울감, 슬픔, 행복, 자신감, 건강, 플래그 등에 영향을 주어 설계했습니다.",
        "대화와 게임 흐름을 4개의 성향과 결과에 영향을 주는 태그를 통해 관리하여, 방대한 양의 대사 출력을 효율적으로 해결하였습니다.",
      ],
      implementation: [
        "Google Sheets로 Day, 오브젝트, 선택지, 스탯 변화, 플래그, 결과 대사를 분리하여 관리했습니다.",
        "본 개발 전 HTML 프로토타입을 제작해 UI/UX 흐름과 선택지 구조의 재미를 검증했습니다.",
        "개발 과정에서 AI를 활용하여 UI 및 인게임 이미지를 명확히 추출하고, 아트에게 전달하여 작업을 효율적으로 관리했습니다.",
      ],
      result: [
        "2026년 5월 23일 ~ 5월 24일 PlayX4 전시",
        "SNS 팔로워 20명에서 192명으로 증가",
        "아크릴 키링 300개 제작 후 이틀 간 모두 분배, 현수막, 안내 책자 제작",
      ],
    },
    placeholders: [
      { label: "IN GAME", image: "/images/tofu-ingame.png" },
      { label: "FLOWCHART", image: "/images/tofu-flowchart.png" },
      { label: "GOOGLE SHEET", image: "/images/tofu-googlesheet.png" },
      { label: "DISPLAY", image: "/images/tofu-display.jpg" },
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
    externalLinks: [
      {
        label: "포트폴리오 링크",
        href: "https://drive.google.com/file/d/1cRgJlZfMrQ5_leAeA-uhjja-dWjmw-3i/view?usp=drive_link",
      },
      {
        label: "인게임 영상",
        href: "https://drive.google.com/file/d/1e3k6z0PDHU-MrapLwAjq59ROqGVP2BP1/view?usp=drive_link",
      },
    ],
    coverImage: "/images/unhinged-cover.png",
    summary:
      "기존 공포 퍼즐의 ‘열쇠를 찾아 문을 여는’ 구조를 비틀어, 문 자체를 떼어내고 배치하는 핵심 메카닉을 설계했습니다.",
    skills: ["System Design", "Content Design", "Production Support"],
    detail: {
      problem:
        "탈출형 공포 게임은 ‘열쇠를 찾고 문을 여는’ 구조가 반복되면 퍼즐 경험이 단조로워질 수 있습니다. 또한 공포 연출과 퍼즐 시스템이 분리되면, 플레이어는 시스템을 단순 장애물 처리로만 받아들일 위험이 있습니다.",
      designIntent:
        "문을 플레이어가 직접 이동시키고 배치하는 핵심 오브젝트로 전환하고자 했습니다. 문이 공간의 경계를 바꾸는 장치가 되면, 퍼즐과 공포 연출을 동시에 강화할 수 있다고 판단했습니다.",
      solution: [
        "문을 떼어 다른 벽에 부착하는 핵심 조작을 설계했습니다.",
        "문 배치에 따라 이동 동선과 위험 구간이 달라지는 퍼즐 구조를 구성했습니다.",
        "AI 추격과 거리 기반 사운드를 연결해 긴장감을 강화했습니다.",
        "문 메카닉을 주인공의 정체에 대한 복선으로 연결했습니다.",
      ],
      implementation: [
        "Unity에서 UI, 거리 기반 추적 사운드, 데스 UI 입력 처리를 구현했습니다.",
        "VARCO 3D 에셋과 사운드를 제작 및 이식했습니다.",
        "충돌·스케일·재질 문제를 디버깅했습니다.",
      ],
      result: ["NCAI 관계자 투표 우수팀 선정.", "우수상 수상."],
    },
    placeholders: [
      { label: "LEVEL DESIGN", image: "/images/unhinged-leveldesign.png" },
      { label: "MAP", image: "/images/unhinged-map.png" },
      { label: "DIARY", image: "/images/unhinged-diary.png" },
      { label: "REWARD", image: "/images/Reward.png" },
    ],
  },
  {
    id: "lostark-reverse",
    index: "03",
    title: "Lost Ark 시스템 역기획",
    genre: "개인 작업 · 라이브 서비스 분석",
    period: "2025.12 – 2026.02",
    role: "라이브 게임의 일일 숙제인 카오스 던전 및 쿠르잔 전선 분석 및 대안책 제시",
    externalLinks: [
      {
        label: "분석 포트폴리오 링크",
        href: "https://drive.google.com/file/d/1NPmtHiBPu6ZHQICUkOZC0BaZkOLlm43F/view?usp=drive_link",
      },
      {
        label: "대안책 포트폴리오 링크",
        href: "https://drive.google.com/file/d/12UsLntVv6hSS7lQ9mY-xIjoGs0cncvnn/view?usp=drive_link",
      },
    ],
    coverImage: "/images/lostark-cover.png",
    summary:
      "반복 콘텐츠의 피로 원인을 보상 누락 압박과 다캐릭터 숙제 부담으로 정의하고, 보상 루프 개선안을 제안했습니다.",
    skills: ["System Design", "Documentation"],
    detail: {
      problem:
        "로스트아크의 일일 반복 콘텐츠는 성장에 필요한 보상을 제공하지만, 장기 플레이어에게는 ‘숙제’로 인식되기 쉽습니다. 일일 숙제 보상을 놓치면 손해라는 압박과 캐릭터 수가 늘수록 증가하는 반복 부담에 있다고 판단했습니다.",
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
      { label: "CONTENTS", image: "/images/lostark-contents.png" },
      { label: "DATA TABLE", image: "/images/lostark-datatable.png" },
      { label: "MAP", image: "/images/lostark-map.png" },
    ],
  },
  {
    id: "mu-monarch2-mount",
    index: "04",
    title: "뮤 모나크2 탈 것 시스템 개선",
    fullTitle: "뮤 모나크2 개선 탈 것 시스템 제안서",
    genre: "개인 작업 · MMORPG 시스템 제안",
    period: "2026",
    role: "시스템 분석 · 개선안 기획 · 데이터 테이블 설계",
    externalLinks: [
      {
        label: "제안서 링크",
        href: "https://drive.google.com/file/d/1XoW25yvvaqwERJvdrHIlQacBtiHXBH0a/view?usp=drive_link",
      },
    ],
    coverImage: "/images/mu-cover.png",
    summary:
      "넓은 맵과 산개된 사냥터로 생기는 이동 부담, 기존 탈 것 시스템의 낮은 콘텐츠성을 문제로 보고 이동 · 성장 · 수집 · BM을 연결한 탈 것 시스템 개선안을 설계했습니다.",
    skills: ["System Design", "UX Design", "Data Table", "Live Service Analysis"],
    detail: {
      problem:
        "뮤 모나크2는 빠른 성장과 자동 사냥을 중심으로 한 방치형 MMORPG입니다. 효율이 중요한 게임 구조지만, 넓은 맵과 산개된 사냥터로 이동 시간이 늘어나고, 기존 랜덤 이동 인장은 원하는 지점으로 확정 이동하기 어렵습니다. 기존 탈 것 시스템도 이동 속도 증가와 단순 도감에 머물러 콘텐츠 확장성이 낮다고 판단했습니다.",
      designIntent:
        "탈 것을 단순 이동 수단으로 두지 않고, 빠른 이동과 자동 사냥 연계, 강화 성장, 도감 보상, 고등급 탈 것 기능까지 연결한 성장형 시스템으로 확장하고자 했습니다.",
      solution: [
        "미니맵에서 목표 지점을 선택하면 예상 이동 시간에 따라 도보 이동과 탈 것 자동 탑승이 나뉘는 이동 구조를 설계했습니다.",
        "목표 지점 도착 후 자동 사냥으로 이어지는 흐름을 구성해 방치형 MMORPG의 효율 중심 플레이와 연결했습니다.",
        "탈 것 등급을 일반 / 에픽 / 전설 / 신화로 구분하고, 등급별 이동 속도와 고급 기능 차이를 설정했습니다.",
        "탈 것 강화 시스템을 추가해 단계별 옵션 개방과 이펙트 보상을 설계했습니다.",
        "탈 것 도감을 수집 콘텐츠로 확장하고, 보유도와 강화 진척도에 따라 재화와 영구 스탯 보상을 받을 수 있도록 구성했습니다.",
        "신화 등급 탈 것에는 텔레포트 기능을 부여해 기존 랜덤 이동 인장의 불확실성을 보완했습니다.",
      ],
      implementation: [
        "신규 탈 것 시스템의 기본 기능, 탑승 조건, 전투 중 사용 제한, 이동 속도 수치를 표로 정리했습니다.",
        "미니맵 선택 → 이동 방식 판단 → 일반 이동 또는 고급 이동 → 목적지 도착 → 자동 사냥 재개로 이어지는 플로우차트를 작성했습니다.",
        "강화 단계별 성공률, 소모 재화, 옵션 개방 시점을 데이터 테이블로 설계했습니다.",
        "도감 보유도 보상과 도감 강화 진척도 보상을 분리해 수집 보상 구조를 구성했습니다.",
        "탈 것 마스터 테이블, 강화 단계 테이블, 도감 보유도 보상 테이블, 도감 강화 진척도 보상 테이블을 부록으로 작성했습니다.",
      ],
      result: [
        "기존 탈 것 시스템을 이동 편의 기능에서 성장형 콘텐츠로 확장하는 개선안을 제작했습니다.",
        "이동 시간 단축, 탈 것 보유 수, 평균 강화 단계, 도감 보상 수령 수, 고등급 탈 것 획득률 등으로 확인 가능한 KPI를 제시했습니다.",
        "고등급 탈 것 과가치화, 도감 보상 과도화, 기존 이동 아이템 가치 하락, 강화 피로도, UI 복잡도 증가에 대한 대응 방안을 정리했습니다.",
      ],
    },
    placeholders: [
      { label: "SYSTEM FLOW", image: "/images/mu-systemflow.png" },
      { label: "ENHANCE UI", image: "/images/mu-enhanceui.png" },
      { label: "COLLECTION UI", image: "/images/mu-collectionui.png" },
      { label: "DATA TABLE", image: "/images/mu-datatable.png" },
    ],
  },
  {
    id: "darkness",
    index: "05",
    title: "어둠",
    genre: "스토리형 공포 탈출 / 2D 사이드뷰",
    period: "2024.07 – 2024.08",
    role: "PM · 기획 · 아트",
    externalLinks: [
      {
        label: "포트폴리오 링크",
        href: "https://drive.google.com/file/d/1v4o3Jzs9lzBuBluoEZy82kZyVdLPPLnt/view?usp=drive_link",
      },
    ],
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
      { label: "IN GAME", image: "/images/darkness-ingame.png" },
      { label: "LEVEL DESIGN", image: "/images/darkness-leveldesign.png" },
      { label: "FLOWCHART", image: "/images/darkness-flowchart.png" },
    ],
  },
  {
    id: "forest-child",
    index: "06",
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
        "원작 동화의 상징을 유지하되, 새로운 NPC 요소를 추가하고, 플레이어가 직접 공간을 탐색하며 퀘스트와 함께 이야기를 해석하도록 만드는 것을 목표로 했습니다.",
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
      { label: "REWARD", image: "/images/forest-reward.png" },
    ],
  },
];
