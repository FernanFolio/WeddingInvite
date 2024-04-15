/* eslint-disable @next/next/no-img-element */

import { LottieAnimation } from '@/lib/components'

import mapa from '@/lib/lottie/lottie_fondo1.json'
import mapa2 from '@/lib/lottie/lottie_fondo2.json'
import mapa3 from '@/lib/lottie/lottie_fondo7.json'
import avion from '@/lib/lottie/lottie_avion1.json'
import avion2 from '@/lib/lottie/lottie_avion2.json'
import name from '@/lib/lottie/lottie_selloSeccion1.json'
import googleMaps from '@/lib/lottie/lottie_googleMaps.json'
import world from '@/lib/lottie/lottie_selloSeccionCA.json'

export default function Invitacion () {
    return (
        <>
            <main className='container min-h-screen'>
                <div className='h-0'>
                    <LottieAnimation animationData={mapa} />
                </div>
                <h1 className='relative z-10 text-primary text-5xl xl:text-6xl text-center font-abril tracking-widest mt-20 xl:mt-32'>PASAPORTE</h1>

                <LottieAnimation animationData={avion} className='mt-8' loop={false} />

                <div className="relative -mt-14 xl:-mt-20">
                    <p className='absolute z-10 bottom-[45%] xl:bottom-[48%] right-0 left-0 text-center text-5xl xl:text-7xl font-abril text-primary'>F & J</p>
                    <p className='absolute z-10 bottom-[4.6rem] xl:bottom-[7.5rem] right-0 left-0 text-lg xl:text-2xl text-center font-abril text-white'>10 - 09 - 2027</p>
                    <LottieAnimation animationData={name} />
                </div>

                <p className='text-center text-primary tracking-wider'>A LA BODA DE</p>

                <h2 className='font-abril text-[2.5rem] xl:text-5xl text-primary text-center uppercase mt-6'>Carmen & Pedro</h2>
            </main>

            <section className='container mt-10'>
                <div className='h-0'>
                    <LottieAnimation animationData={mapa2} />
                </div>

                <h3 className='relative z-10 pl-5 text-8xl xl:text-9xl font-willmard text-primary mt-5 leading-[3.7rem] tracking-tight italic'>
                    Después de
                    <span className='block pl-16'>3 años juntos</span>
                </h3>

                <LottieAnimation animationData={avion2} className='mt-8' loop={false} />

                <p className='text-center font-willmard text-6xl xl:text-7xl text-primary mt-20 w-9/12 mx-auto leading-10'>prepara tus maletas y acompáñanos en este viaje</p>
            </section>

            <section className="container mt-32 xl:mt-52 border-4 border-dotted border-primary p-2 pb-8 relative bg-[#fefefd]">
                <img src="/img/pareja.png" alt="Nosotros" />
                <h3 className='text-center uppercase text-primary-dark font-abril text-xl xl:text-4xl mt-5 tracking-widest'>Pasaporte a <br /> nuestra boda</h3>

                <hr className='border-primary my-4' />

                <div className="px-3 font-typewriter">
                    <p className='text-sm xl:text-xl text-accent'>Fecha</p>
                    <p className='xl:text-2xl text-blue-950/70 font-bold'>10 de Septiembre de 2027</p>

                    <p className='text-sm xl:text-xl text-accent'>Hora</p>
                    <p className='xl:text-2xl text-blue-950/70 font-bold'>12:00 PM</p>

                    <p className='text-sm xl:text-xl text-accent'>Destino</p>
                    <p className='xl:text-2xl text-blue-950/70 font-bold'>Barcelona</p>

                    <p className='text-sm xl:text-xl text-accent'>Ceremonia</p>
                    <p className='xl:text-2xl text-blue-950/70 font-bold'>Santa María Reina del Pedralbes</p>

                    <p className='text-sm xl:text-xl text-accent'>Banquete</p>
                    <p className='xl:text-2xl text-blue-950/70 font-bold'>Can Bonaste Wine Resort</p>
                </div>

                <hr className='border-primary my-4' />

                <h2 className='font-abril text-3xl xl:text-5xl text-primary-dark text-center uppercase mt-6'>Carmen <span className='text-accent'>&</span> Pedro</h2>

            </section>

            <section className='container text-center mt-10'>
                <div className='h-0'>
                    <LottieAnimation animationData={mapa3} />
                </div>

                <div className='relative z-10'>
                    <i className="fa-solid fa-location-dot text-5xl xl:text-6xl text-primary mt-20"></i>
                    <h3 className='pl-5 text-8xl xl:text-9xl font-willmard text-primary mt-1'>
                        Escala
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

            <section className='container text-center mt-52 xl:mt-96'>
                <div className='h-0'>
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

            <section className="container mt-32 xl:mt-80 text-center">
                <div className="relative">
                    <p className='absolute z-10 bottom-[45%] right-0 left-0 text-center text-4xl font-abril text-primary-dark -rotate-[18deg]'>F <span className='text-accent'>&</span> J</p>
                    <LottieAnimation animationData={world} />
                </div>

                <h3 className='pl-5 text-6xl xl:text-8xl font-willmard text-primary'>
                    Asistencia
                </h3>
                <p className='text-primary font-aparatija text-xl xl:text-3xl'>Haz click en la imagen del pasaporte para confirmar tu asistencia</p>
                <i className="fa-solid fa-passport text-4xl xl:text-6xl text-primary rotate-[16deg] mt-5 shadow-xl"></i>
            </section>

            <section className="container mt-28 text-center">
                <div className="h-0">
                    <LottieAnimation animationData={mapa3} />
                </div>

            </section>
        </>
    )
}
