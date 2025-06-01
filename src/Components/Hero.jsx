import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      id="home"
      className="px-4 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <section className="relative grid md:grid-cols-2 items-center justify-center min-h-[90vh] pt-16">
        <div data-aos="fade-up" data-aos-duration="1200">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mt-24 md:mt-5  mb-6 tracking-tight">
            Hi, I'm <span className="text-blue-500">Bibhu</span>
            <br />
              Full Stack Developer
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            Passionate about building full-stack web apps that solve real problems with responsive design and sleek, modern UIs.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer"
          >
            <i className="bx bx-send text-xl"></i> Contact Me
          </Link>
        </div>

        <div className="mt-10 invisible md:visible md:mt-0 md:flex md:justify-center md:items-center">
          <div className="bg-[#1e293b] border border-blue-900 rounded-3xl p-6 shadow-xl text-center max-w-sm w-full animate-fade-in">
            <p className="text-xl font-semibold mb-4 text-cyan-400">Tech Toolbox</p>
            <div className="grid grid-cols-3 gap-6">
              <i className="devicon-html5-plain colored text-4xl"></i>
              <i className="devicon-css3-plain colored text-4xl"></i>
              <i className="devicon-javascript-plain colored text-4xl"></i>
              <i className="devicon-react-original colored text-4xl"></i>
              <i className="devicon-nodejs-plain colored text-4xl"></i>
              <i className="devicon-mongodb-plain colored text-4xl"></i>
            </div>
          </div>
        </div>

        <div className="scroll-down absolute left-1/2 bottom-6 -translate-x-1/2 animate-bounce text-cyan-400">
          <i className="bx bx-mouse text-3xl"></i>
        </div>
      </section>
    </div>
  );
};

export default Hero;
