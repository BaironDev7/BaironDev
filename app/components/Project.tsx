import React from 'react';
import Image from "next/image";
import Github from './Icons/Github';
import Link from './Icons/Link';
import { FaArrowRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <section id="Proyectos" className="text-white p-5 mb-10">
      <div className="lg:max-w-4xl sm:max-w-lg mx-auto space-y-8">
        <h2 className="text-4xl font-semibold mb-4">Proyectos</h2>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col">
            <Image alt='Tesla-Landing' src={"/images/Baru-passgen.jpg"} width={300} height={150} className="rounded-xl" />
            <div className="flex justify-center mt-5">
              <a href="https://github.com/BaironDev7/Baru-PassGen" target="_blank"><Github className="text-secondary mr-10 hover:text-primary transition duration-500 w-6 h-6" /></a>
              <a href="https://baru-passgen.vercel.app/" target="_blank"><Link /></a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-primary font-medium mb-2">Baru PassGen</h3>
            <p className="text-base text-secondary">Generador de Contraseñas que permite a los usuarios crear contraseñas seguras personalizadas con opciones como longitud variable, incluyendo números y símbolos.</p>
            <div className="flex flex-wrap mt-5 gap-3">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-teal-300">React</div>
                <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-red-300">Git</div>
                <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-blue-300">TailwindCss</div>
                <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-orange-300">Shadcn</div>
                <div className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-white">TypeScript</div>
                <div className="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-green-300">Node.Js</div>
                <div className="flex items-center rounded-full bg-black/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-white">Vercel</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col">
            <Image alt='Tesla-Landing' src={"/images/Baru-pelis.jpg"} width={300} height={150} className="rounded-xl" />
            <div className="flex justify-center mt-5">
              <a href="https://github.com/BaironDev7/Baru-Pelis" target="_blank"><Github className="text-secondary mr-10 hover:text-primary transition duration-500 w-6 h-6" /></a>
              <a href="https://baru-pelis.netlify.app/" target="_blank"><Link /></a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-primary font-medium mb-2">Baru Pelis</h3>
            <p className="text-base text-secondary">Desarrollada con React y Vite, que muestra información sobre películas populares utilizando la API de The Movie Database (TMDB).</p>
            <div className="flex flex-wrap mt-5 gap-3">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-teal-300">React</div>
                <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-orange-300">Vite</div>
                <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-blue-300">TailwindCss</div>
                <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-yellow-300">Javascript</div>
                <div className="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-green-300">Node.Js</div>
                <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-red-300">Git</div>
                <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-sky-300">Netflify</div>
                <div className="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-lime-300">API</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col">
            <Image alt='Tesla-Landing' src={"/images/Baru-store.jpg"} width={300} height={150} className="rounded-xl" />
            <div className="flex justify-center mt-5">
              <a href="https://github.com/BaironDev7/Baru-Store" target="_blank"><Github className="text-secondary mr-10 hover:text-primary transition duration-500 w-6 h-6" /></a>
              <a href="https://baru-store.vercel.app/" target="_blank"><Link /></a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-primary font-medium mb-2">Baru Store</h3>
            <p className="text-base text-secondary">Una aplicación web simple construida con Next.js y Tailwind CSS que muestra una lista de productos obtenidos de la Fake Store API.</p>
            <div className="flex flex-wrap mt-5 gap-3">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-teal-300">React</div>
                <div className="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-green-300">Node.Js</div>
                <div className="flex items-center rounded-full bg-black/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-white">Next.Js</div>
                <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-blue-300">TailwindCss</div>
                <div className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-white">TypeScript</div>
                <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-red-300">Git</div>
                <div className="flex items-center rounded-full bg-black/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-white">Vercel</div>
                <div className="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-lime-300">API</div>
            </div>
          </div>
        </div>
        <a href="https://github.com/BaironDev7?tab=repositories" target="_blank" className="flex items-center gap-2 text-lg text-secondary hover:text-primary justify-end">Más Proyectos <FaArrowRight className="animate-bounce-horizontal" /></a>
      </div>
    </section>
  );
};

export default Projects;