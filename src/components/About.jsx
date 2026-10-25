"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutMe, personalInfo } from "@/data/portfolioData";

/* ── animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.15, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ── terminal code lines shown inside the illustration ─── */
const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "${personalInfo.name}",` },
  { indent: 1, text: 'role: "Full Stack Dev",' },
  { indent: 1, text: "skills: [" },
  { indent: 2, text: '"React", "Next.js",' },
  { indent: 2, text: '"Node.js", "Tailwind",' },
  { indent: 1, text: "]," },
  { indent: 1, text: "passion: true," },
  { indent: 0, text: "};" },
];

/* ══════════════════════════════════════════════════════════
   About Section
   ══════════════════════════════════════════════════════════ */
export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[480px] w-[480px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ── section title ────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
              Get To Know Me
            </span>
          </div>
          <h2 className="section-title section-title-center block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* ── two-column layout ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — creative illustration */}
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* gradient border wrapper */}
            <div className="rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px]">
              <div className="rounded-2xl bg-base-100 p-1">
                {/* terminal window */}
                <div className="rounded-xl bg-base-300/60 backdrop-blur overflow-hidden">
                  {/* title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-base-300/80">
                    <span className="h-3 w-3 rounded-full bg-error" />
                    <span className="h-3 w-3 rounded-full bg-warning" />
                    <span className="h-3 w-3 rounded-full bg-success" />
                    <span className="ml-3 text-xs text-base-content/50 font-mono">
                      ~/developer.js
                    </span>
                  </div>

                  {/* code body */}
                  <div className="px-3 py-4 sm:px-5 sm:py-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                    {codeLines.map((line, i) => (
                      <motion.div
                        key={i}
                        className="flex"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + i * 0.08,
                          ease: "easeOut",
                        }}
                      >
                        {/* line number */}
                        <span className="mr-3 sm:mr-4 w-4 sm:w-5 shrink-0 text-right text-base-content/25 select-none">
                          {i + 1}
                        </span>
                        {/* indentation + content */}
                        <span
                          className="text-base-content/80 whitespace-nowrap"
                          style={{ paddingLeft: `${line.indent * 1}rem` }}
                        >
                          <CodeHighlight text={line.text} />
                        </span>
                      </motion.div>
                    ))}
                    {/* blinking cursor */}
                    <motion.span
                      className="inline-block mt-1 ml-7 sm:ml-9 h-4 w-2 bg-primary"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* experience badge */}
            <motion.div
              className="absolute -bottom-3 right-1 sm:-bottom-5 sm:-right-5 z-10"
              initial={{ opacity: 0, scale: 0, rotate: -12 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: -6 }
                  : { opacity: 0, scale: 0, rotate: -12 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 14,
                delay: 0.8,
              }}
            >
              <div className="rounded-xl bg-gradient-to-br from-primary to-secondary px-5 py-3 shadow-lg shadow-primary/25">
                <p className="text-primary-content text-xs font-semibold uppercase tracking-wider">
                  Experience
                </p>
                <p className="text-primary-content text-xl font-bold leading-tight">
                  2+ Years
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — text content */}
          <div className="space-y-5">
            {aboutMe.description.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-base-content/75 leading-relaxed text-[0.95rem] sm:text-base"
                variants={fadeRight}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── stats grid ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {aboutMe.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card group rounded-2xl border border-base-content/5 bg-base-200/40 backdrop-blur-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-base-content/60 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── simple syntax-highlighting helper ─────────────────── */
function CodeHighlight({ text }) {
  const keywords = ["const", "true", "false"];
  const tokens = text.split(/("[^"]*"|[:,\[\]{};]|\s+)/g).filter(Boolean);

  return tokens.map((token, i) => {
    if (/^"[^"]*"$/.test(token)) {
      return (
        <span key={i} className="text-success">
          {token}
        </span>
      );
    }
    if (keywords.includes(token)) {
      return (
        <span key={i} className="text-secondary font-semibold">
          {token}
        </span>
      );
    }
    if (/^[,:;\[\]{}]$/.test(token)) {
      return (
        <span key={i} className="text-base-content/40">
          {token}
        </span>
      );
    }
    if (/^[a-zA-Z_]\w*$/.test(token)) {
      return (
        <span key={i} className="text-info">
          {token}
        </span>
      );
    }
    return <span key={i}>{token}</span>;
  });
}
