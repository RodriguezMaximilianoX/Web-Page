import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_30njn6p', 'template_ailcru5', form.current, 'WRLqA7U8nppmOsh-T').then((result) => {
      console.log(result.text)
    },
      (error) => {
        console.log(error.text)
      })

    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    })
  }

  return (
    <section className='my-20'>
      <h3 className='text-3xl font-bold mb-14 text-center'>Nos pongamos en contacto</h3>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col px-4 m-auto bg-blue-950 rounded-lg max-w-2xl py-6'>
        <label className='text-white py-2 text-xl'>
          Nombre
        </label>
        <input 
        type="text" 
        name="user_name" 
        value={formData.user_name} 
        className='rounded-lg py-1 p-2'
        onChange={handleChange}
        />
        <label className='text-white py-2 text-xl'>
          Email
        </label>
        <input 
          type="email" 
          name="user_email" 
          value={formData.user_email} 
          className='rounded-lg py-1 p-2'
          onChange={handleChange}
        />
        <label className='text-white py-2 text-xl'>
          Mensaje
        </label>
        <textarea 
          name="message" 
          className='rounded-lg py-1 p-2' 
          value={formData.message}
          onChange={handleChange}
        />
        <input 
        type="submit" 
        value="Enviar" 
        className='bg-blue-600 rounded-lg px-4 py-2 my-4 text-white'
        />
      </form>
    </section>
  )
}
