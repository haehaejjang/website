import { caseStudies } from "@/data/caseStudies";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Case Studies"
          title="문제 정의부터 결과까지"
          description="핵심 프로젝트 5개를 Problem · Design Intent · Solution · Implementation · Result 구조로 정리했습니다. 카드를 눌러 상세 내용을 확인할 수 있습니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={(i % 2) * 0.06}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
