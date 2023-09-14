import React from 'react';
import GH from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Instagram from '../assets/icons/instagram.svg';

function Footer() {
  return (
    <footer className='bg-blue-950'>
      <div className='flex justify-around'>
        <img className='w-12' src= { GH } alt='github'></img>
        <img className='w-12' src= { LinkedIn } alt='linkedin'></img>
        <img className='w-12' src= { Instagram } alt='instagram'></img>
      </div>  
    </footer>
  );
}

export default Footer;
