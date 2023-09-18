import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center bg-blue-950 py-5 fixed top-0 left-0 right-0'>
      <h1 className='text-3xl font-bold ml-48 text-white'>RMX Desarrollador FullStack</h1>
      <ul className='flex flex-row mr-10'>
        <li className='px-4 text-lg text-white'><a href="#about">Sobre Mí</a></li>
        <li className='px-4 text-lg text-white'><a href="#skills">Habilidades</a></li>
        <li className='px-4 text-lg text-white'><a href="#projects">Proyectos</a></li>
        <li className='px-4 text-lg text-white'><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
