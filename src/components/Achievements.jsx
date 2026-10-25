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
            <p className="mt-4 max-w-xl text-base text-base-content/70">
              Verified competitive programming ranks, professional certifications, and academic excellence. Swipe to browse 3 items per view.
            </p>
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

        {/* ── Codeforces Live Card Spotlight ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-base-200/60 to-purple-500/10 p-5 sm:p-8 backdrop-blur-xl shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-2xl sm:text-3xl text-white shadow-lg shadow-amber-500/25">
                <SiCodeforces />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Codeforces Rank: {personalInfo.cpStats?.rank || "Pupil"}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 hidden sm:inline-block" />
                  <span className="text-xs text-base-content/60 font-mono">@{personalInfo.handle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-base-content">
                  Codeforces Competitive Profile
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-base-content/75 max-w-xl">
                  Peak Rating: <strong className="text-amber-400">{personalInfo.cpStats?.maxRating || 1375}</strong> • Current Rating: <strong className="text-base-content">{personalInfo.cpStats?.rating || 1315}</strong> • Organization: <span className="text-indigo-400 font-semibold">{personalInfo.cpStats?.organization || "AUST"}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-base-100/60 px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md">
                <FaStar className="text-amber-400 text-sm" />
                <span className="text-xs font-bold text-base-content">500+ Solved</span>
              </div>
              <a
                href={personalInfo.socialLinks.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-500/25 transition-all hover:scale-105 hover:shadow-amber-500/40 flex-1 sm:flex-initial"
              >
                <span>View Profile</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </motion.div>

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
