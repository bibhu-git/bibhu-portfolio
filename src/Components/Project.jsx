// Project.jsx — improved modal/backdrop/focus + defensive checks
import React, { useEffect, useState, useCallback, useRef } from "react";

const FALLBACK = "/images/placeholder.png";

/* ---------- Utilities ---------- */
function ImgWithFallback({ src, alt, className }) {
  const handleError = (e) => {
    if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK;
  };
  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

/* ---------- Modal + Carousel ---------- */
function ProjectModal({ open, project, onClose }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement;
      // lock scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus modal
      setTimeout(() => dialogRef.current?.focus(), 0);
      return () => {
        document.body.style.overflow = prev;
        // restore focus
        try {
          lastFocusedRef.current?.focus?.();
        } catch (e) { }
      };
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setIndex(0);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") {
        const imgs = (project?.images && project.images.length) ? project.images : [project?.img].filter(Boolean);
        setIndex((i) => Math.min(imgs.length - 1, i + 1));
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, project, onClose]);

  if (!open || !project) return null;

  const imgs = (project.images && project.images.length) ? project.images : (project.img ? [project.img] : [FALLBACK]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(imgs.length - 1, i + 1));

  const onOverlayClick = (e) => {
    // close only when clicking the backdrop
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title || "Project preview"}
      onClick={onOverlayClick}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="max-w-4xl w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden outline-none"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
          <div className="flex items-center gap-2">
            {project.live && (
              <a href={project.live} rel="noreferrer" target="_blank" className="text-xs px-3 py-1 rounded bg-cyan-400 text-slate-900 font-semibold">
                Live
              </a>
            )}
            {project.repo && (
              <a href={project.repo} rel="noreferrer" target="_blank" className="text-xs px-3 py-1 rounded border border-slate-700 text-slate-200">
                Code
              </a>
            )}
            <button onClick={onClose} aria-label="Close preview" className="text-slate-300 hover:text-white p-2 rounded">
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <ImgWithFallback
                src={imgs[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-72 md:h-[460px] object-cover rounded-lg"
              />
              {/* left / right arrows */}
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
                disabled={index === 0}
              >
                ‹
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
                disabled={index === imgs.length - 1}
              >
                ›
              </button>
            </div>

            {imgs.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto" role="group" aria-label="Thumbnails">
                {imgs.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-20 h-12 rounded overflow-hidden border ${i === index ? "border-cyan-400" : "border-slate-700"}`}
                    aria-pressed={i === index}
                  >
                    <ImgWithFallback src={s} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <p className="text-slate-300 mb-4">{project.longDescription || project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4" aria-hidden>
              {(project.tags || []).map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-800/60 text-slate-200">{t}</span>
              ))}
            </div>

            <div className="mt-4">
              <a href={project.repo || "#"} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 mr-2 rounded border border-slate-700 text-slate-200 hover:bg-slate-800/50">
                View Code
              </a>
              {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded bg-cyan-400 text-slate-900 font-semibold">Visit Live</a>}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-700 text-right">
          <button className="px-4 py-2 rounded bg-slate-800 text-slate-200" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Projects Data (edit as needed) ---------- */
const PROJECTS = [
  {
    id: 1,
    title: "Canteen Management System",
    category: "Web",
    description: "MERN app to manage college canteen — attendance, payments, admin dashboard.",
    longDescription: "Full Canteen Management System with student attendance, meal toggles, payment verification, and admin features. Built using React, Node, Express, and MongoDB.",
    img: "/images/project1.png",
    images: ["/images/project1.png", "/images/project1-1.png"],
    live: "#",
    repo: "#",
    tags: ["React", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "AI Chatbot",
    category: "AI",
    description: "Conversational AI UI with OpenAI integration and secure backend.",
    longDescription: "AI-powered chatbot built with MERN and OpenAI; includes conversation history, secure API handling and clean UI.",
    img: "/images/project2.png",
    images: ["/images/project2.png"],
    live: "#",
    repo: "#",
    tags: ["OpenAI", "React"],
  },
  {
    id: 3,
    title: "Real-time Chat App",
    category: "Realtime",
    description: "Socket.IO powered realtime messaging app with rooms & presence.",
    longDescription: "Real-time app using Socket.IO, Node and MongoDB. Features online presence, private rooms, and message delivery statuses.",
    img: "/images/project3.png",
    images: ["/images/project3.png"],
    live: "#",
    repo: "#",
    tags: ["Socket.IO", "React"],
  },
  {
    id: 4,
    title: "Food Delivery UI",
    category: "Web",
    description: "Modern food ordering UI with cart & payment flows.",
    img: "/images/project4.png",
    images: ["/images/project4.png"],
    live: "#",
    repo: "#",
    tags: ["React", "Stripe"],
  },
];

/* ---------- Main Component ---------- */
export default function Project() {
  const [filter, setFilter] = useState("All");
  const [filtered, setFiltered] = useState(PROJECTS);
  const [activeProject, setActiveProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  useEffect(() => {
    if (filter === "All") setFiltered(PROJECTS);
    else setFiltered(PROJECTS.filter((p) => p.category === filter));
  }, [filter]);

  const openModal = useCallback((p) => {
    setActiveProject(p);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    // give modal time to close visually; then clear activeProject
    setTimeout(() => setActiveProject(null), 250);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Projects <span className="ml-2">🚀</span></h2>

          <div className="flex items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-sm px-3 py-1 rounded-full font-medium ${filter === c ? "bg-cyan-400 text-slate-900" : "bg-slate-800/40 text-slate-200 border border-slate-700"}`}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-slate-400 py-12">
              No projects match this filter yet.
            </div>
          )}

          {filtered.map((p) => (
            <article key={p.id} className="group relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
              {/* image */}
              <div className="relative">
                <ImgWithFallback src={p.img} alt={`${p.title} screenshot`} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />

                {/* translucent glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* top-left tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-black/50 text-slate-100">{p.category}</span>
                </div>

                {/* bottom overlay actions */}
                <div className="absolute left-0 right-0 bottom-3 px-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a href={p.live || "#"} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded bg-cyan-400 text-slate-900 font-semibold">Live</a>
                    <a href={p.repo || "#"} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded border border-slate-700 text-slate-200">Code</a>
                  </div>

                  <button onClick={() => openModal(p)} className="text-xs px-3 py-1 rounded bg-white/10 text-slate-100 border border-slate-700">Preview</button>
                </div>
              </div>

              {/* card body */}
              <div className="p-4 bg-gradient-to-b from-slate-900/60 to-slate-900">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {(p.tags || []).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800/60">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* load more / footer CTA (optional) */}
        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full text-slate-100 shadow">Want to see more? Let's talk</a>
        </div>
      </div>

      {/* modal */}
      <ProjectModal open={modalOpen} project={activeProject} onClose={closeModal} />
    </section>
  );
}
