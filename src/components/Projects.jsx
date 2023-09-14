import React from 'react'
import P1 from '../assets/img/ecommerce.png'

export default function Projects() {
  return (
    <section className=''>
      <h3 className='text-3xl font-bold mb-14 text-center'>Mis Proyectos</h3>
      <div className='flex justify-around'>
        <div className='flex flex-col rounded-lg p-4 bg-blue-950'>
          <h4 className='font-bold text-center text-white text-2xl'>Ecommerce</h4>
          <div className='flex justify-center my-2'>
            <img
              src={P1}
              alt='ecommerce'
              className='w-60 rounded-lg '></img>
          </div>
          <p className='text-white overflow-hidden max-w-xs text-center'>Proyecto desarrollado con React y CSS consumiendo una API externa. Es una simulacion de un ecommerce con carrito de compras y seccion de pago</p>
          <button className=' bg-blue-600 rounded-lg px-4 py-2 mt-4'>
            <a href='https://ecommerce-react-alpha-six.vercel.app' target='_blank' rel="noreferrer" className='text-white text-center'>Ver Proyecto</a>
          </button>
        </div>
      </div>
    </section>
  )
}
