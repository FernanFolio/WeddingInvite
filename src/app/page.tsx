/* eslint-disable @next/next/no-img-element */
export default function Home () {
  return (
    <main className="container flex flex-col items-center justify-center h-screen">
      <h1 className='text-center font-parisienne text-4xl'>
        Martín Pedroza García
        <span className='block mt-5 text-4xl'>y</span>
        <span className='block mt-5 text-4xl'>Familia</span>
      </h1>

      <h2 className='font-vijaya text-4xl mt-5'>!Bienvenidos al viaje de nuestras vidas!</h2>

      <img src="/img/hand.svg" alt="Click" width={50} className='mt-10' />

      <p className='font-myriad text-xl mt-5'>Haz click aquí para saber más</p>
    </main>
  )
}
