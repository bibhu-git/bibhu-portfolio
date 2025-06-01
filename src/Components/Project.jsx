import React from "react";

const Project = () => {
  
  return (
    <div id="projects">
      <section className="my-project max-w-[80vw] mx-auto flex flex-col items-center gap-24 min-h-[100vh]">
        <h2
          className="text-4xl font-extrabold text-gray-300"
          data-aos="fade-up"
        >
          My Projects 👨‍💻
        </h2>

        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className="project-card flex flex-col md:flex-row items-center gap-10 w-full h-[40%] justify-center"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {/* Video Section */}
            <div
              className="flex justify-center items-center w-full md:w-1/2 relative cursor-pointer  min-w-[320px]"
            >
              <img
               src={`images/project${idx + 1}.png`}
               alt={`Project ${idx + 1}`}
               className="object-cover w-full rounded-xl shadow-lg transition-shadow duration-500"
                />
          
              <div
                className="hover-sign absolute flex items-center justify-center w-1/3 h-[100px] top-0 left-0 text-[3em] opacity-100 z-10"
              ></div>
            </div>

            {/* Info Section */}
            <div
              className="project-info flex flex-col justify-center md:w-1/2 w-full px-1 md:px-5 text-left"
              data-aos="fade-left"
              data-aos-delay={idx * 200 + 100}
            >
              <div>
                {idx === 0 && (
                  <>
                    <h3 className="text-xl font-extrabold text-gray-300 mb-2">🧾 Canteen Management System</h3>
                    <p className="text-gray-400 max-w-md mb-6">A full-stack web application built with the MERN stack to simplify college canteen operations. Includes meal attendance tracking, payment verification, meal on/off requests, and an admin dashboard with role-based access.</p>
                  </>
                  
                )}
                {idx === 1 && (
                  <>
                    <h3 className="text-xl font-extrabold text-gray-300 mb-2">🤖 AI Chatbot</h3>
                    <p className="text-gray-400 max-w-md mb-6">An intelligent chatbot project powered by OpenAI's API and built with the MERN stack. Handles user queries with natural responses, integrates secure backend API key handling, and features a sleek, conversational UI.</p>
                  </>
                )}
                {idx === 2 && (
                  <>
                    <h3 className="text-xl font-extrabold text-gray-300 mb-2">💬 Real-time Chat App</h3>
                    <p className="text-gray-400 max-w-md mb-6">A responsive and real-time chat application using Socket.IO and the MERN stack. Supports instant messaging, online user tracking, and a clean, modern chat interface for smooth communication.</p>
                  </>
                )}
              </div>
              <button className="text-white py-2 px-6 rounded-lg border border-blue-400 bg-[#2200493d] shadow-md cursor-pointer transition duration-300 hover:opacity-80 hover:shadow-lg">
                <i className="bx bx-link-external mr-2"></i> Visit Website
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
