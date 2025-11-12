import React from "react";

const FALLBACK = "/images/placeholder.png";

const SKILLS = [
  { id: "react", name: "React", pct: 92, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { id: "ts", name: "TypeScript", pct: 86, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { id: "node", name: "Node.js", pct: 85, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { id: "express", name: "Express", pct: 82, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
  { id: "mongo", name: "MongoDB", pct: 80, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { id: "tailwind", name: "Tailwind", pct: 88, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "redux", name: "Redux", pct: 76, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
  { id: "git", name: "Git", pct: 82, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
];

function ImgFallback({ src, alt, className = "" }) {
  const onError = (e) => {
    if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK;
  };
  return <img src={src} alt={alt} onError={onError} className={className} loading="lazy" decoding="async" />;
}

export default function Skill() {
  return (
    <section id="skills" className="relative min-h-[80vh] py-16 md:py-24 overflow-hidden text-slate-100">
      {/* Background layers (same non-hero style) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full blur-[120px] bg-blob-cyan opacity-50 animate-blob-slow -z-10" />
      <div className="absolute right-8 bottom-10 w-80 h-80 rounded-full blur-[100px] bg-blob-indigo opacity-45 animate-blob-slow delay-2000 -z-10" />
      <div className="absolute inset-0 -z-15 bg-[url('/textures/noise.svg')] opacity-4 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Technical Expertise ⚙️</h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl">
            I build frontend-first interfaces and reliable backends. Below are the tools I use most often along with my proficiency levels.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="rounded-2xl glass-card p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">What I focus on</h3>
              <p className="text-sm text-slate-300 mb-4">
                Frontend performance, accessible UI, maintainable code, and pragmatic backend APIs. I deliver features that are reliable and user-friendly.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-100">12+</div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>
                <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-100">2 yrs</div>
                  <div className="text-xs text-slate-400">Experience</div>
                </div>
                <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-100">50+</div>
                  <div className="text-xs text-slate-400">Git PRs</div>
                </div>
                <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-100">MERN</div>
                  <div className="text-xs text-slate-400">Primary Stack</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-600 text-slate-900 rounded-full font-semibold shadow hover:scale-[1.01] transition">
                See Projects
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="rounded-2xl glass-card p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Toolbox</h3>
            <p className="text-sm text-slate-300 mb-4">Primary libraries, frameworks and tools I use day-to-day.</p>

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {SKILLS.map((s) => (
                <button
                  key={s.id}
                  className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-800/30 hover:scale-105 transition transform"
                  aria-label={s.name}
                  title={s.name}
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center p-1">
                    <ImgFallback src={s.icon} alt={s.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xs text-slate-300">{s.name}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Also familiar with: Git, Docker, REST APIs, Redux/Zustand, Stripe.
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl glass-card p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Proficiency</h3>
            <div className="space-y-4">
              {SKILLS.map((s) => (
                <div key={s.id} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-slate-300 font-medium">{s.name}</div>
                  <div className="flex-1">
                    <div className="w-full bg-slate-800/30 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full gradient-bar"
                        style={{ width: `${s.pct}%` }}
                        aria-hidden
                      />
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex justify-between">
                      <span>{s.pct}%</span>
                      <span>{s.pct >= 90 ? "Expert" : s.pct >= 80 ? "Advanced" : "Intermediate"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-slate-400">
              Proficiency numbers are approximate — I focus on shipping features and continuous learning.
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl p-6 bg-slate-800/30 border border-slate-700 shadow-inner flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm text-slate-300 font-semibold">How I work</div>
            <div className="text-xs text-slate-400">Plan → Implement → Review → Deploy → Iterate</div>
          </div>
          <div className="text-right">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full text-slate-100 shadow">Let's collaborate</a>
          </div>
        </div>
      </div>
    </section>
  );
}
