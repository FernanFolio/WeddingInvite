import { LottieAnimation } from '@/lib/components'
import React from 'react'

import mapa from '@/lib/lottie/lottie_fondo1.json'
import avion from '@/lib/lottie/lottie_avion1.json'
import name from '@/lib/lottie/lottie_selloSeccion1.json'

export default function Section1 () {
  return (
    <main className='container min-h-screen relative'>
      <div className='absolute inset-0'>
        <LottieAnimation animationData={mapa} />
      </div>

      <div className="relative z-10">
        <h1 className='text-primary text-5xl xl:text-6xl text-center font-abril tracking-widest mt-20 xl:mt-32'>PASAPORTE</h1>

        <LottieAnimation animationData={avion} className='mt-8' loop={false} />

        <div className="-mt-14 xl:-mt-20 relative">
          <p className='absolute z-10 bottom-[45%] xl:bottom-[48%] right-0 left-0 text-center text-5xl xl:text-7xl font-abril text-primary'>F & J</p>
          <p className='absolute z-10 bottom-[4.6rem] xl:bottom-[7.5rem] right-0 left-0 text-lg xl:text-2xl text-center font-abril text-white'>10 - 09 - 2027</p>
          <LottieAnimation animationData={name} />
        </div>

        <p className='text-center text-primary tracking-wider'>A LA BODA DE</p>

        <h2 className='font-abril text-[2.5rem] xl:text-5xl text-primary text-center uppercase mt-6'>Carmen & Pedro</h2>
      </div>

    </main>
  )
}
