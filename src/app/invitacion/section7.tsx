import { LottieAnimation } from '@/lib/components'
import React from 'react'

import mapa3 from '@/lib/lottie/lottie_fondo7.json'

export default function Section7 () {
  return (
    <section className="container mt-28 text-center relative min-h-screen">
      <div className="absolute inset-0">
        <LottieAnimation animationData={mapa3} />
      </div>

      <div className="relative z-10 mt-32 xl:mt-52">
        <i className="fa-solid fa-gift text-primary text-5xl xl:text-7xl"></i>
        <h3 className='pl-5 text-6xl xl:text-9xl font-willmard text-primary'>
          Regalo
        </h3>
        <p className='text-primary font-aparatija text-xl xl:text-3xl mt-5'>Lo más importante es vuestra presencia, pero si deseáis hacernos un regalo, aquí dejamos nuestro número de cuenta</p>
        <p className='text-primary font-aparatija text-xl xl:text-3xl mt-5 font-bold'> ES 1111 2222 3333 4444 5555 6666 </p>
        <button onClick={() => {
          navigator.clipboard.writeText("ES 1111 2222 3333 4444 5555 6666")
          alert('Número de cuenta copiado')
        }}>
          <i className="fa-regular fa-copy text-4xl xl:text-6xl text-primary"></i>
        </button>
      </div>

    </section>
  )
}
