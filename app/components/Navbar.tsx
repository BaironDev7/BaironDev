"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-primary">Bairon</span>
          <span className="animate-[colorCycle_3s_infinite]">Dev</span>
        </div>
        <button
          className="text-3xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`bg-[#0f162b] md:flex md:items-center md:gap-4 absolute md:static w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? 'top-16' : '-top-96'
          }`}
        >
          <li className="p-2 border-b md:border-none">
            <a href="#Sobremi" onClick={closeMenu} className="block md:inline p-4 rounded-lg text-primary hover:bg-slate-400/10 hover:transition duration-500">Sobre Mi</a>
          </li>
          <li className="p-2 border-b md:border-none">
            <a href="#Experiencia" onClick={closeMenu} className="block md:inline p-4 rounded-lg text-primary hover:bg-slate-400/10 hover:transition duration-500">Experiencia</a>
          </li>
          <li className="p-2 border-b md:border-none">
            <a href="#Proyectos" onClick={closeMenu} className="block md:inline p-4 rounded-lg text-primary hover:bg-slate-400/10 hover:transition duration-500">Proyectos</a>
          </li>
          <li className="p-2">
            <a href="#Contacto" onClick={closeMenu} className="block md:inline p-4 rounded-lg text-primary hover:bg-slate-400/10 hover:transition duration-500">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;