'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GitHubContributions from '@/components/GitHubContributions'

const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'REST APIs', 'PEST'],
  },
  {
    category: 'Database & Cloud',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Laravel Cloud', 'DigitalOcean'],
  },
  {
    category: 'DevOps & Tools',
    items: ['GitHub Copilot', 'Claude Code', 'Cursor AI', 'n8n', 'Git', 'GitHub', 'Docker', 'Vercel', 'Linux / CLI', 'VS Code', 'Wordpress'],
  },
]

export default function Stack() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="stack"
      ref={ref}
      className="py-24 sm:py-32 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-number">02 — Stack</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tools of the{' '}
            <span className="gradient-text">trade</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A curated selection of technologies I use to build robust, scalable
            applications — chosen for productivity, performance, and ecosystem
            strength.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-5">
          {techStack.map(({ category, items }, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: catIdx * 0.1 + i * 0.04 + 0.2 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:border-orange-500/40 hover:bg-muted transition-all duration-200 cursor-default"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 p-6 rounded-xl border border-border bg-card"
        >
          <h3 className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-5">
            GitHub Activity
          </h3>
          <GitHubContributions />
        </motion.div>
      </div>
    </section>
  )
}
