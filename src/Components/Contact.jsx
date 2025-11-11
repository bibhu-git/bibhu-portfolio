import React, { useEffect, useRef, useState } from "react";
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

const FORM_ENDPOINT =
  "https://formsubmit.co/c24ff8e1c407698e36bc70fdb55d43d0";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMessage("");
    const form = formRef.current;
    if (!form) return;

    const name = form["fullname"]?.value?.trim();
    const email = form["email"]?.value?.trim();
    const message = form["message"]?.value?.trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill all required fields before sending.");
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("fullname", name);
      fd.append("email", email);
      fd.append("message", message);
      fd.append("_subject", `New message from ${name} (Portfolio)`);

      const resp = await fetch(FORM_ENDPOINT, { method: "POST", body: fd });
      if (resp.ok) {
        setStatus("success");
        form.reset();
        if (submitButtonRef.current) submitButtonRef.current.blur();
      } else {
        setErrorMessage("Failed to send message. Please try again later.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error — please check your connection.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          data-aos="fade-down"
        >
          Let's talk <span className="ml-2">😊</span>
        </h2>

        {/* FLEX CONTAINER for equal height */}
        <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
          {/* LEFT BOX */}
          <aside
            className="flex-1 flex flex-col justify-between bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">Get in touch</h3>
              <p className="text-slate-300 mb-6">
                Whether you want to build a project, collaborate, or just say
                hi — I'm open to opportunities.
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
                    href="mailto:your.email@example.com"
                    className="hover:text-white transition"
                  >
                    your.email@example.com
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

          {/* RIGHT BOX */}
          <div
            className="flex-1 flex flex-col justify-between bg-slate-900/50 border border-slate-700 rounded-2xl p-6 shadow-lg"
            data-aos="fade-left"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4">Send a message</h3>

              {status === "success" && (
                <div className="mb-4 rounded-md bg-green-900/60 border border-green-600 p-3 text-green-200">
                  Thanks — your message was sent! I’ll reply soon.
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 rounded-md bg-red-900/60 border border-red-600 p-3 text-red-200">
                  {errorMessage || "Something went wrong. Try again later."}
                </div>
              )}

              <label htmlFor="fullname" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Your full name"
                className="mt-1 p-3 w-full rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />

              <label htmlFor="email" className="text-sm font-medium mt-4">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="mt-1 p-3 w-full rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />

              <label htmlFor="message" className="text-sm font-medium mt-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                className="mt-1 p-3 w-full rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none flex-1"
                required
              />

              <div className="mt-5 flex items-center gap-3">
                <button
                  ref={submitButtonRef}
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 px-5 py-3 bg-purple-600 text-white rounded-lg shadow hover:opacity-95 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          opacity="0.25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope /> Send Message
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (formRef.current) formRef.current.reset();
                    setStatus(null);
                    setErrorMessage("");
                  }}
                  className="px-4 py-3 border border-slate-700 rounded-lg text-slate-200 hover:bg-slate-800/50"
                >
                  Reset
                </button>
              </div>
            </form>

            <div className="mt-6 text-sm text-slate-400">
              <strong>Note:</strong> This form sends an email via{" "}
              <span className="font-medium">formsubmit.co</span>.
              You can also reach me at{" "}
              <a
                href="mailto:your.email@example.com"
                className="underline text-cyan-400"
              >
                your.email@example.com
              </a>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
