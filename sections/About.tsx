"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, Users } from "lucide-react";

const startDate = new Date(2020, 10); // November 2020
const yearsExp = `${Math.floor((Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))}+`;

const stats = [
  { value: yearsExp, label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Commitment" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, well-structured code with clear naming and solid architecture patterns.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description:
      "From PostgreSQL/MySQL schemas to pixel-perfect interfaces — I own the complete product lifecycle.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Obsessed with Core Web Vitals, fast load times, and smooth 60fps animations.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Clear communicator, great async collaborator, and always focused on delivering real value.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-number">01 — About</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Turning ideas into <span className="gradient-text">reality</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <p>
              Hi, I&apos;m Kent — a passionate Full Stack Developer based in the
              Philippines. I specialize in building modern web applications that
              combine elegant design with powerful functionality. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              With {yearsExp + " "} years of professional experience. My
              approach is pragmatic: choose the right tool for the job, keep
              things simple, and prioritize the user experience above all else.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-orange-500/40 transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Icon size={20} className="text-orange-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
