"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { experience } from "@/data/portfolioData";

/* ── animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 * i, duration: 0.35, ease: "easeOut" },
  }),
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl">
        {/* ── Section heading ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
              <FaBriefcase /> Career & Development
            </span>
          </div>
          <h2 className="section-title section-title-center block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* ── Experience cards ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Left gradient accent border */}
              <div
                className="absolute inset-y-0 left-0 w-1 rounded-l-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)",
                }}
              />

              <div className="p-6 pl-8 sm:p-8 sm:pl-10">
                {/* Role title */}
                <h3 className="mb-1 text-xl font-bold text-base-content sm:text-2xl">
                  {item.role}
                </h3>

                {/* Company + Duration row */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-base-content/70">
                    <HiOfficeBuilding className="text-primary" />
                    {item.company}
                  </span>
                  <span className="badge badge-outline badge-primary badge-sm">
                    {item.duration}
                  </span>
                </div>

                {/* Bullet point descriptions */}
                <ul className="space-y-2">
                  {item.description.map((point, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={bulletVariants}
                      className="flex items-start gap-2 text-sm leading-relaxed text-base-content/60"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.06), transparent 40%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
