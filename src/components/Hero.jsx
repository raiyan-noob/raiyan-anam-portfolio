"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaArrowRight,
  FaTrophy,
  FaReact,
  FaNodeJs,
  FaTerminal,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiLeetcode,
  SiCodeforces,
  SiCplusplus,
} from "react-icons/si";
import { personalInfo } from "@/data/portfolioData";

/* ── Typewriter Hook ── */
const roles = [
  "Full Stack Developer",
  "Competitive Programmer",
  "MERN & Next.js Specialist",
  "Algorithms & Problem Solver",
];

function useTypewriter(words, typingSpeed = 90, deletingSpeed = 50, pauseDuration = 1800) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}

/* ── Animation Variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Social Link Button ── */
function SocialIcon({ href, icon: Icon, label }) {
  if (!href) return null;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-base-200/50 text-base-content/70 shadow-sm backdrop-blur-md transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={18} />
    </motion.a>
  );
}

export default function Hero() {
  const typedText = useTypewriter(roles);
  const [profileSrc, setProfileSrc] = useState(personalInfo.profileImage || "/profile.jpg");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      {/* ── Background Glow Effects ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute left-1/2 bottom-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* ── Left: Text Content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-4 inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available for Projects & Competitive Contests</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-base-content/80 mb-2"
            >
              Hello, I&apos;m <span className="inline-block animate-bounce">👋</span>
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Dynamic Typewriter */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex h-12 items-center justify-center gap-2 text-xl font-bold sm:text-3xl lg:justify-start"
            >
              <span className="text-indigo-400 font-mono">&lt;</span>
              <span className="text-base-content">{typedText}</span>
              <span className="inline-block h-7 w-[3px] animate-pulse bg-indigo-500" />
              <span className="text-indigo-400 font-mono">/&gt;</span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-base-content/75 sm:text-lg lg:mx-0"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mb-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href={personalInfo.resumeLink}
                download
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
              >
                <FaDownload className="transition-transform duration-300 group-hover:-translate-y-1" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-base-200/50 px-7 py-3.5 text-sm font-semibold text-base-content backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-base-200 hover:text-indigo-400"
              >
                <span>Let&apos;s Connect</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-xs" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <SocialIcon href={personalInfo.socialLinks.github} icon={FaGithub} label="GitHub" />
              <SocialIcon href={personalInfo.socialLinks.linkedin} icon={FaLinkedin} label="LinkedIn" />
              <SocialIcon href={personalInfo.socialLinks.leetcode} icon={SiLeetcode} label="LeetCode" />
              <SocialIcon href={personalInfo.socialLinks.codeforces} icon={SiCodeforces} label="Codeforces" />
              <SocialIcon href={personalInfo.socialLinks.twitter} icon={FaTwitter} label="Twitter" />
              <SocialIcon href={personalInfo.socialLinks.facebook} icon={FaFacebookF} label="Facebook" />
            </motion.div>
          </motion.div>

          {/* ── Right: User Photo Circle & Roaming Tech/CP Stacks ── */}
          <div className="relative flex flex-col items-center justify-center py-4 sm:py-6">
            {/* Center Circular Photo Wrapper */}
            <div className="relative flex items-center justify-center">
              {/* Outer Orbiting / Rotating Conic Glow Ring */}
              <motion.div
                className="absolute h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
                  opacity: 0.25,
                  filter: "blur(35px)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Circular Frame */}
              <div className="relative flex h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px] items-center justify-center rounded-full p-1.5 shadow-2xl">
                {/* Rotating Border Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Circle with Photo or Fallback */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-base-100 bg-base-200">
                  <Image
                    src={profileSrc}
                    alt={personalInfo.name}
                    fill
                    priority
                    className="object-cover"
                    onError={() => setProfileSrc("/profile-placeholder.svg")}
                  />
                </div>
              </div>

              {/* ── Desktop & Tablet Floating Orbital Badges (hidden on mobile to prevent clipping) ── */}
              {/* Badge 1: Competitive Programming (Top Left) */}
              <motion.div
                className="hidden md:flex absolute -top-4 -left-6 lg:-left-12 z-20 items-center gap-2.5 rounded-2xl border border-amber-500/30 bg-base-100/90 px-3.5 py-2 shadow-xl backdrop-blur-xl"
                animate={{
                  y: [0, -10, 0, 8, 0],
                  x: [0, 6, 0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                 <FaTrophy className="text-base" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-base-content">Competitive Prog.</div>
                <div className="text-[10px] font-semibold text-amber-400">500+ Solved • DSA</div>
                </div>
              </motion.div>

              {/* Badge 2: Full Stack (Top Right) */}
              <motion.div
                className="hidden md:flex absolute top-4 -right-6 lg:-right-12 z-20 items-center gap-2.5 rounded-2xl border border-cyan-500/30 bg-base-100/90 px-3.5 py-2 shadow-xl backdrop-blur-xl"
                animate={{
                  y: [0, 10, 0, -8, 0],
                  x: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <FaReact className="text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-base-content">Full Stack Dev</div>
                  <div className="text-[10px] font-semibold text-cyan-400">React & Next.js</div>
                </div>
              </motion.div>

              {/* Badge 3: Backend & DB (Bottom Left) */}
              <motion.div
                className="hidden md:flex absolute -bottom-4 -left-4 lg:-left-10 z-20 items-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-base-100/90 px-3.5 py-2 shadow-xl backdrop-blur-xl"
                animate={{
                  y: [0, -8, 0, 10, 0],
                  x: [0, 8, 0, -4, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FaNodeJs className="text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-base-content">Backend & APIs</div>
                  <div className="text-[10px] font-semibold text-emerald-400">Node • MongoDB</div>
                </div>
              </motion.div>

              {/* Badge 4: Algorithms & C++ (Bottom Right) */}
              <motion.div
                className="hidden md:flex absolute -bottom-6 -right-4 lg:-right-8 z-20 items-center gap-2.5 rounded-2xl border border-indigo-500/30 bg-base-100/90 px-3.5 py-2 shadow-xl backdrop-blur-xl"
                animate={{
                  y: [0, 9, 0, -9, 0],
                  x: [0, -7, 0, 7, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <SiCplusplus className="text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-base-content">Algorithms</div>
                  <div className="text-[10px] font-semibold text-indigo-400">C++ • Graphs & DP</div>
                </div>
              </motion.div>
            </div>

            {/* ── Mobile Stacks Grid: Neat 2x2 cards below photo for mobile screens (< md) ── */}
            <div className="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
              <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-base-100/90 p-3 shadow-md backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <SiCodeforces className="text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-base-content">Codeforces Pupil</div>
                  <div className="text-[11px] font-medium text-amber-400">Max Rating: 1375 • AUST</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-base-100/90 p-3 shadow-md backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <FaReact className="text-xl" />
                </div>
                <div>
                  <div className="text-xs font-bold text-base-content">Full Stack Dev</div>
                  <div className="text-[11px] font-medium text-cyan-400">React & Next.js</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-base-100/90 p-3 shadow-md backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FaNodeJs className="text-xl" />
                </div>
                <div>
                  <div className="text-xs font-bold text-base-content">Backend & APIs</div>
                  <div className="text-[11px] font-medium text-emerald-400">Node • MongoDB</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-indigo-500/30 bg-base-100/90 p-3 shadow-md backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <SiCplusplus className="text-xl" />
                </div>
                <div>
                  <div className="text-xs font-bold text-base-content">Algorithms</div>
                  <div className="text-[11px] font-medium text-indigo-400">C++ • Graphs & DP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
