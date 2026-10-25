"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from "react-icons/fa";
import { personalInfo } from "@/data/portfolioData";

/* ── Animation variants ──────────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ── Contact info card data ──────────────────────────────── */
const contactCards = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone?.replace(/\s/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: personalInfo.whatsapp,
    href: `https://wa.me/${personalInfo.whatsapp?.replace(/[\s+\-]/g, "")}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

/* ── Contact info card component ─────────────────────────── */
const ContactCard = ({ icon: Icon, label, value, href }) => {
  const content = (
    <div className="glass-card flex items-center gap-4 rounded-xl p-4 transition-transform duration-300 hover:scale-[1.03]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
        <Icon className="text-lg text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-base-content/60">{label}</p>
        <p className="truncate font-medium text-base-content">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

/* ── Main Contact component ──────────────────────────────── */
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/anamraiyan@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `[Portfolio] ${form.subject || "New Message"} - from ${form.name}`,
          message: form.message,
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if (res.ok || data.success === "true" || data.success === true) {
        setStatus("success");
        setStatusMessage("Your message has been sent successfully to anamraiyan@gmail.com!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Could not send automatically. Click below to send directly using your email app:");
    }
  };

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* ── Section heading ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="section-title mx-auto inline-block text-3xl font-bold sm:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-base-content/60">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        {/* ── Two-column layout ───────────────────────────── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {/* ── Left: Contact info cards ──────────────────── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h3 className="mb-2 text-xl font-semibold text-base-content">
              Contact Information
            </h3>
            <p className="mb-4 text-sm text-base-content/60">
              Feel free to reach out through any of the following channels.
            </p>

            {contactCards.map((card) => (
              <motion.div
                key={card.label}
                variants={itemVariants}
              >
                <ContactCard {...card} />
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right: Contact form ───────────────────────── */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="glass-card flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-base-content">
                Send a Message
              </h3>

              {/* Name */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-base-content/70">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                />
              </label>

              {/* Email */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-base-content/70">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                />
              </label>

              {/* Subject */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-base-content/70">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                />
              </label>

              {/* Message */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-base-content/70">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="textarea textarea-bordered w-full resize-none bg-base-200/50 focus:border-primary focus:outline-none"
                />
              </label>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400 text-sm">
                  <FaCheckCircle className="mt-0.5 text-base shrink-0" />
                  <div>
                    <p className="font-semibold">{statusMessage}</p>
                    <p className="text-xs text-emerald-400/80 mt-1">
                      Raiyan has received your message and will reply shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex flex-col gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-400 text-sm">
                  <div className="flex items-start gap-2">
                    <FaExclamationCircle className="mt-0.5 text-base shrink-0" />
                    <p className="font-semibold">{statusMessage}</p>
                  </div>
                  <a
                    href={`mailto:anamraiyan@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-500 transition-colors w-full sm:w-auto self-start mt-1"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Open in Email App</span>
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn mt-2 w-full border-none bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <FaSpinner className="mr-2 animate-spin text-sm" />
                    <span>Sending to anamraiyan@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
