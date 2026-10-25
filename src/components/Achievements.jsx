"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaAward,
  FaChalkboardTeacher,
  FaExternalLinkAlt,
  FaCertificate,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaGamepad,
  FaPython,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiNextdotjs } from "react-icons/si";
import { achievements, personalInfo } from "@/data/portfolioData";

const iconMap = {
  FaTrophy,
  FaAward,
  FaChalkboardTeacher,
  SiCodeforces,
  SiLeetcode,
  FaGamepad,
  FaPython,
  FaReact,
  SiNextdotjs,
  FaDatabase,
};

const CARDS_PER_SLIDE = 3;

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(achievements.length / CARDS_PER_SLIDE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * CARDS_PER_SLIDE;
  const currentAchievements = achievements.slice(startIndex, startIndex + CARDS_PER_SLIDE);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 -z-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        {/* ── Section Heading with Swipe Controls ── */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur-md">
                <FaTrophy /> Honors & Certifications
              </span>
            </div>
            <h2 className="section-title block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
              Achievements & <span className="gradient-text">Certifications</span>
            </h2>
          </motion.div>

          {/* Swipe / Carousel Controls */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <span className="text-xs font-semibold text-base-content/60">
              {startIndex + 1} - {Math.min(startIndex + CARDS_PER_SLIDE, achievements.length)} of {achievements.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Achievements"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/60 text-base-content backdrop-blur-md transition-all hover:scale-105 hover:border-amber-500/50 hover:bg-base-200 hover:text-amber-400 active:scale-95"
              >
                <FaChevronLeft className="text-xs sm:text-sm" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Achievements"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/60 text-base-content backdrop-blur-md transition-all hover:scale-105 hover:border-amber-500/50 hover:bg-base-200 hover:text-amber-400 active:scale-95"
              >
                <FaChevronRight className="text-xs sm:text-sm" />
              </button>
            </div>
          </div>
        </div>


        {/* ── Swipeable Column of 3 Row Cards ── */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-5"
            >
              {currentAchievements.map((item, index) => {
                const IconComponent = iconMap[item.icon] || FaCertificate;
                return (
                  <div
                    key={`${item.title}-${index}`}
                    className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 overflow-hidden rounded-2xl border border-white/10 bg-base-200/50 p-6 sm:p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:bg-base-200/80 hover:shadow-xl hover:shadow-amber-500/10"
                  >
                    {/* Left Accent Bar */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-500 via-purple-500 to-indigo-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Content Section */}
                    <div className="flex items-start gap-4 sm:gap-5 pl-2 sm:pl-3 flex-1">
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-500/30 text-2xl text-amber-400 shadow-inner transition-transform duration-300 group-hover:scale-110">
                        <IconComponent />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            {item.badge}
                          </span>
                          <span className="text-[11px] font-medium text-base-content/50">
                            {item.category}
                          </span>
                        </div>

                        {/* Heading */}
                        <h3 className="text-lg sm:text-xl font-bold text-base-content transition-colors group-hover:text-amber-400">
                          {item.title}
                        </h3>

                        {/* Subheading */}
                        <p className="mt-1 text-xs font-semibold text-indigo-400/90">
                          {item.subheading}
                        </p>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: See Credentials Button */}
                    <div className="w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5 shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                      <a
                        href={item.credentialsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-500/20 transition-all hover:scale-105 hover:shadow-amber-500/35"
                      >
                        <FaCertificate className="text-xs" />
                        <span>See Credentials</span>
                        <FaExternalLinkAlt className="text-[10px] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </a>
                      <span className="text-[10px] text-base-content/50 font-medium hidden sm:inline">
                        Verified Credential
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Pagination Indicator Dots ── */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to achievements page ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentPage === idx
                  ? "w-8 bg-gradient-to-r from-amber-500 to-orange-500"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
