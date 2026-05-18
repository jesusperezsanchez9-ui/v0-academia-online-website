"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Inicio from "@/components/sections/inicio"
import NuestroMetodo from "@/components/sections/nuestro-metodo"
import Certificaciones from "@/components/sections/certificaciones"
import Contacto from "@/components/sections/contacto"
import Webinars from "@/components/sections/webinars"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("inicio")

  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return <Inicio onNavigate={setActiveSection} />
      case "nuestro-metodo":
        return <NuestroMetodo />
      case "certificaciones":
        return <Certificaciones />
      case "cursos":
        return <Webinars />
      case "contacto":
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main id="main-content">{renderSection()}</main>
    </>
  )
}
