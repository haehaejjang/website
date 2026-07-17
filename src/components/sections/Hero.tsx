"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="section-padding min-h-[calc(100vh-88px)] overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-muted"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium text-ink/80"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl whitespace-pre-line text-base leading-8 text-muted sm:text-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#case-studies"
              icon={<ArrowRight size={17} />}
            >
              View Case Studies
            </Button>

            <Button
              href={profile.portfolioUrl}
              variant="secondary"
              external
              icon={<Download size={17} />}
            >
              View Portfolio
            </Button>

            <Button
              href="#contact"
              variant="ghost"
              icon={<Mail size={17} />}
            >
              Contact
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-2"
          >
            {profile.heroKeywords.map((keyword) => (
              <li
                key={keyword}
                className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-muted"
              >
                {keyword}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={item}
          className="relative"
          aria-label="Portfolio visual"
        >
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-ink/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-4 shadow-card">
            <div className="overflow-hidden rounded-[1.5rem] border border-line bg-canvas">
              <img
                src="/images/hero-visual.png"
                alt="안세은 게임 기획 포트폴리오 대표 이미지"
                className="h-full max-h-[520px] w-full object-contain"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="rounded-xl border border-line bg-canvas px-3 py-3">
                System
              </span>
              <span className="rounded-xl border border-line bg-canvas px-3 py-3">
                Content
              </span>
              <span className="rounded-xl border border-line bg-canvas px-3 py-3">
                Scenario
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
