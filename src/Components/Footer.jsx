import React from "react";

/**
 * Footer.jsx — simplified, self-contained.
 * - Uses inline SVGs (no react-icons dependency)
 * - No AOS dependency
 * - Clear text + layout so nothing is hidden
 */

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-slate-900 to-slate-800 text-slate-100 py-8 px-6 md:px-12 border-t border-slate-700/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left text */}
        <div>
          <h3 className="text-sm md:text-base tracking-wide">
            © {new Date().getFullYear()} <span className="font-semibold text-cyan-400">Bibhu</span>.
            Made with <span className="text-red-400">❤️</span> using React.
          </h3>
        </div>

        {/* Right — social links */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/bibhu-git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white hover:scale-110 transition-all duration-200"
          >
            {/* GitHub SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.16 9.06 7.55 10.53.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.48-3.72-1.48-.5-1.27-1.23-1.61-1.23-1.61-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.16 1.71 1.16.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.45-.28-5.03-1.23-5.03-5.46 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0112 6.8c.94.004 1.89.13 2.78.38 2.12-1.43 3.05-1.13 3.05-1.13.61 1.54.23 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.24-2.59 5.17-5.05 5.45.4.35.75 1.04.75 2.11 0 1.52-.01 2.75-.01 3.12 0 .29.2.64.76.53 4.38-1.48 7.52-5.64 7.52-10.53C23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/bibhu-ranjan-mohanty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-200"
          >
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.12h.05c.54-1 1.87-2.12 3.85-2.12 4.12 0 4.88 2.7 4.88 6.21V24h-4v-7.37c0-1.76 0-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.91V24h-4V8z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 hover:scale-110 transition-all duration-200"
          >
            {/* Instagram SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 p-3 rounded-full bg-cyan-400 text-slate-900 shadow-md hover:bg-cyan-300 hover:-translate-y-1 transition-all duration-300 focus:outline-none z-[60]"
        aria-label="Back to top"
      >
        {/* Up arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M4.5 15.5L12 8l7.5 7.5 1.5-1.5L12 5 3 14l1.5 1.5z" />
        </svg>
      </button>
    </footer>
  );
}
