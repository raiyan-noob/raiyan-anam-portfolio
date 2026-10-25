"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaChalkboardTeacher,
  FaRocket,
  FaBug,
  FaCheck,
  FaArrowRight,
  FaHandshake,
} from "react-icons/fa";
import { services } from "@/data/portfolioData";

const iconMap = {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaChalkboardTeacher,
  FaRocket,
  FaBug,
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
              <FaHandshake /> What I Provide
            </span>
          </div>
          <h2 className="section-title section-title-center block text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-base-content/75 sm:text-lg">
            High-caliber full-stack engineering, performance optimization, and intelligent modern web applications.
          </p>
        </motion.div>

        {/* ── Services Cards Grid ── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaLaptopCode;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-base-200/50 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-pink-500/15 border border-white/10 text-2xl text-indigo-400 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-300">
                    <IconComponent />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-base-content transition-colors group-hover:text-indigo-400">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-base-content/75">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-medium text-base-content/85"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <FaCheck className="text-[8px]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 transition-all hover:text-indigo-300 group-hover:translate-x-1"
                  >
                    <span>Request this service</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 p-8 text-center backdrop-blur-xl shadow-2xl"
        >
          <h3 className="text-2xl font-extrabold text-base-content sm:text-3xl">
            Have a custom software project or need intelligent AI/web engineering?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-base-content/75">
            Let&apos;s collaborate to build fast, scalable applications or jumpstart your problem-solving journey.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

