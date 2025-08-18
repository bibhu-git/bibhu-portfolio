import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ImageSlider from "./Components/ImageSlider";
import './App.css';
import Loader from "./Components/Loader";
import { useState } from "react";
export default function MiladiCodePortfolio() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    // wait until page fully loads
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // page already loaded
      setLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <>

      <div className="bg-slate-900">
        <Navbar />
        <Hero />
        <Info />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>

    </>
  );
}