"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/data/portfolioData";

/* ── animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : 60,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* ── Section heading ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
              <FaGraduationCap /> Academic Background
            </span>
          </div>
          <h2 className="section-title section-title-center block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
            Educational <span className="gradient-text">Qualifications</span>
          </h2>
          
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical gradient line */}
          <div
            className="absolute top-0 left-4 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, #6366f1, #a855f7, #6366f1)",
            }}
          />

          {education.map((item, index) => {
            const isLeft = index % 2 === 0;
            const direction = isLeft ? "left" : "right";

            return (
              <div
                key={index}
                className={`relative mb-12 flex items-start last:mb-0 md:items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* ── Timeline dot ───────────────────────────── */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
                    <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-base-100">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                  </span>
                </motion.div>

                {/* ── Spacer for the other half on desktop ──── */}
                <div className="hidden w-1/2 md:block" />

                {/* ── Card ────────────────────────────────────── */}
                <motion.div
                  variants={cardVariants(direction)}
                  className={`ml-8 sm:ml-10 w-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    {/* Degree */}
                    <h3 className="gradient-text mb-1 text-lg font-bold sm:text-xl">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p className="mb-3 text-sm font-medium text-base-content/70">
                      {item.institution}
                    </p>

                    {/* Year badge */}
                    <span className="badge badge-outline badge-primary mb-3">
                      {item.year}
                    </span>

                    {/* Description */}
                    <p className="mb-3 text-sm leading-relaxed text-base-content/60">
                      {item.description}
                    </p>

                    {/* GPA badge */}
                    <span className="badge badge-primary badge-sm gap-1 font-semibold">
                      GPA: {item.gpa}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
