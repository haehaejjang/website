import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_-24px_rgba(17,17,17,0.4)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink">
          {project.title}
        </h3>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Tag>{project.genre}</Tag>
      </div>
      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex gap-3">
          <dt className="w-14 shrink-0 text-muted">Role</dt>
          <dd className="text-ink">{project.role}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-14 shrink-0 text-muted">Exp.</dt>
          <dd className="text-ink">{project.experience}</dd>
        </div>
      </dl>
    </div>
  );
}
