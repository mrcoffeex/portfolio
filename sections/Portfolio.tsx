"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Flow",
    description:
      "Flow helps teams run organized counters while visitors easily join queues, track waiting counts, and check the latest ticket progress in real time.",
    tags: ["LARAVEL", "REACT", "TAILWIND CSS", "INERTIA JS", "POSTGRESQL"],
    github: "https://github.com/mrcoffeex/flow",
    live: "",
    gradient: "from-teal-400/15 to-orange-500/15",
    dotColor: "bg-teal-400",
    image: "/images/projects/flow.png",
  },
  {
    id: 2,
    title: "UMRIC",
    description:
      "UMRIC is a Full Stack Laravel project designed to provide a comprehensive solution for managing and tracking reaserch activities in institutions.",
    tags: ["LARAVEL", "VUE", "TAILWIND CSS", "INERTIA JS", "POSTGRESQL"],
    github: "https://github.com/mrcoffeex/umric",
    live: "",
    gradient: "from-teal-400/15 to-orange-500/15",
    dotColor: "bg-teal-400",
    image: "/images/projects/umric.png",
  },
  {
    id: 3,
    title: "DokHUb",
    description:
      "DokHUb is a Full Stack Laravel StartUp project designed to streamline doctor appointment scheduling and management. It features a user-friendly interface for patients and doctors, real-time notifications, AI features, and secure data handling.",
    tags: ["LARAVEL", "VUE", "TAILWIND CSS", "INERTIA JS", "POSTGRESQL"],
    github: "https://github.com/mrcoffeex/dokhub",
    live: "https://dokhub-main-k63oyd.free.laravel.cloud/",
    gradient: "from-teal-400/15 to-orange-500/15",
    dotColor: "bg-teal-400",
    image: "/images/projects/dokhub.png",
  },
  {
    id: 4,
    title: "Infra Monitoring",
    description:
      "Streamline procurement, obligation, implementation, and payment tracking with actionable transparency.",
    tags: ["Laravel", "Filament", "Alpine.js", "Tailwind CSS", "MySQL"],
    github: "https://github.com/mrcoffeex/pbo-monitoring",
    live: "https://infra.pbodavaodelsur.com/",
    gradient: "from-orange-500/15 to-teal-400/15",
    dotColor: "bg-orange-500",
    image: "/images/projects/infra-monitoring.png",
  },
  {
    id: 5,
    title: "TabuLAX",
    description:
      "TabulAX is a PHP-based tabulation management system designed for beauty pageants. It features live score tracking and fast results processing.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/mrcoffeex",
    live: "#",
    gradient: "from-teal-400/15 to-orange-500/15",
    dotColor: "bg-teal-400",
    image: "/images/projects/tabulax.png",
  },
  {
    id: 6,
    title: "PBO DTS",
    description:
      "The official document transmission platform for the Davao Del Sur Provincial Budget Office — secure, tracked, and transparent.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/mrcoffeex/",
    live: "https://dts.pbodavaodelsur.com/",
    gradient: "from-orange-500/15 to-teal-400/15",
    dotColor: "bg-orange-500",
    image: "/images/projects/pbo-dts.png",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeProject = projects[activeIndex];

  const selectProject = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const panelVariants = {
    enter: (movement: number) => ({
      opacity: 0,
      x: movement > 0 ? 80 : -80,
      scale: 0.98,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (movement: number) => ({
      opacity: 0,
      x: movement > 0 ? -80 : 80,
      scale: 0.98,
    }),
  };

  return (
    <section id="portfolio" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-number">03 — Portfolio</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A collection of projects I&apos;m proud of — real products built for
            real users. From MVPs to enterprise-grade platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid lg:grid-cols-[1.45fr_0.85fr] gap-6 lg:gap-8 items-start"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card min-h-[500px] sm:min-h-[560px]">
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

            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.article
                key={activeProject.id}
                custom={direction}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 h-full p-4 sm:p-5"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border/70 h-56 sm:h-[300px]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover scale-105"
                    priority
                    unoptimized
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeProject.gradient}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${activeProject.dotColor}`}
                    />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/85">
                      Featured Work
                    </span>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="absolute left-5 bottom-5 text-2xl sm:text-3xl font-bold text-white drop-shadow-md"
                  >
                    {activeProject.title}
                  </motion.h3>
                </div>

                <div className="pt-5 sm:pt-6">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14, duration: 0.45 }}
                    className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {activeProject.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-muted border border-border/70 text-muted-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24, duration: 0.45 }}
                    className="mt-6 flex flex-wrap items-center gap-2.5"
                  >
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
                    >
                      <Github size={16} />
                      Source Code
                    </a>

                    {activeProject.live !== "#" ? (
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
                  </motion.div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="absolute right-4 bottom-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="h-9 w-9 rounded-full border border-border/80 bg-card/90 backdrop-blur-sm text-foreground hover:border-orange-500/50 transition"
                aria-label="Previous project"
              >
                <ArrowLeft size={15} className="mx-auto" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="h-9 w-9 rounded-full border border-border/80 bg-card/90 backdrop-blur-sm text-foreground hover:border-orange-500/50 transition"
                aria-label="Next project"
              >
                <ArrowRight size={15} className="mx-auto" />
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-3 sm:p-4 h-[500px] sm:h-[560px] flex flex-col">
            <div className="mb-3 px-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Showcase Queue
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Choose a project to reveal details.
              </p>
            </div>

            <div className="space-y-2 flex-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    onClick={() => selectProject(index)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left rounded-2xl p-3 border transition-all duration-300 ${
                      isActive
                        ? "bg-muted/70 border-orange-500/35"
                        : "bg-card border-border hover:border-border/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          Work {String(index + 1).padStart(2, "0")}
                        </p>
                        <h4 className="font-semibold text-sm sm:text-base mt-1 text-foreground">
                          {project.title}
                        </h4>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className={`mt-1 transition ${isActive ? "text-orange-500" : "text-muted-foreground"}`}
                      />
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-3 h-1 w-full rounded-full bg-border/70 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-teal-400"
                        initial={false}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
