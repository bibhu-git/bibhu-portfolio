import React from "react";

export default function Info() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center text-slate-100 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* --- Base gradient layer --- */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* --- Two soft radial lights (subtle) --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -left-20 top-10 w-72 h-72 bg-cyan-500/12 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-600/12 blur-[140px] rounded-full animate-pulse-slow" />
      </div>

      {/* --- Optional subtle texture overlay (use /textures/noise.svg or remove if not present) --- */}
      <div className="absolute inset-0 -z-9 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/textures/noise.svg')] opacity-8 mix-blend-soft-light" />
      </div>

      {/* --- Page content (z-index above backgrounds) --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          data-aos="fade-up"
          id="about-title"
        >
          Get to Know Me <span className="text-cyan-400">✨</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT — About Me */}
          <div data-aos="fade-right" className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              I’m{" "}
              <span className="text-cyan-400 font-semibold">
                Bibhu Ranjan Mohanty
              </span>
              , a passionate developer from{" "}
              <span className="text-indigo-400">Odisha, India</span>. My journey
              into tech began with curiosity about how the web works — that
              curiosity turned into a love for crafting interactive, user-first
              experiences.
            </p>

            <p className="text-slate-400 text-base md:text-lg">
              I focus on writing clean, efficient code and creating delightful
              interfaces. Collaboration, empathy, and continuous learning are
              values I practice daily.
            </p>

            {/* Traits */}
            <ul className="mt-6 grid grid-cols-2 gap-3 text-slate-300 text-sm md:text-base">
              {[
                "🚀 Quick Learner",
                "🤝 Team Player",
                "💡 Problem Solver",
                "🎨 Design Enthusiast",
                "🧠 Logical Thinker",
                "📚 Lifelong Learner",
              ].map((trait) => (
                <li key={trait} className="hover:text-cyan-400 transition">
                  {trait}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Fun Facts / Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl glass-card p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity bg-gradient-to-tr from-cyan-500/6 to-indigo-500/6" />
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Current Focus 🎯</h3>
              <p className="text-sm text-slate-300">
                Strengthening my <b>MERN + TypeScript</b> skills and preparing
                for <b>frontend/full-stack internships</b> at product-focused
                teams.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl glass-card p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity bg-gradient-to-tr from-indigo-500/6 to-cyan-500/6" />
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Beyond Coding 🌱</h3>
              <p className="text-sm text-slate-300">
                I enjoy reading self-improvement books like <i>Atomic Habits</i>, exploring tech trends, and improving my English communication skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl glass-card p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity bg-gradient-to-tr from-cyan-500/6 to-violet-500/6" />
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Fun Fact 😄</h3>
              <p className="text-sm text-slate-300">
                I once built a mini food-delivery app in a weekend to test Stripe
                payments and real-time order updates — it taught me a lot about
                shipping fast, pragmatic features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
