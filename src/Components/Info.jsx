import React from 'react'
import {Link} from 'react-scroll';

const Info = () => {
  return (
    <div id='about'>
       <section className="info-section max-w-[80vw] mx-auto my-24 flex flex-col items-center text-gray-300">
        <h2 className="text-4xl font-extrabold mb-10" data-aos="fade-up">
          Hello, There <span>👋</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full" data-aos="fade-up">
          {/* Card 1 */}
          <div className="card px-6 relative bg-[#080020b7] border border-gray-700 rounded-2xl overflow-hidden text-left h-75">
            <img
              src="images/grid1.png"
              alt="grid-1"
              className="w-4/5 h-1/3 md:h-1/2 mb-4 object-cover mix-blend-lighten rounded-lg m-5 relative"
            />
            <h3 className="text-xl font-semibold my-3">
              Hi there, I'm Bibhu
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              I'm a full-stack web developer skilled in the MERN stack, passionate about building responsive and feature-rich web applications.
            </p>
            
          </div>
          {/* Card 2 */}
          <div className="card relative bg-[#080020b7] border border-gray-700 rounded-2xl overflow-hidden text-left h-75">
            <h3 className="absolute bottom-1/3 left-5 text-xl font-semibold">Tech Stack</h3>
            <p className="absolute bottom-4 left-5 text-sm text-gray-400 max-w-xs">
              I specialize in a variety of languages, frameworks, and tools that allow me
              to build robust and scalable applications.
            </p>
            <img
              src="images/grid2.png"
              alt="grid-2"
              className="w-4/5 h-1/2 object-cover mix-blend-lighten rounded-lg m-5 relative"
            />
          </div>

          {/* Card 3 - Larger */}
          <div className="card col-span-1 md:row-span-2 relative bg-[#080020b7] border border-gray-700 rounded-2xl overflow-hidden text-left h-[85vh]">
            <h3 className="absolute bottom-[21%] left-5 text-xl font-semibold max-w-md">
              I’m very flexible with time zone communications & locations
            </h3>
            <p className="absolute bottom-[12%] left-5 text-sm text-gray-400 max-w-sm">
              I'm based in India, Odisha and open to remote work worldwide.
            </p>
      
            <img src="images/globe.png" alt="globe image" className="w-[95%] h-[60%] object-cover mix-blend-lighten rounded-lg mb-5" />
            <Link to='contact'  smooth={true} duration={500} className="absolute bottom-4 left-5 py-2 px-6 border border-gray-600 bg-[#0f1217] text-gray-400 rounded-2xl shadow-md hover:shadow-lg hover:opacity-70 transition-flex items-center gap-2 cursor-pointer">
              <i className="bx bx-send"></i> Contact Me
            </Link>
          </div>

          {/* Card 4 - Widespan */}
          <div className="card col-span-1 md:col-span-2 relative bg-[#080020b7] border border-gray-700 rounded-2xl overflow-hidden text-left h-80 md:h-70">
            <h3 className="absolute bottom-[38%] md:bottom-[35%] left-5 text-xl font-semibold max-w-xl">
              My Passion for Coding
            </h3>
            <p className="absolute bottom-4 left-5 text-sm text-gray-400 max-w-xl">
              I love solving problems and building things through code. Programming isn't
              just my profession—it’s my passion. I enjoy exploring new technologies, and
              enhancing my skills.
            </p>
            <img
              src="images/grid4.png"
              alt="grid-4"
              className="w-4/5 h-1/2 object-cover mix-blend-lighten rounded-lg m-5 relative"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Info
