/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Section3 () {
  return (
    <section className="container mt-32 xl:mt-52 border-8 border-dotted border-primary p-2 pb-8 relative bg-[#fefefd] min-h-screen">
      <img src="/img/pareja.png" alt="Nosotros" />
      <h3 className='text-center uppercase text-primary-dark font-abril text-xl xl:text-4xl mt-5 tracking-widest'>Pasaporte a <br /> nuestra boda</h3>

      <hr className='border-primary my-4' />

      <div className="px-3 font-typewriter">
        <p className='text-sm xl:text-xl text-accent'>Fecha</p>
        <p className='xl:text-2xl text-blue-950/70 font-bold'>10 de Septiembre de 2027</p>

        <p className='text-sm xl:text-xl text-accent'>Hora</p>
        <p className='xl:text-2xl text-blue-950/70 font-bold'>12:00 PM</p>

        <p className='text-sm xl:text-xl text-accent'>Destino</p>
        <p className='xl:text-2xl text-blue-950/70 font-bold'>Barcelona</p>

        <p className='text-sm xl:text-xl text-accent'>Ceremonia</p>
        <p className='xl:text-2xl text-blue-950/70 font-bold'>Santa María Reina del Pedralbes</p>

        <p className='text-sm xl:text-xl text-accent'>Banquete</p>
        <p className='xl:text-2xl text-blue-950/70 font-bold'>Can Bonaste Wine Resort</p>
      </div>

      <hr className='border-primary my-4' />

      <h2 className='font-abril text-3xl xl:text-5xl text-primary-dark text-center uppercase mt-6'>Carmen <span className='text-accent'>&</span> Pedro</h2>

    </section>

  )
}
