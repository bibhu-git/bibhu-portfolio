// App.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import Loader from "./Components/Loader";


export default function MiladiCodePortfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 900 });

    const handlePageLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 450);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <div
        aria-hidden={loading ? "false" : "true"}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm transition-opacity duration-700 ${loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <Loader />
      </div>

      {/* 3D Background (Always visible behind everything) */}
      {/* <Background3D /> */}

      {/* Main content */}
      <main
        className={`relative min-h-screen transition-opacity duration-700 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"
          } bg-slate-900/60 backdrop-blur-[2px]`}
      >
        <Navbar />
        <Hero />
        <Info />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
