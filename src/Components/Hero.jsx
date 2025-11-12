import React from "react";
import { Link } from "react-scroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* ---------- Animated Gradient Background ---------- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e3a8a_0%,_#0f172a_40%,_#020617_100%)] animate-gradient" />

      {/* ---------- Floating Gradient Overlays ---------- */}
      <div className="absolute top-0 left-0 w-[35rem] h-[35rem] bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow" />

      {/* ---------- Content ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 py-10 md:py-0">

        {/* ---------- Left Section ---------- */}
        <div className="max-w-xl text-center md:text-left" data-aos="fade-right">
          <p className="inline-flex items-center gap-2 text-sm rounded-full bg-indigo-800/30 px-3 py-1 text-indigo-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Open to internships
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I’m <span className="text-cyan-400">Bibhu</span> 👋
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-200">
            A passionate <span className="text-indigo-400">Full Stack Developer</span> who builds elegant, performant web experiences.
          </p>

          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Currently open to <span className="text-cyan-300 font-medium">frontend or full-stack internship opportunities</span>.
            I enjoy building modern apps that solve real-world problems using React, Node.js, and TypeScript.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold rounded-full hover:-translate-y-1 transition-transform shadow-lg"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="px-6 py-3 border border-slate-600 rounded-full text-slate-300 hover:bg-slate-800/60 transition"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-2 text-sm text-slate-300">
            {["React", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Right Section (Lottie Animation) ---------- */}
        <div
          className="relative w-full md:w-[50%] flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <div className="relative  flex justify-center items-center p-6 backdrop-blur-sm">
            <DotLottieReact
              src="https://lottie.host/0177c942-21a7-4b76-be1b-1d7415166880/TAbg9D1Le7.lottie"
              loop
              autoplay
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
                aspectRatio: "1/1",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
