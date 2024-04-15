/* eslint-disable @next/next/no-img-element */

import { LottieAnimation } from '@/lib/components'

import mapa from '@/lib/lottie/lottie_fondo1.json'
import mapa2 from '@/lib/lottie/lottie_fondo2.json'
import avion from '@/lib/lottie/lottie_avion1.json'
import avion2 from '@/lib/lottie/lottie_avion2.json'
import name from '@/lib/lottie/lottie_selloSeccion1.json'

export default function Invitacion () {
    return (
        <>
            <main className='container min-h-screen'>
                <div className='h-0'>
                    <LottieAnimation animationData={mapa} />
                </div>
                <h1 className='relative z-10 text-primary text-5xl text-center font-abril tracking-widest mt-20'>PASAPORTE</h1>

                <LottieAnimation animationData={avion} className='mt-8' loop={false} />

                <div className="relative -mt-14">
                    <p className='absolute z-10 bottom-[45%] right-0 left-0 text-center text-5xl font-abril text-primary blur-[0.7px]'>F & J</p>
                    <p className='absolute z-10 bottom-[4.6rem] right-0 left-0 text-lg text-center font-abril text-white blur-[0.7px]'>10-09-2027</p>
                    <LottieAnimation animationData={name} />
                </div>

                <p className='text-center text-primary tracking-wider'>A LA BODA DE</p>

                <h2 className='font-abril text-[2.5rem] text-primary text-center uppercase mt-6'>Carmen & Pedro</h2>
            </main>

            <section className='container mt-10'>
                <div className='h-0'>
                    <LottieAnimation animationData={mapa2} />
                </div>

                <p className='relative z-10 pl-5 text-8xl font-willmard text-primary mt-5 leading-[3.7rem] tracking-tight italic'>
                    Después de
                    <span className='block pl-16'>3 años juntos</span>
                </p>

                <LottieAnimation animationData={avion2} className='mt-8' loop={false} />

                <p className='text-center font-willmard text-6xl text-primary mt-20 w-9/12 mx-auto leading-10'>prepara tus maletas y acompáñanos en este viaje</p>
            </section>
        </>
    )
}
