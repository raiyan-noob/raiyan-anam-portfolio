"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
} from "react-icons/fa";
import { projects } from "@/data/portfolioData";

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Responsive cards per page calculation
  useEffect(() => {
    function updateCardsPerPage() {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    }
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const safePage = Math.min(currentPage, Math.max(0, totalPages - 1));

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = safePage * cardsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* ── Section Header with Carousel Navigation Controls ── */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
                <FaLayerGroup className="text-sm" />
                <span>Featured Portfolio</span>
              </span>
            </div>
            <h2 className="section-title block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-base-content/70">
              Interactive web apps, real-time tools, and competitive programming trackers. Swipe side-by-side to explore.
            </p>
          </motion.div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <span className="text-xs font-semibold text-base-content/60">
              {startIndex + 1} - {Math.min(startIndex + cardsPerPage, projects.length)} of {projects.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Projects"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/60 text-base-content backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-500/50 hover:bg-base-200 hover:text-indigo-400 active:scale-95"
              >
                <FaChevronLeft className="text-xs sm:text-sm" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Projects"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/60 text-base-content backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-500/50 hover:bg-base-200 hover:text-indigo-400 active:scale-95"
              >
                <FaChevronRight className="text-xs sm:text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Side-by-Side Swipeable Carousel Container ── */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={safePage}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-200/50 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-base-300">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-transparent to-transparent opacity-80" />

                    {/* Quick Action Overlay on hover */}
                    <div className="absolute right-3 top-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          aria-label="Live Demo"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-base-100/80 text-white shadow-md backdrop-blur-md transition-colors hover:bg-indigo-600"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                          aria-label="GitHub Repository"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-base-100/80 text-white shadow-md backdrop-blur-md transition-colors hover:bg-purple-600"
                        >
                          <FaGithub className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      {/* Tech stack badges */}
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-base-content/60">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-base-content transition-colors group-hover:text-indigo-400">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-base-content/70">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Footer Buttons */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-all hover:text-indigo-300 group-hover:translate-x-1"
                      >
                        <span>View More / Details</span>
                        <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>

                      <span className="text-xs font-medium text-base-content/50">
                        Full Case Study &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Pagination Indicator Dots ── */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                safePage === idx
                  ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
