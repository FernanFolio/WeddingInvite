import { LottieAnimation } from '@/lib/components'
import React from 'react'

import world from '@/lib/lottie/lottie_selloSeccionCA.json'

export default function Section6 () {
  return (
    <section className="container mt-32 xl:mt-80 text-center min-h-screen">
      <div className="relative">
        <p className='absolute z-10 bottom-[45%] right-0 left-0 text-center text-4xl xl:text-6xl font-abril text-primary-dark -rotate-[18deg]'>F <span className='text-accent'>&</span> J</p>
        <LottieAnimation animationData={world} />
      </div>

      <h3 className='pl-5 text-6xl xl:text-8xl font-willmard text-primary'>
        Asistencia
      </h3>
      <p className='text-primary font-aparatija text-xl xl:text-3xl'>Haz click en la imagen del pasaporte para confirmar tu asistencia</p>
      <button><i className="fa-solid fa-passport text-4xl xl:text-6xl text-primary rotate-[16deg] mt-5 shadow-xl"></i></button>
    </section>
  )
}
