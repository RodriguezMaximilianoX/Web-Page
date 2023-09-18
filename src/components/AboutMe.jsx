import React from 'react'
import '../App.css';
import Svg from '../assets/icons/programming.svg';

export default function AboutMe() {
  return (
    <section className='flex items-center justify-center mt-10'>
      <img src={Svg} alt='banner' className='w-96 my-4 mr-52' />
      <div className='flex flex-col'>
        <h2 className='text-5xl font-bold mb-14'>¡Hola!</h2>
        <p className='max-w-xl overflow-hidden text-lg'>
          Mi nombre es Maximiliano Rodriguez me considero una persona curiosa con ganas de aprender apasionado por el mundo del desarrollo. Actualmente estoy en proceso de dar mis primeros pasos como desarrollador Fullstack.
          Tengo experiencia con tecnologias frontend con React principalmente y Angular y backend con NodeJs.
          Ademas de tener experiencias en bases de datos SQL y NoSQL
        </p>
      </div>
    </section>
  )
}
