"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { personalInfo, navLinks } from "@/data/portfolioData";

/* ── Social icon config ──────────────────────────────────── */
const socialIcons = [
  { icon: FaGithub, href: personalInfo.socialLinks?.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.socialLinks?.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personalInfo.socialLinks?.twitter, label: "Twitter" },
  { icon: FaFacebookF, href: personalInfo.socialLinks?.facebook, label: "Facebook" },
];

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-base-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ── Three-column layout ─────────────────────────── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* ── Left: Brand ───────────────────────────────── */}
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="gradient-text">Raiyan Anam</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-base-content/60">
              Full Stack Developer crafting modern, performant, and accessible
              web experiences.
            </p>
          </div>

          {/* ── Center: Quick links ───────────────────────── */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-base-content/80">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Social icons ───────────────────────── */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-base-content/80">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-base-content/5 text-base-content/60 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:text-white"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <div className="my-8 h-px bg-base-content/10" />

        {/* ── Copyright ───────────────────────────────────── */}
        <p className="text-center text-sm text-base-content/50">
          © {new Date().getFullYear()} Raiyan Anam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
