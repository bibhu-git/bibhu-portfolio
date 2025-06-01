import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-20 backdrop-blur-md shadow-[0_0_20px_rgba(114,161,222,0.3)] text-gray-300 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base">
            ©️2025 Bibhu. Made with <span className="text-red-400">❤️</span> using React.
          </h3>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          
          <a
            href="https://github.com/bibhu-git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bibhu-ranjan-mohanty/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
