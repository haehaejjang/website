import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_-24px_rgba(17,17,17,0.4)]">
      {project.image ? (
        <div className="mb-5 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-line bg-canvas">
          <img
            src={project.image}
            alt={`${project.title} 대표 이미지`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      ) : null}

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

      {project.externalLinks?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              {link.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
