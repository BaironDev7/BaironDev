"use client";

import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Github from "./components/Icons/Github";
import Instagram from "./components/Icons/Instagram";
import LinkedIn from "./components/Icons/Linkedin";
import XformerlyTwitter from "./components/Icons/X";
import Projects from "./components/Project";
import ScrollToTopButton from "./components/Scrolltotop";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center lg:mb-10 lg:flex-row items-center p-5 lg:p-10">
      <div className="flex flex-col lg:mr-16">
        <h1 className="lg:text-6xl lg:font-extrabold sm:text-6xl sm:font-extrabold text-[44px] font-extrabold sm:mb-4 text-primary">Bairon Botero</h1>
        <h3 className="mb-6 text-xl font-medium lg:font-bold text-primary">Desarrollador De Software</h3>
        <p className="lg:max-w-md max-w-lg text-base text-secondary">Apasionado por crear experiencias digitales de calidad, centradas en las necesidades y deseos del cliente.</p>
        <a href="/CV_Bairon_Botero.pdf" download className="bg-green-700 p-2 rounded-md hover:bg-green-600 transition duration-500 max-w-40 mt-4 flex justify-center">Descargar CV</a>
        <div className="flex mt-20 mb-10 justify-center lg:justify-start lg:mb-0">
          <a href="https://github.com/BaironDev7" target="_blank"><Github className="text-secondary mr-10 hover:text-primary transition duration-500 w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/bairon-botero-a668541b1/" target="_blank"><LinkedIn className="text-secondary mr-10 hover:text-primary transition duration-500 w-6 h-6" /></a>
          <a href="https://www.instagram.com/bairon_botero7/" target="_blank"><Instagram className="text-secondary mr-10 hover:text-primary transition duration-500 w-6 h-6" /></a>
          <a href="https://x.com/ItsBaironDev" target="_blank"><XformerlyTwitter className="text-secondary hover:text-primary transition duration-500 w-6 h-6" /></a>
        </div>
      </div>
      <AboutMe />
    </div>
    <Experience />
    <Projects />
    <Contact />
    <ScrollToTopButton />
    <Footer />
    </>
  );
}
