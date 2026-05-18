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
              <a
                href="https://wa.me/34655682757"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
                aria-describedby="cta-description"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.whatsappIcon} aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactar por WhatsApp
              </a>
              <button className={styles.secondaryButton} onClick={() => setShowInfoForm(true)}>
                Solicita información
              </button>
            </div>
            <p id="cta-description" className={styles.ctaDescription}>
              Contacta con nosotros para resolver tus dudas
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
