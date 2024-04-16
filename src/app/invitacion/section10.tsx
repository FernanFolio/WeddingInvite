import { LottieAnimation } from '@/lib/components'
import React from 'react'

import mapa5 from '@/lib/lottie/lottie_fondo9.json'

export default function Section10 () {
  return (
    <section className='container text-center mt-52 xl:mt-80 relative min-h-screen'>
      <div className='absolute inset-0'>
        <LottieAnimation animationData={mapa5} />
      </div>

      <div className='relative z-10 flex flex-col justify-center h-screen'>

        <i className="fa-solid fa-plane-departure text-4xl xl:text-6xl text-primary"></i>
        <p className='text-primary-dark font-vijaya italic text-4xl xl:text-5xl mt-5 w-1/2 mx-auto !leading-[1.3]'>
          Cuenta regresiva para iniciar el embarque a la mejor fiesta
        </p>

        <p className='text-primary-dark text-2xl xl:text-3xl mt-8 mx-auto !leading-[1.3]'>Tiempo de festejar!!!</p>

      </div>
    </section>
  )
}
