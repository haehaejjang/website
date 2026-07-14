import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
      {project.image ? (
        <div className="mb-5 overflow-hidden rounded-xl border border-line bg-canvas">
          <img
            src={project.image}
            alt={`${project.title} 대표 이미지`}
            className="h-28 w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <h3 className="text-xl font-bold text-ink">{project.title}</h3>

      <div className="mt-3">
        <Tag>{project.genre}</Tag>
      </div>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="grid grid-cols-[64px_1fr] gap-4">
          <dt className="text-muted">Role</dt>
          <dd className="font-medium text-ink">{project.role}</dd>
        </div>
        <div className="grid grid-cols-[64px_1fr] gap-4">
          <dt className="text-muted">Exp.</dt>
          <dd className="font-medium text-ink">{project.experience}</dd>
        </div>
      </dl>
    </article>
  );
}
