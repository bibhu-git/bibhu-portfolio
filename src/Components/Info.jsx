import React from "react";

export default function Info() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden flex items-center"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-32 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Get to Know Me <span className="text-cyan-400">✨</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT — About Me */}
          <div data-aos="fade-right">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              I’m{" "}
              <span className="text-cyan-400 font-semibold">
                Bibhu Ranjan Mohanty
              </span>
              , a passionate developer from{" "}
              <span className="text-indigo-400">Odisha, India</span>.
              My journey into tech began with curiosity about how things work on the web —
              and evolved into a love for crafting interactive, user-friendly digital experiences.
            </p>

            <p className="mt-4 text-slate-400 text-base md:text-lg">
              I focus on writing clean, efficient code and creating delightful interfaces.
              Collaboration, adaptability, and continuous learning are values I live by.
            </p>

            {/* Traits */}
            <ul className="mt-8 grid grid-cols-2 gap-4 text-slate-300 text-sm md:text-base">
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
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-aos="fade-left"
          >
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700/60 p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                Current Focus 🎯
              </h3>
              <p className="text-sm text-slate-300">
                Strengthening my <b>MERN + TypeScript</b> skills and
                preparing for <b>frontend/full-stack internships</b>
                at innovative companies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700/60 p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                Beyond Coding 🌱
              </h3>
              <p className="text-sm text-slate-300">
                I love reading <b>self-improvement books</b> like
                <i> Atomic Habits</i>, exploring <b>tech trends</b>,
                and improving my <b>English communication</b>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700/60 p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                Fun Fact 😄
              </h3>
              <p className="text-sm text-slate-300">
                I once built a mini food-delivery app in a weekend
                just to test out Stripe payments and real-time order updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
