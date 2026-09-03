"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, Images } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="portfolio" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-number">03 — Portfolio</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Products I built end to end — from queue desks and campus research
            tracking to government workflows and court operations. Each project
            includes a walkthrough gallery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Projects
            </p>
            <p className="text-[11px] font-mono text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          <div
            className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
            role="tablist"
            aria-label="Projects"
          >
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const cover = project.images[0];

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -2 }}
                  className={`group relative w-[168px] sm:w-[188px] flex-shrink-0 text-left rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? "border-orange-500/50 ring-2 ring-orange-500/20"
                      : "border-border hover:border-orange-500/35"
                  }`}
                >
                  <div className="relative h-24 bg-muted">
                    {cover ? (
                      <Image
                        src={cover}
                        alt=""
                        fill
                        sizes="188px"
                        className="object-cover object-top"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-mono text-white/90 backdrop-blur-sm">
                      <Images size={10} />
                      {project.images.length}
                    </span>
                  </div>
                  <div className="p-3 bg-card">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground truncate">
                      {project.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {activeProject ? (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -top-28 -left-16 h-60 w-60 rounded-full bg-orange-500/12 blur-3xl"
              animate={{ y: [0, 14, 0], x: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 right-0 h-52 w-52 rounded-full bg-teal-400/14 blur-3xl"
              animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 grid lg:grid-cols-[1.35fr_0.65fr] gap-6 lg:gap-8 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectGallery
                    images={activeProject.images}
                    title={activeProject.title}
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.id}-details`}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-center"
                  role="tabpanel"
                  aria-label={`${activeProject.title} details`}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Featured work
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                    {activeProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-muted border border-border/70 text-muted-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
                    >
                      <Github size={16} />
                      Source Code
                    </a>

                    {activeProject.live ? (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-orange-500/45 bg-card text-sm font-medium transition"
                      >
                        Live Preview
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/80 bg-muted/50 text-muted-foreground text-sm font-medium">
                        Preview Soon
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
