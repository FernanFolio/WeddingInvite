/* eslint-disable @next/next/no-img-element */
import { LottieAnimation } from '@/lib/components'
import React from 'react'

import balija from '@/lib/lottie/lottie_balija.json'

export default function Section11 () {
  return (
    <section className="container xl:mt-52 border-8 border-dotted border-primary p-2 pb-8 relative bg-[#fefefd] min-h-screen">
      <img src="/img/mapa.png" alt="Mapa" />
      <img src="/img/pasaporte.png" alt="Pasaporte" className='absolute top-16 left-0 right-0 px-8' />
      <img src="/img/brujula.png" alt="Pasaporte" className='absolute top-40 xl:top-56 right-0 w-20 xl:w-32' width={120} />

      <h2 className='font-abril text-3xl xl:text-5xl text-primary-dark text-center uppercase mt-6'>Carmen <span className='text-accent'>&</span> Pedro</h2>


      <div className='border-y-2 border-primary-dark flex justify-between font-typewriter py-1 px-5 my-5 uppercase text-center'>
        <div>
          <p className='text-sm xl:text-xl text-yellow-600'>Type</p>
          <p className='xl:text-2xl text-blue-950/70 font-bold'>Boda</p>
        </div>

        <div>
          <p className='text-sm xl:text-xl text-yellow-600'>Code</p>
          <p className='xl:text-2xl text-blue-950/70 font-bold'>Barcelona</p>
        </div>

        <div>
          <p className='text-sm xl:text-xl text-yellow-600'>Pasaporte</p>
          <p className='xl:text-2xl text-blue-950/70 font-bold'>10072027</p>
        </div>
      </div>

      <p className='text-yellow-600 text-xl xl:text-2xl mt-5 text-center uppercase font-typewriter !leading-[1.8]'>
        El único equipaje <br /> que necesitas son las ganas <br /> de pasarlo bien
      </p>

      <LottieAnimation animationData={balija} className='w-40 mx-auto' loop={false} />

      <p className='text-yellow-600 text-xl xl:text-2xl mt-5 text-center uppercase font-typewriter !leading-[1.8]'>
        ¡Te Esperamos!
      </p>

      <hr className='border-primary border-t-2' />

      <p className='text-yellow-600 text-center font-typewriter text-lg overflow-hidden'>
        {"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "}
        {"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "}
      </p>
    </section>
  )
}
