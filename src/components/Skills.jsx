import React from 'react'
import HTML from '../assets/icons/html.svg'
import CSS from '../assets/icons/css.svg'
import JS from '../assets/icons/javascript.svg'
import REACT from '../assets/icons/react.svg'
import ANG from '../assets/icons/angular.svg'
import TL from '../assets/icons/tailwind.svg'
import BT from '../assets/icons/bootstrap.svg'
import MUI from '../assets/icons/material-ui.svg'
import NODE from '../assets/icons/node-js.svg'
import MONGO from '../assets/icons/mongo.svg'
import MYSQL from '../assets/icons/mysql.svg'


export default function Skills() {
  return (
    <section className='my-20 mx-48'>
      <h3 className='text-3xl font-bold mb-14 text-center'>Stack Tecnológico</h3>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col items-center px-2'>
          <img src={ HTML } alt='html' className='w-12'></img>
          <p className='text-center'>HTML</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ CSS } alt='CSS' className='w-12'></img>
          <p className='text-center'>CSS</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ JS } alt='Javascript' className='w-12'></img>
          <p className='text-center'>Javascript</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ REACT } alt='React' className='w-12'></img>
          <p className='text-center'>React</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ ANG } alt='Angular' className='w-12'></img>
          <p className='text-center'>Angular</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ TL } alt='Tailwind' className='w-12'></img>
          <p className='text-center'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ BT } alt='Bootstrap' className='w-12'></img>
          <p className='text-center'>Bootstrap</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ MUI } alt='Material UI' className='w-12'></img>
          <p className='text-center'>Material UI</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ NODE } alt='NodeJs' className='w-12'></img>
          <p className='text-center'>NodeJs</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ MONGO } alt='MongoDB' className='w-12'></img>
          <p className='text-center'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ MYSQL } alt='MySql' className='w-12'></img>
          <p className='text-center'>MySql</p>
        </div>
      </div>
    </section>
  )
}
