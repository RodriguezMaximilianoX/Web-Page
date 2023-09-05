import React from 'react';
import Logo from '../assets/logo.png';
import '../App.css';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between'>
      <img src={ Logo } alt='logo' className='w-20' />
      <ul className='flex flex-row'>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
