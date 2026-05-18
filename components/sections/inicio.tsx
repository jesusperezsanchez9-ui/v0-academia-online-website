"use client"

import type React from "react"

import { useState } from "react"
import styles from "./inicio.module.css"

interface InicioProps {
  onNavigate?: (section: string) => void
}

export default function Inicio({ onNavigate }: InicioProps) {
  const [showInfoForm, setShowInfoForm] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    notas: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInfoFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Solicitud de información enviada:", formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setShowInfoForm(false)
      setFormSubmitted(false)
      setFormData({ nombre: "", apellidos: "", email: "", telefono: "", notas: "" })
    }, 2000)
  }

  return (
    <section className={styles.section} aria-labelledby="inicio-heading">
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 id="inicio-heading" className={styles.title}>
              Bienvenidos a EnglishAcademy
            </h1>
            <p className={styles.subtitle}>Tu academia online de inglés y orientación educativa</p>
            <p className={styles.description}>
              Ofrecemos formación especializada en inglés con modalidades flexibles, preparación para certificaciones
              oficiales y asesoría educativa personalizada. Aprende desde cualquier lugar con el acompañamiento de
              profesionales experimentados.
            </p>
            <div className={styles.cta}>
              <button
                className={styles.primaryButton}
                aria-describedby="cta-description"
                onClick={() => onNavigate?.("certificaciones")}
              >
                Conoce nuestros cursos
              </button>
              <button className={styles.secondaryButton} onClick={() => setShowInfoForm(true)}>
                Solicita información
              </button>
            </div>
            <p id="cta-description" className={styles.ctaDescription}>
              Descubre todas nuestras modalidades de aprendizaje
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/images/estudiante-certificado.png"
              alt="Estudiante mostrando su certificado de Cambridge English en una clase online"
              className={styles.heroImageReal}
            />
          </div>
        </div>

        {showInfoForm && (
          <div className={styles.modalOverlay} onClick={() => setShowInfoForm(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeButton}
                onClick={() => setShowInfoForm(false)}
                aria-label="Cerrar formulario"
              >
                ✕
              </button>
              <h2 className={styles.modalTitle}>Solicita Información</h2>
              {formSubmitted ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✓</span>
                  <p>¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleInfoFormSubmit} className={styles.infoForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="apellidos">Apellidos *</label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Correo Electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="telefono">Número de Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Opcional"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="notas">Mensaje o Consulta</label>
                    <textarea
                      id="notas"
                      name="notas"
                      value={formData.notas}
                      onChange={handleInputChange}
                      rows={4}
                      className={styles.formTextarea}
                      placeholder="Cuéntanos qué información necesitas..."
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Enviar Solicitud
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>¿Por qué elegir EnglishAcademy?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden="true">
                🌟
              </div>
              <h3>Metodología Personalizada</h3>
              <p>Adaptamos nuestro enfoque a las necesidades específicas de cada estudiante</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden="true">
                💻
              </div>
              <h3>100% Online</h3>
              <p>Flexibilidad total para estudiar desde cualquier lugar y en cualquier momento</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden="true">
                🏆
              </div>
              <h3>Certificaciones Oficiales</h3>
              <p>Preparación especializada para Aptis, Trinity, Cambridge y EOI</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden="true">
                👨‍🏫
              </div>
              <h3>Profesores Expertos</h3>
              <p>Equipo de profesionales con amplia experiencia en enseñanza de inglés</p>
            </div>
          </div>
        </div>

        <div className={styles.about}>
          <h2>CEO de la Academia</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                Es un honor para mí, como CEO, darle la bienvenida a nuestra plataforma de aprendizaje digital. Fundamos
                esta academia con la firme convicción de que la educación debe ser accesible, rigurosa y profundamente
                conectada con el futuro.
              </p>
              <h3>Mi Trayectoria Profesional</h3>
              <p>
                Mi trayectoria profesional se sustenta en una sólida formación académica y una valiosa perspectiva
                internacional:
              </p>
              <ul className={styles.aboutList}>
                <li>
                  <strong>Experiencia Global:</strong> He enriquecido mi enfoque pedagógico con dos años de residencia
                  en Irlanda, una experiencia que ha potenciado mis habilidades lingüísticas y mi comprensión de los
                  entornos educativos internacionales.
                </li>
                <li>
                  <strong>Titulación Central:</strong> Soy Maestro de Educación Primaria, especializado con menciones en
                  Inglés y Música.
                </li>
                <li>
                  <strong>Innovación y Tecnología:</strong> Mi compromiso con la vanguardia educativa se certifica con
                  un Máster en Tecnología Educativa y Competencia Digital.
                </li>
              </ul>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder} role="img" aria-label="CEO de la academia">
                <span className={styles.imageIcon}>👨‍💼</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h2>Valores Promovidos en Nuestra Academia</h2>
          <div className={styles.valuesContent}>
            <p>
              Esta combinación de experiencia pedagógica y dominio tecnológico es la base sobre la que construimos cada
              uno de nuestros programas. Guiamos nuestra labor diaria por tres pilares fundamentales:
            </p>
            <div className={styles.valuesPillars}>
              <div className={styles.pillar}>
                <h3>Innovación</h3>
                <p>
                  Utilizamos la tecnología educativa más reciente para asegurar que el proceso de aprendizaje sea
                  dinámico, eficiente y relevante para las demandas del siglo XXI.
                </p>
              </div>
              <div className={styles.pillar}>
                <h3>Excelencia</h3>
                <p>
                  Nos comprometemos con la máxima calidad en los contenidos y la mentoría, garantizando resultados
                  tangibles para nuestros estudiantes.
                </p>
              </div>
              <div className={styles.pillar}>
                <h3>Globalidad</h3>
                <p>
                  Fomentamos una mentalidad abierta e internacional, preparando a los alumnos para operar y comunicarse
                  eficazmente en cualquier contexto global.
                </p>
              </div>
            </div>
            <p className={styles.valuesClosing}>
              Nuestro objetivo es claro: dotarle de las herramientas y conocimientos necesarios para triunfar en un
              mundo en constante evolución.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
