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
export default function MiladiCodePortfolio() {
  useEffect(() => {
    AOS.init();
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