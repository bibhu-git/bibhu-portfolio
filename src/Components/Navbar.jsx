import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { FaEye } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    // close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    // add scroll background toggle
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-slate-700" : "bg-transparent"
        }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3" aria-label="Go to homepage">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              {/* <span className="hidden sm:inline-block text-white font-semibold">Bibhu</span> */}
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-slate-100 hover:text-cyan-400 px-2 py-1 rounded-md cursor-pointer font-medium transition"
                activeClass="text-cyan-400"
                role="link"
                tabIndex={0}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume_Bibhu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-600 text-slate-900 rounded-full font-semibold shadow-sm hover:opacity-95 transform hover:-translate-y-0.5 transition"
              title="View Resume (opens in new tab)"
            >
              <FaEye /> Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle main menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sliding menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-5 pt-4 pb-6 bg-black/60 backdrop-blur-md border-t border-slate-700">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-100 text-lg px-3 py-2 rounded-md hover:bg-slate-800/50 transition cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume_Bibhu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-600 text-slate-900 rounded-full font-semibold shadow-sm"
            >
              <FaEye /> Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
