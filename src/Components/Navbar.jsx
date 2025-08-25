import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="shadow-lg bg-black/30 backdrop-blur-md border-b border-gray-700 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div data-aos="fade-down">
            {/* <span className="text-white font-bold text-2xl">&lt;Bibhu /&gt;</span> */}
            <img className="w-20" src="/logo.png" alt="" />
          </div>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center space-x-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                to={link.name.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-200 font-semibold hover:text-indigo-400 transition cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            {/* Resume Download Button */}
            <a
              href="/resume_Bibhu.pdf"
              download="Resume_Bibhu.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              <FaDownload /> Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden" data-aos="fade-right" data-aos-delay="300">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`md:hidden bg-black/30 backdrop-blur-md shadow-md overflow-hidden transition-[max-height] duration-300 ease-in-out ${menuOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="px-5 pt-2 pb-4 space-y-3 flex flex-col items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-200 text-lg hover:text-indigo-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Resume Download in Mobile Menu */}
          <a
            href="/resume_Bibhu.pdf"
            download="Resume_Bibhu.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
