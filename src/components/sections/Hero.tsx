"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 sm:pt-40 md:pt-48"
    >
      <div className="container-content grid grid-cols-1 gap-14 pb-24 md:grid-cols-12 md:gap-10 md:pb-32">
        <motion.div
          className="md:col-span-7"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-muted"
          >
            {profile.role}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tightest text-ink sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium tracking-tight text-ink/80 sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl whitespace-pre-line text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button
              href="#case-studies"
              variant="primary"
              icon={<ArrowRight size={16} />}
            >
              View Case Studies
            </Button>
            <Button
              href={profile.portfolioPdf}
              variant="secondary"
              download
              icon={<Download size={16} />}
            >
              Download Portfolio
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              icon={<Mail size={16} />}
            >
              Contact
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2"
          >
            {profile.heroKeywords.map((keyword) => (
              <li
                key={keyword}
                className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
              >
                {keyword}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* 우측 추상 grid visual */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] w-full rounded-2xl border border-line bg-surface p-4">
            <div className="grid h-full grid-cols-2 grid-rows-3 gap-3">
              <div className="col-span-2 rounded-xl bg-gradient-to-br from-accent/30 to-accent-soft/20" />
              <div className="rounded-xl border border-dashed border-line bg-canvas" />
              <div className="rounded-xl bg-accent/15" />
              <div className="rounded-xl bg-ink/5" />
              <div className="rounded-xl border border-dashed border-line bg-canvas" />
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              <span>System</span>
              <span>Content</span>
              <span>Scenario</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
