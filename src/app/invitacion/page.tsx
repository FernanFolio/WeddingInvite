/* eslint-disable @next/next/no-img-element */
'use client'

import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5'
import Section6 from './section6'
import Section7 from './section7'
import Section8 from './section8'
import Section9 from './section9'
import Section10 from './section10'
import Section11 from './section11'
import { useEffect } from 'react'

export default function Invitacion () {

    function playAudio (id: string) {
        const audio = document.getElementById(id) as HTMLAudioElement
        audio.play()
    }

    useEffect(() => {
        playAudio('tema-principal')
    }, [])


    return (
        <>
            <audio id="tema-principal">
                <source src={"/sound/tema.mp3"} type="audio/mp3" />
            </audio>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
        </>
    )
}
