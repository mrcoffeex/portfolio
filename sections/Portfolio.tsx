'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ArrowUpRight } from 'lucide-react'
import ProjectThumbnail from '../components/ProjectThumbnail'

const projects = [
  {
    id: 1,
    title: 'DokHUb',
    description:
      'DokHUb is a Full Stack Laravel StartUp project designed to streamline doctor appointment scheduling and management. It features a user-friendly interface for patients and doctors, real-time notifications, AI features, and secure data handling.',
    tags: ['LARAVEL', 'VUE', 'TAILWIND CSS', 'INERTIA JS', 'POSTGRESQL'],
    github: 'https://github.com/mrcoffeex/dokhub',
    live: 'https://dokhub-main-k63oyd.free.laravel.cloud/',
    gradient: 'from-teal-400/15 to-orange-500/15',
    dotColor: 'bg-teal-400',
    image: '/images/projects/dokhub.png',
  },
  {
    id: 2,
    title: 'Infra Monitoring',
    description:
      'Streamline procurement, obligation, implementation, and payment tracking with actionable transparency.',
    tags: ['Laravel', 'Filament', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/mrcoffeex/pbo-monitoring',
    live: 'https://infra.pbodavaodelsur.com/',
    gradient: 'from-orange-500/15 to-teal-400/15',
    dotColor: 'bg-orange-500',
    image: '/images/projects/infra-monitoring.png',
  },
  {
    id: 3,
    title: 'TabuLAX',
    description:
      'TabulAX is a PHP-based tabulation management system designed for beauty pageants. It features live score tracking and fast results processing.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/mrcoffeex',
    live: '#',
    gradient: 'from-teal-400/15 to-orange-500/15',
    dotColor: 'bg-teal-400',
    image: '/images/projects/tabulax.png',
  },
  {
    id: 4,
    title: 'PBO DTS',
    description:
      'The official document transmission platform for the Davao Del Sur Provincial Budget Office — secure, tracked, and transparent.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/mrcoffeex/',
    live: 'https://dts.pbodavaodelsur.com/',
    gradient: 'from-orange-500/15 to-teal-400/15',
    dotColor: 'bg-orange-500',
    image: '/images/projects/pbo-dts.png',
  },
]

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="portfolio" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
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
            Selected{' '}
            <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A collection of projects I&apos;m proud of — real products built for
            real users. From MVPs to enterprise-grade platforms.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-orange-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative flex flex-col h-full">
                <div className="mb-4">
                  <ProjectThumbnail title={project.title} gradient={project.gradient} src={project.image} />
                </div>
                {/* Card header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${project.dotColor} opacity-70`}
                    />
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      aria-label="View source on GitHub"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      aria-label="View live demo"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="font-semibold text-base text-foreground mb-2.5 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border/50 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-orange-500/50 bg-card hover:bg-muted text-foreground font-medium text-sm transition-all duration-200"
            >
              Show all {projects.length} projects
              <ArrowUpRight size={15} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
