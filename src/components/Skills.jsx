"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolioData";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaTerminal,
  FaTrophy,
  FaCheckCircle,
  FaLayerGroup,
  FaCode,
  FaChevronLeft,
  FaChevronRight,
  FaJava,
  FaShieldAlt,
  FaPalette,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiRedux,
  SiFramer,
  SiVercel,
  SiCplusplus,
  SiPrisma,
  SiDart,
  SiFlutter,
  SiC,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";

/* ── Icon mapping ── */
const iconMap = {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaTerminal,
  FaTrophy,
  FaJava,
  FaShieldAlt,
  FaPalette,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiRedux,
  SiFramer,
  SiVercel,
  SiCplusplus,
  SiPrisma,
  SiDart,
  SiFlutter,
  SiC,
  TbBrandAdobePhotoshop,
};

/* ── Category tabs ── */
const tabs = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "problemSolving", label: "Problem Solving & CP" },
  { key: "tools", label: "Tools & DevOps" },
];

const CARDS_PER_PAGE = 8;

/* ── Modern Skill Card ── */
const ModernSkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.icon] || FaCode;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-base-200/40 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-base-200/70 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-white/10 text-2xl text-indigo-400 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-300">
            <IconComponent />
          </div>

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            {skill.proficiency}
          </span>
        </div>

        <h3 className="text-base font-bold text-base-content transition-colors group-hover:text-indigo-400">
          {skill.name}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-base-content/70">
          {skill.highlight}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400/90">
        <FaCheckCircle className="text-[10px]" />
        <span>Production Ready</span>
      </div>
    </div>
  );
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Get active skills list
  const getSkills = () => {
    if (activeTab === "all") {
      return [
        ...skills.frontend,
        ...skills.backend,
        ...(skills.problemSolving || []),
        ...skills.tools,
      ];
    }
    return skills[activeTab] || [];
  };

  const activeSkills = getSkills();
  const totalPages = Math.ceil(activeSkills.length / CARDS_PER_PAGE);

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentPage(0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * CARDS_PER_PAGE;
  const currentSkills = activeSkills.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* ── Section Heading & Controls ── */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
                <FaLayerGroup /> Technical Competencies
              </span>
            </div>
            <h2 className="section-title block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
              My <span className="gradient-text">Skills</span>
            </h2>
            
          </motion.div>

          {/* Swipe / Arrow Controls */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <span className="text-xs font-semibold text-base-content/60">
              Page {currentPage + 1} of {Math.max(1, totalPages)} ({activeSkills.length} total)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={totalPages <= 1}
                aria-label="Previous Skills Page"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/60 text-base-content backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-500/50 hover:bg-base-200 hover:text-indigo-400 disabled:opacity-40 disabled:hover:scale-100 active:scale-95"
              >
                <FaChevronLeft className="text-xs sm:text-sm" />
              </button>
              <button
                onClick={handleNext}
                disabled={totalPages <= 1}
                aria-label="Next Skills Page"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/60 text-base-content backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-500/50 hover:bg-base-200 hover:text-indigo-400 disabled:opacity-40 disabled:hover:scale-100 active:scale-95"
              >
                <FaChevronRight className="text-xs sm:text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabSelect(tab.key)}
                className={`rounded-xl px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30"
                    : "border border-white/10 bg-base-200/50 text-base-content/70 hover:border-white/20 hover:bg-base-200 hover:text-base-content"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Swipeable 8-Card Grid View ── */}
        <div className="relative min-h-[300px] sm:min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentPage}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {currentSkills.map((skill) => (
                <ModernSkillCard
                  key={`${skill.name}-${skill.proficiency}`}
                  skill={skill}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Pagination Indicator Dots ── */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* ── Bottom Ecosystem Highlights ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <FaTrophy className="text-lg" />
              </div>
              <h4 className="text-base font-bold text-base-content">Competitive Programming</h4>
            </div>
            <p className="text-sm leading-relaxed text-base-content/75">
              600+ problems solved across Codeforces & LeetCode focusing on data structure algorithms, and time complexity.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 bg-cyan-500/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                <FaReact className="text-lg" />
              </div>
              <h4 className="text-base font-bold text-base-content">Full-Stack Architecture</h4>
            </div>
            <p className="text-sm leading-relaxed text-base-content/75">
              Modern engineering from Next.js 16 and React 19 to RESTful endpoints with Node.js, Express, MongoDB, and PostgreSQL.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-purple-500/20 bg-purple-500/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                <FaTerminal className="text-lg" />
              </div>
              <h4 className="text-base font-bold text-base-content">AI/ML & Intelligent Systems</h4>
            </div>
            <p className="text-sm leading-relaxed text-base-content/75">
              Deep interest in machine learning algorithms, intelligent automation, and combining data science with modern web apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
