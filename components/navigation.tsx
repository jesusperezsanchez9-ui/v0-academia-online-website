"use client"

import { useState } from "react"
import styles from "./navigation.module.css"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const sections = [
  { id: "inicio", label: "Inicio", icon: "🏠" },
  { id: "nuestro-metodo", label: "Nuestro Método", icon: "🎯" },
  { id: "certificaciones", label: "Certificaciones", icon: "📜" },
  { id: "clases-particulares", label: "Clases Particulares", icon: "👩‍🏫" },
  { id: "trabajar-irlanda", label: "Trabajar en Irlanda", icon: "🇮🇪" },
  { id: "erasmus", label: "Erasmus+", icon: "🇪🇺" },
  { id: "cursos", label: "Webinars", icon: "🎓" },
  { id: "contacto", label: "Contacto", icon: "📩" },
]

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={styles.nav} role="navigation" aria-label="Navegación principal">
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <h1>EnglishAcademy</h1>
        </div>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navigation-menu"
          aria-label="Alternar menú de navegación"
        >
          <span className={styles.hamburger}></span>
        </button>

        <ul id="navigation-menu" className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ""}`}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`${styles.navButton} ${activeSection === section.id ? styles.active : ""}`}
                onClick={() => handleSectionClick(section.id)}
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                <span className={styles.navIcon} aria-hidden="true">
                  {section.icon}
                </span>
                <span>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
