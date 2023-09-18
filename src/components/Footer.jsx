import React from 'react';
import GH from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Instagram from '../assets/icons/instagram.svg';

function Footer() {
  return (
    <footer className='bg-blue-950'>
      <div className='flex justify-around'>
        <a href='https://github.com/RodriguezMaximilianoX' target='_blank' rel="noreferrer">
          <img className='w-12' src={GH} alt='GitHub'></img>
        </a>
        <a href='https://www.linkedin.com/in/rodriguez-maximiliano-xavier/https://www.linkedin.com/in/rodriguez-maximiliano-xavier/' target='_blank' rel='noreferrer'>
          <img className='w-12' src={LinkedIn} alt='linkedin'></img>
        </a>
        <a href='https://www.instagram.com/rmx_dev/' target='_blank' rel='noreferrer'>
          <img className='w-12' src={Instagram} alt='instagram'></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;