import React from 'react'
import ImageSlider from './ImageSlider'

const Skill = () => {
  return (
    <div id='skills' className="relative">
      <section className="skills-section flex flex-col mt-40 items-center max-w-[90vw] mx-auto px-4">
        <h2
          className="text-4xl font-extrabold mb-5 text-gray-300 text-center"
          data-aos="fade-up"
        >
          My Skills 💪
        </h2>

        <div
          className="skills-box flex flex-col md:flex-row justify-center items-center md:items-start relative w-full min-h-[90vh] mix-blend-lighten gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image Section */}
          <img
            src="images/digital brain (2).png"
            alt="skills"
            className="skills-image w-full md:w-[70%]  md:mx-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          />

          {/* Designer box - Mobile: static, Desktop: absolute */}
          <div
            className="Designer text-gray-300 md:absolute md:top-1/4 md:left-5 max-w-xs flex flex-col items-start"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h3 className="text-3xl md:text-3xl flex items-center text-blue-400 mb-2">
              {/* Designer <i className="bx bx-laptop ml-3 text-2xl md:text-4xl"></i> */}
              Web Developer 🌐
            </h3>
            <p className="leading-tight text-sm md:text-base">
              Skilled in crafting interactive and high-performance web applications using React, Node.js, and modern frameworks.
            </p>
          </div>

          {/* Coder box - Mobile: static, Desktop: absolute */}
          <div
            className="coder text-gray-300 md:absolute md:top-1/4 md:right-5 max-w-xs flex flex-col items-start"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h3 className="text-3xl md:text-3xl flex items-center text-blue-400 mb-2">
              {/* Coder <i className="bx bx-code-block ml-3 text-2xl md:text-4xl"></i> */}
              Software Engineer 🚀
            </h3>
            <p className="leading-tight text-sm md:text-base">
              Passionate about writing clean, maintainable code and building full-stack projects that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <ImageSlider />
    </div>
  )
}

export default Skill
