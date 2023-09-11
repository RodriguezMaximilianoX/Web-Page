import React from 'react'
import P1 from '../assets/img/ecommerce.png'

export default function Projects() {
  return (
    <section className=''>
      <h3 className='text-3xl font-bold mb-14 text-center'>Mis Proyectos</h3>
      <div className='flex flex-col'>
        <h4>Fake Ecommerce</h4>
        <img src= { P1 } alt='ecommerce' className='w-60'></img>
      </div>
    </section>
  )
}
