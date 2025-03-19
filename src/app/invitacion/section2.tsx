import { LottieAnimation } from '@/lib/components'
import React from 'react'

import mapa2 from '@/lib/lottie/lottie_fondo2.json'
import avion2 from '@/lib/lottie/lottie_avion2.json'

export default function Section2 () {
  return (
    <section className='container min-h-screen relative pt-20 2xl:pt-0'>
      <div className='absolute inset-0'>
        <LottieAnimation animationData={mapa2} />
      </div>

      <h3 className='relative z-10 pl-5 text-8xl xl:text-9xl font-willmard text-primary leading-[3.7rem] tracking-tight italic'>
        Después de
        <span className='block pl-16'>3 años juntos</span>
      </h3>

      <LottieAnimation animationData={avion2} className='mt-8' loop={false} />

      <p className='text-center font-willmard text-6xl xl:text-7xl text-primary mt-20 w-9/12 mx-auto leading-10'>prepara tus maletas y acompáñanos en este viaje</p>
    </section>
  )
}
