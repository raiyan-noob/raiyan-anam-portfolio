"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { FaFont, FaCheck, FaDownload, FaPalette } from "react-icons/fa";
import { navLinks, personalInfo } from "@/data/portfolioData";

const fontOptions = [
  {
    id: "jakarta",
    name: "Plus Jakarta",
    category: "Modern & Sleek",
    color: "from-indigo-500 to-purple-500",
    themeName: "Electric Violet",
  },
  {
    id: "outfit",
    name: "Outfit",
    category: "Minimal & Clean",
    color: "from-emerald-400 to-cyan-500",
    themeName: "Emerald Mint",
  },
  {
    id: "space",
    name: "Space Grotesk",
    category: "Tech & Cyber",
    color: "from-cyan-400 to-blue-600",
    themeName: "Cyber Blue",
  },
  {
    id: "mono",
    name: "JetBrains Mono",
    category: "Developer & Hacker",
    color: "from-amber-400 to-emerald-500",
    themeName: "Matrix Amber",
  },
  {
    id: "inter",
    name: "Inter",
    category: "Classic Neutral",
    color: "from-rose-500 to-violet-500",
    themeName: "Rose Violet",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [theme, setTheme] = useState("night");
  const [currentFont, setCurrentFont] = useState("jakarta");
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
  const fontRef = useRef(null);

  /* ── Initialize theme and font from localStorage ── */
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "night";
    const savedFont = localStorage.getItem("portfolio-font") || "jakarta";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);
    setCurrentFont(savedFont);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.setAttribute("data-font", savedFont);
  }, []);

  /* ── Close font dropdown on outside click ── */
  useEffect(() => {
    function handleClickOutside(e) {
      if (fontRef.current && !fontRef.current.contains(e.target)) {
        setFontDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Theme toggle ── */
  const toggleTheme = () => {
    const newTheme = theme === "night" ? "light" : "night";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  /* ── Font & Accent Palette switch ── */
  const handleFontSelect = (fontId) => {
    setCurrentFont(fontId);
    document.documentElement.setAttribute("data-font", fontId);
    localStorage.setItem("portfolio-font", fontId);
    setFontDropdownOpen(false);
  };

  /* ── Scroll spy ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    const sections = navLinks.map((link) => link.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          className={`mx-auto flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            scrolled
              ? "bg-base-100/85 shadow-2xl shadow-indigo-950/15 backdrop-blur-xl border border-white/10 dark:border-white/10"
              : "bg-base-100/60 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* ── Brand Logo ── */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 font-bold text-white shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105">
              RA
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight gradient-text">
                {personalInfo.name}
              </span>
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-base-content/60 font-semibold">
                @{personalInfo.githubHandle}
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation Links ── */}
          <div className="hidden xl:flex items-center gap-1 rounded-full bg-base-200/50 p-1 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-base-content/70 hover:text-base-content hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-sm shadow-indigo-500/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* ── Right Action Controls (Font Switcher + Theme Switcher + CTA) ── */}
          <div className="flex items-center gap-2">
            {/* Font & Color Theme Switcher Dropdown */}
            <div className="relative" ref={fontRef}>
              <button
                onClick={() => setFontDropdownOpen(!fontDropdownOpen)}
                title="Change Font & Color Palette"
                aria-label="Change Font & Color Theme"
                className="flex h-9 items-center gap-1.5 rounded-xl border border-white/10 bg-base-200/60 px-2.5 text-xs font-medium text-base-content/80 transition-colors hover:border-indigo-500/50 hover:bg-base-200 hover:text-base-content"
              >
                <FaPalette className="text-indigo-400 text-xs" />
                <span className="hidden sm:inline capitalize">
                  {fontOptions.find((f) => f.id === currentFont)?.name.split(" ")[0]}
                </span>
              </button>

              <AnimatePresence>
                {fontDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-64 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-white/15 bg-base-100 p-2 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-base-content/50 border-b border-white/5 mb-1 flex items-center justify-between">
                      <span>Typography & Theme</span>
                      <span className="text-[10px] text-indigo-400">Live Sync</span>
                    </div>
                    {fontOptions.map((font) => (
                      <button
                        key={font.id}
                        onClick={() => handleFontSelect(font.id)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors ${
                          currentFont === font.id
                            ? "bg-indigo-600/15 text-indigo-400 font-bold"
                            : "text-base-content/80 hover:bg-base-200 hover:text-base-content"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`h-3.5 w-3.5 rounded-full bg-gradient-to-br ${font.color} shadow-sm shrink-0`}
                          />
                          <div>
                            <div className="font-semibold">{font.name}</div>
                            <div className="text-[10px] text-base-content/50">
                              {font.category} • {font.themeName}
                            </div>
                          </div>
                        </div>
                        {currentFont === font.id && <FaCheck className="text-xs text-indigo-400 shrink-0" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={toggleTheme}
              title={theme === "night" ? "Dark Mode (click for Light)" : "Light Mode (click for Dark)"}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-base-200/60 text-base-content/80 transition-all hover:border-indigo-500/50 hover:bg-base-200 hover:text-indigo-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Fixed: When theme is night (dark mode), show Moon icon! When theme is light, show Sun icon! */}
                  {theme === "night" ? (
                    <HiMoon className="text-lg text-indigo-400" />
                  ) : (
                    <HiSun className="text-lg text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Resume button (desktop) */}
            <a
              href={personalInfo.resumeLink}
              download
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-500/25 transition-transform hover:scale-105 hover:shadow-indigo-500/40"
            >
              <FaDownload className="text-[11px]" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-base-200/60 text-base-content xl:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-base-100/95 p-5 shadow-2xl backdrop-blur-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-400 border border-indigo-500/30"
                        : "text-base-content/80 hover:bg-base-200 hover:text-base-content"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 mt-2">
                <a
                  href={personalInfo.resumeLink}
                  download
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/30"
                >
                  <FaDownload className="text-xs" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
