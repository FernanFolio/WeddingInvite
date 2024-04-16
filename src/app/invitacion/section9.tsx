import { LottieAnimation } from '@/lib/components'
import React from 'react'

import mapa5 from '@/lib/lottie/lottie_fondo9.json'

export default function Section9 () {
  return (
    <section className='container text-center mt-52 xl:mt-80 relative min-h-screen'>
      <div className='absolute inset-0'>
        <LottieAnimation animationData={mapa5} />
      </div>

      <div className='relative z-10'>
        <h3 className='pl-5 text-8xl xl:text-9xl font-willmard text-primary mt-28'>
          Fotos
        </h3>
        <p className='text-primary font-vijaya italic text-3xl xl:text-[2.5rem] mt-5 w-1/2 mx-auto leading-[1.3]'>
          El día de la boda toma muchas fotos y déjanos un bonito y divertido recuerdo haciendo click en el ícono de la cámara
        </p>
        <a
          href='https://photos.google.com/share/AF1QipPOGTeebLlxhf676ScyEAhw_AYQ0wq2S33c1M_2rE7eOGBCN9526sjenONEPEYS3g?pli=1&key=OFVnRTA2WG80T25mZm5zdGFxNl9XX2FBaEhaYmFn'
          className="w-24 h-24 rounded-full border-4 border-primary mt-8 mx-auto flex justify-center items-center"
          target='_blank'
          rel='noopenner noreferrer'
        >
          <i className="fa-solid fa-camera-retro text-4xl xl:text-6xl text-primary"></i>
        </a>
      </div>
    </section>
  )
}
