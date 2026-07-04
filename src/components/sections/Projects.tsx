import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-line">
      <div className="container-content">
        <SectionTitle
          eyebrow="Other Projects"
          title="그 외 참여 프로젝트"
          description="다양한 장르에서 기획·시나리오·아트·PM 역할을 맡으며 팀 프로젝트를 완주했습니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
