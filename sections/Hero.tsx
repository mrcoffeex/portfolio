'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Available for new projects
              <Sparkles size={14} />
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse-slow">
              Kent
            </span>
          </motion.h1>

          {/* Role tag */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-muted-foreground text-sm font-mono">
              <span className="text-green-400">▸</span>
              Full Stack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            I craft{' '}
            <span className="text-foreground font-medium">
              scalable, high-performance
            </span>{' '}
            web applications. Focused on clean code, great
            client experience, and products that{' '}
            <span className="text-foreground font-medium">
              users actually love
            </span>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-border hover:border-indigo-500/50 bg-card hover:bg-muted text-foreground rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={item}
            className="flex items-center gap-6 text-sm text-muted-foreground"
          >
            <a
              href="https://github.com/mrcoffeex/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a
              href="https://linkedin.com/in/kentjohngo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="inline-flex items-center gap-2">
              📍 Philippines
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border-2 border-border flex items-start justify-center pt-1"
        >
          <div className="w-0.5 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
