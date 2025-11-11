import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          data-aos="fade-down"
        >
          Let's talk <span className="ml-2">😊</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
          {/* LEFT - CONTACT INFO */}
          <aside
            className="flex-1 flex flex-col justify-between bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">Get in touch</h3>
              <p className="text-slate-300 mb-6">
                Whether you want to build a project, collaborate, or just say hi
                — I'm open to opportunities.
              </p>

              <div className="space-y-4 text-slate-200">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-xl text-purple-400" />
                  <a
                    href="tel:+916371535576"
                    className="hover:text-white transition"
                  >
                    +91 6371535576
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl text-purple-400" />
                  <a
                    href="mailto:bibhuranjanmohanty97@gmail.com"
                    className="hover:text-white transition"
                  >
                    bibhuranjanmohanty97@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaGithub className="text-xl text-purple-400" />
                  <a
                    href="https://github.com/bibhu-git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    github.com/bibhu-git
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaLinkedin className="text-xl text-purple-400" />
                  <a
                    href="https://www.linkedin.com/in/bibhu-ranjan-mohanty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    linkedin.com/in/bibhu-ranjan-mohanty
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons + Resume */}
            <div className="mt-8">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 transition"
                >
                  <FaFacebook />
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="/resume_Bibhu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400 text-slate-900 rounded-full font-semibold shadow-sm hover:opacity-95"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT - WORKING FORM */}
          <div
            className="flex-1 flex flex-col justify-between bg-slate-900/50 border border-slate-700 rounded-2xl p-6 shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-4">Send a message</h3>
            <p className="text-slate-400 text-sm mb-4">
              Whether you're looking to build a new website, improve your
              existing platform, or bring a unique project to life — I'm here to
              help.
            </p>

            {/* ✅ Simple HTML form (works perfectly with FormSubmit) */}
            <form
              action="https://formsubmit.co/c24ff8e1c407698e36bc70fdb55d43d0"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="New message from Portfolio Contact Form"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <label htmlFor="fullname" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="fullname"
                name="Full Name"
                type="text"
                placeholder="Your full name"
                className="p-3 rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />

              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="you@company.com"
                className="p-3 rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />

              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                rows="6"
                placeholder="Tell me about your project..."
                className="p-3 rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />

              <button
                type="submit"
                className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:opacity-95 transition"
              >
                Send Message <FaEnvelope />
              </button>
            </form>

            <p className="mt-6 text-sm text-slate-400">
              <strong>Note:</strong> This form sends an email via{" "}
              <span className="font-medium">formsubmit.co</span>. You can also
              reach me at{" "}
              <a
                href="mailto:bibhuranjanmohanty97@gmail.com"
                className="underline text-cyan-400"
              >
                bibhuranjanmohanty97@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
