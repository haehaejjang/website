"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { Tag } from "./Tag";
import { Modal } from "./Modal";
import { Placeholder } from "./Placeholder";

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 text-sm">
      <dt className="w-16 shrink-0 text-muted">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-6">
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </h4>
      <div className="mt-3 text-[15px] leading-relaxed text-ink/90">
        {children}
      </div>
    </div>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const { detail } = study;

  return (
    <>
      <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-30px_rgba(17,17,17,0.45)] sm:p-9">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.2em] text-muted">
            CASE {study.index}
          </span>
          <span className="text-xs text-muted">{study.period}</span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-[26px]">
          {study.title}
        </h3>
        {study.fullTitle ? (
          <p className="mt-2 text-sm text-muted">{study.fullTitle}</p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          <Tag variant="accent">{study.genre}</Tag>
        </div>

        <dl className="mt-6 space-y-2">
          <MetaRow label="Role" value={study.role} />
          {study.team ? <MetaRow label="Team" value={study.team} /> : null}
          {study.affiliation ? (
            <MetaRow label="소속" value={study.affiliation} />
          ) : null}
          {study.motif ? <MetaRow label="Motif" value={study.motif} /> : null}
        </dl>

        <p className="mt-6 flex-1 text-[15px] leading-relaxed text-ink/85">
          {study.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition group-hover:gap-2.5"
        >
          자세히 보기
          <ArrowUpRight
            size={16}
            className="text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </article>

      <Modal open={open} onClose={() => setOpen(false)} title={study.title}>
        <span className="text-sm font-semibold tracking-[0.2em] text-muted">
          CASE {study.index}
        </span>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
          {study.title}
        </h3>
        {study.fullTitle ? (
          <p className="mt-2 text-sm text-muted">{study.fullTitle}</p>
        ) : null}

        <dl className="mt-6 grid grid-cols-1 gap-2 rounded-xl border border-line bg-canvas p-5 sm:grid-cols-2">
          <MetaRow label="Genre" value={study.genre} />
          <MetaRow label="Period" value={study.period} />
          <MetaRow label="Role" value={study.role} />
          {study.team ? <MetaRow label="Team" value={study.team} /> : null}
          {study.affiliation ? (
            <MetaRow label="소속" value={study.affiliation} />
          ) : null}
          {study.motif ? <MetaRow label="Motif" value={study.motif} /> : null}
        </dl>

        <div className="mt-8 space-y-6">
          <DetailBlock label="Problem">
            <p>{detail.problem}</p>
          </DetailBlock>

          <DetailBlock label="Design Intent">
            <p>{detail.designIntent}</p>
          </DetailBlock>

          <DetailBlock label="Solution">
            <ul className="space-y-2">
              {detail.solution.map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock label="Implementation">
            <ul className="space-y-2">
              {detail.implementation.map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock label="Result">
            <ul className="space-y-2">
              {detail.result.map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          <div className="border-t border-line pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Materials
            </h4>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {study.placeholders.map((p) => (
                <Placeholder key={p.label} label={p.label} />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
