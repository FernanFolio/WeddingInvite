import { LottieAnimation } from '@/lib/components'
import React from 'react'

import googleMaps from '@/lib/lottie/lottie_googleMaps.json'
import mapa3 from '@/lib/lottie/lottie_fondo7.json'

export default function Section5 () {
  return (
    <section className='container text-center mt-52 xl:mt-96 relative min-h-screen'>
      <div className='absolute inset-0'>
        <LottieAnimation animationData={mapa3} />
      </div>

      <div className='relative z-10'>
        <i className="fa-solid fa-location-dot text-5xl xl:text-6xl text-primary mt-20"></i>
        <h3 className='pl-5 text-8xl xl:text-9xl font-willmard text-primary mt-1'>
          Destino
        </h3>
        <p className='text-primary text-3xl xl:text-5xl font-vijaya'>Santa María Reina de Padralbes</p>
        <p className='text-primary mt-5 font-aparatija text-2xl xl:text-4xl'>Carrer Miret i Sans 36,</p>
        <p className='text-primary font-aparatija text-2xl xl:text-4xl'>08034, Barcelona</p>
        <a href="https://www.google.com.mx/maps/@20.5898288,-100.3927671,16z?entry=ttu" target='_blank' rel='noopenner noreferrer' className='font-parisienne text-primary text-2xl xl:text-4xl mt-5 inline-block'>
          Google Maps Link
          <LottieAnimation animationData={googleMaps} className='w-10 xl:w-16 mx-auto mt-5' />
        </a>
      </div>
    </section>
  )
}
