/* eslint-disable @next/next/no-img-element */
import { LottieAnimation } from '@/lib/components'
import React from 'react'

import mapa4 from '@/lib/lottie/lottie_fondo8.json'

export default function Section8 () {
  return (
    <section className='container text-center mt-52 xl:mt-80 relative min-h-screen'>
      <div className='absolute inset-0'>
        <LottieAnimation animationData={mapa4} />
      </div>

      <div className='relative z-10'>
        <h3 className='pl-5 text-8xl xl:text-9xl font-willmard text-primary mt-20'>
          Itinerario
        </h3>
        <img src="/img/itinerary.png" alt="Itinerario" className='mx-auto' />
      </div>
    </section>
  )
}
