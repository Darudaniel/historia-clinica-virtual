"use client"

import "@/styles/containers/home.css"
import Link from "next/link"
import MainButton from "@/components/MainButton"
import YouTubeVideo from "@/components/YouTubeVideo"
import LegalArea from "@/components/LegalArea"
import { sendGAEvent } from '@next/third-parties/google'

const Home = () => {

  sendGAEvent('event', 'home_page_view')

  const handleSubmit = () => {
    sendGAEvent('event', 'probar_software_button')
    console.log("redirigiendo a login")
  }
  
  return (
    <div className="home">
      <header className="header-container">
        <section className="header-home">
          <h1 className="title-home">Historia Clínica Virtual</h1>
          <p className="presentation-text">Mientras otros sistemas consumen el 70% del tiempo de la consulta, nuestra interfaz clara y fluida facilita un registro rápido y preciso de la historia clinica. Optimiza tu tiempo y enfócate en lo que realmente importa: tus pacientes.</p>
        </section>
      </header>
      <Link href={`/login`}>
        <MainButton text='Probar software' action={handleSubmit} />
      </Link>
      <div className="information-dynamic--container">
        <section className="demo-video">
          <h2 className="features-title">Mira la plataforma</h2>
          <div className="youtube-video--container">
            <YouTubeVideo videoId="FFcfU8KvtH0" width="200"/>
          </div>
        </section>
        <section className="features-container">
          <h2 className="features-title">Características principales</h2>
            <ul className="features-list--container">
              <li>
                Diseño minimalista: ofrece una interfaz limpia que reduce la complejidad visual y garantiza una experiencia de usuario fluida y sin distracciones.
              </li>
              <br />
              <li>
                Agilidad en el registro: el diseño intuitivo y optimizado, agiliza el ingreso de datos, permitiendo a los profesionales de la salud completar historias clínicas de manera rápida y precisa.
              </li>
              <br />
              <li>
                Acceso en la nube: arquitectura basada en Google cloud, posibilita el acceso a historias clínicas desde cualquier lugar y dispositivo con conexión a internet, fomentando la colaboración y la toma de decisiones informadas.
              </li>
            </ul>
        </section>
      </div>
      <section className="legal-area-section">
        <h2 className="features-title">Terminos y Condiciones</h2>
        <LegalArea />
      </section>
    </div>
  )
}

export default Home