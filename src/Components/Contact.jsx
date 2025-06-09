import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div id='contact'>
      <section className="contact-section flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-4/5 min-h-screen relative mx-auto mt-10 md:mt-48">
        <h2
          className="section-title absolute top-0 md:top-10 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-extrabold text-gray-300"
          data-aos="fade-down"
        >
          Let's talk 😊
        </h2>
s
        <div
          className="social-box flex flex-col gap-6 mt-5 text-gray-300"
          data-aos="fade-right"
        >
          <div className="flex items-center gap-3 text-xl hover:text-purple-400 transition">
            <i className="bx bxs-phone text-purple-500 text-2xl" /> +91 6371535576
          </div>
          <a href="https://github.com/bibhu-git" className="flex items-center gap-3 text-xl hover:text-purple-400 transition">
            <i className="bx bxl-github text-purple-500 text-2xl" /> github.com/bibhu-git
          </a>
          <a href="https://www.linkedin.com/in/bibhu-ranjan-mohanty/" className="flex items-center gap-3 text-xl hover:text-purple-400 transition">
            <i className="bx bxl-linkedin-square text-purple-500 text-2xl" /> linkedin.com/bibhu-ranjan-mohanty
          </a>

          <div className="social-icons flex mt-5 md:mt-10 gap-6 text-white text-3xl">
            <a href="#"><i className="bx bxl-instagram hover:text-red-500" /></a>
            <a href="#"><i className="bx bxl-twitter hover:text-blue-400" /></a>
            <a href="#"><i className="bx bxl-facebook-circle hover:text-blue-600" /></a>
          </div>
        </div>

        <form
          className="contact-box mt-24 flex flex-col max-w-lg w-full text-gray-300"
          action="https://formsubmit.co/c24ff8e1c407698e36bc70fdb55d43d0"
          method="POST"
          encType="multipart/form-data"
          data-aos="fade-left"
        >
          <p className="mb-2 text-sm text-gray-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <label htmlFor="fullname" className="mt-3">Full Name</label>
          <input
            id="fullname"
            name="Full Name"
            placeholder="Your full name"
            type="text"
            className="p-2 w-full rounded-md border-none outline-none bg-gray-300 text-black mb-4"
            required
          />

          <label htmlFor="email" className="mt-3">Email Address</label>
          <input
            id="email"
            name="Email"
            placeholder="Your Email"
            type="email"
            className="p-2 w-full rounded-md border-none outline-none bg-gray-300 text-black mb-4"
            required
          />

          <label htmlFor="message" className="mt-3">Your Message</label>
          <textarea
            id="message"
            name="Message"
            placeholder="Share your thoughts..."
            rows="4"
            className="p-2 w-full rounded-md border-none outline-none bg-gray-300 text-black mb-4"
            required
          />

          <button
            type="submit"
            className="text-white py-3 px-8 rounded-lg border border-purple-400 bg-purple-600 shadow-md cursor-pointer transition duration-300 hover:opacity-90 hover:shadow-lg"
          >
            Send Message <i className="bx bx-mail-send ml-2" />
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
