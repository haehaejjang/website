"use client";

import Image from "next/image";
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

const heroProjects = [
  {
    title: "HELP!!!",
    image: "/images/tofu-cover.png",
    label: "Scenario",
  },
  {
    title: "UNHINGED",
    image: "/images/unhinged-cover.png",
    label: "System",
  },
  {
    title: "Lost Ark",
    image: "/images/lostark-cover.png",
    label: "Analysis",
  },
  {
    title: "어둠",
    image: "/images/darkness-cover.png",
    label: "PM",
  },
];

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-88px)] overflow-hidden px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pt-40">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="min-w-0">
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-muted"
          >
            Game Designer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-ink"
          >
            {profile.nameEn}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-xl font-medium text-ink/80"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl whitespace-pre-line break-keep text-base leading-8 text-muted sm:text-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button href="#case-studies" icon={<ArrowRight size={17} />}>
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

            <Button href="#contact" variant="ghost" icon={<Mail size={17} />}>
              Contact
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-2">
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

        <motion.div variants={item} className="relative min-w-0">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-ink/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-line bg-surface p-4 shadow-card">
            <div className="grid grid-cols-2 gap-3">
              {heroProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={
                    index === 0
                      ? "group relative col-span-2 aspect-[16/7] overflow-hidden rounded-[1.4rem] border border-line bg-canvas"
                      : "group relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-line bg-canvas"
                  }
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} 대표 이미지`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 45vw"
                        : "(max-width: 1024px) 50vw, 22vw"
                    }
                    className="object-cover transition duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                        {project.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
