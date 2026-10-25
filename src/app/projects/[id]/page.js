import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRocket,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { projects } from "@/data/portfolioData";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Raiyan Anam Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content antialiased">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-base-100/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:border-indigo-500/50 hover:bg-white/10"
          >
            <FaArrowLeft className="text-xs text-indigo-400" />
            <span>Back to Projects</span>
          </Link>
          <div className="flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                <FaGithub className="text-sm" />
                <span className="hidden sm:inline">Client Repo</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4">
              <FaLaptopCode /> Project Showcase
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-base-content">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-base-content/80">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick Details Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-white/10 py-4 text-sm text-base-content/70">
           
           
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Architecture:</span>
              <span>Full Stack / Client-Side</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Live Status:</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {/* Project Preview Image Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-200/50 p-2 shadow-2xl backdrop-blur-xl">
            <div className="relative h-64 sm:h-96 md:h-[450px] w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Technology Stack Used */}
          <section className="rounded-2xl border border-white/10 bg-base-200/40 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                <FaCode className="text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-base-content sm:text-2xl">
                  Technology Stack
                </h2>
                <p className="text-xs text-base-content/60">Core technologies and libraries used</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Detailed Description */}
          <section className="rounded-2xl border border-white/10 bg-base-200/40 p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-base-content sm:text-2xl mb-4">
              Project Overview
            </h2>
            <div className="prose prose-invert max-w-none text-base leading-relaxed text-base-content/80">
              <p>{project.description}</p>
            </div>

            {/* Quick Links CTA */}
            <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-white/10">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Visit Live Project</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <FaGithub className="text-base" />
                  <span>View GitHub (Client)</span>
                </a>
              )}
            </div>
          </section>

          {/* Challenges Faced */}
          <section className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <FaExclamationTriangle className="text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-base-content sm:text-2xl">
                  Challenges Faced
                </h2>
                <p className="text-xs text-base-content/60">Obstacles encountered during development and how they were solved</p>
              </div>
            </div>
            <div className="space-y-4">
              {project.challenges?.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-white/5 bg-base-100/50 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 font-bold text-xs text-amber-300">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-base-content/85">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Potential Improvements & Future Plans */}
          <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <FaRocket className="text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-base-content sm:text-2xl">
                  Potential Improvements & Future Plans
                </h2>
                <p className="text-xs text-base-content/60">Planned architectural upgrades, features, and roadmaps</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.improvements?.map((improvement, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-base-100/50 p-4"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-emerald-400 text-base" />
                  <p className="text-sm leading-relaxed text-base-content/85">
                    {improvement}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <FaArrowLeft />
              <span>Back to all projects</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-base-content/50">Explore more projects:</span>
              <div className="flex gap-2">
                {projects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className={`px-3 py-1 text-xs rounded-lg border transition-colors ${
                      p.id === project.id
                        ? "border-indigo-500 bg-indigo-500/20 text-white font-bold"
                        : "border-white/10 hover:border-white/30 text-base-content/70"
                    }`}
                  >
                    {p.title.split(" - ")[0]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

