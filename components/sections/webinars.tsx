"use client"

import type React from "react"

import { useState } from "react"
import styles from "./webinars.module.css"

export default function Webinars() {
  const [selectedWebinar, setSelectedWebinar] = useState<string | null>(null)
  const [registrationForm, setRegistrationForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    webinar: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const webinars = [
    {
      id: "tecnicas-estudio",
      title: "Técnicas de Estudio de Alto Rendimiento",
      description:
        "Olvida los atracones de última hora. Aprende a memorizar mejor, organizar tu tiempo y reducir el estrés ante los exámenes.",
      icon: "📚",
      duracion: "2 horas",
      precio: "25€",
      beneficios: [
        "Técnicas de memorización comprobadas científicamente",
        "Gestión efectiva del tiempo de estudio",
        "Estrategias para reducir la ansiedad ante exámenes",
        "Organización de apuntes y materiales",
        "Métodos de repaso espaciado",
      ],
    },
    {
      id: "trabajar-irlanda",
      title: "Trabajar en Irlanda",
      description:
        "Todo lo que necesitas saber sobre el mercado laboral irlandés, trámites (PPSN), búsqueda de alojamiento y cómo adaptar tu CV al estilo local.",
      icon: "🇮🇪",
      duracion: "2.5 horas",
      precio: "30€",
      beneficios: [
        "Guía paso a paso para obtener el PPSN",
        "Consejos prácticos para encontrar alojamiento",
        "Cómo adaptar tu CV al formato irlandés",
      ],
    },
    {
      id: "soft-skills",
      title: "Desarrollo de Soft Skills",
      description:
        "Potencia las habilidades que las empresas buscan en 2024: comunicación efectiva, trabajo en equipo, pensamiento crítico y adaptabilidad.",
      icon: "💼",
      duracion: "2 horas",
      precio: "25€",
      beneficios: [
        "Comunicación efectiva y asertiva",
        "Trabajo colaborativo y liderazgo",
        "Pensamiento crítico y resolución de problemas",
        "Adaptabilidad y gestión del cambio",
        "Inteligencia emocional en el entorno laboral",
      ],
    },
  ]

  const handleRegistration = (webinarId: string) => {
    setSelectedWebinar(webinarId)
    setRegistrationForm({
      ...registrationForm,
      webinar: webinars.find((w) => w.id === webinarId)?.title || "",
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registro para webinar:", registrationForm)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setSelectedWebinar(null)
      setRegistrationForm({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        webinar: "",
      })
    }, 3000)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Webinars</h1>
          <p className={styles.subtitle}>
            ¿Quieres mejorar tu rendimiento académico o dar el salto profesional al extranjero?
          </p>
          <p className={styles.description}>
            Hemos diseñado una serie de sesiones en vivo pensadas para darte las herramientas reales que necesitas hoy
            mismo.
          </p>
        </div>

        <div className={styles.webinarsGrid}>
          {webinars.map((webinar) => (
            <article key={webinar.id} className={styles.webinarCard}>
              <div className={styles.webinarHeader}>
                <span className={styles.webinarIcon} aria-hidden="true">
                  {webinar.icon}
                </span>
                <h2 className={styles.webinarTitle}>{webinar.title}</h2>
              </div>

              <p className={styles.webinarDescription}>{webinar.description}</p>

              <div className={styles.webinarInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Duración:</span>
                  <span className={styles.infoValue}>{webinar.duracion}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Precio:</span>
                  <span className={styles.infoValuePrice}>{webinar.precio}</span>
                </div>
              </div>

              <div className={styles.beneficiosSection}>
                <h3 className={styles.beneficiosTitle}>Lo que aprenderás:</h3>
                <ul className={styles.beneficiosList}>
                  {webinar.beneficios.map((beneficio, index) => (
                    <li key={index} className={styles.beneficioItem}>
                      <span className={styles.checkIcon} aria-hidden="true">
                        ✓
                      </span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={styles.registerButton}
                onClick={() => handleRegistration(webinar.id)}
                aria-label={`Inscribirme en ${webinar.title}`}
              >
                Inscribirme
              </button>
            </article>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>¿Por qué elegir nuestros webinars?</h2>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaCard}>
              <span className={styles.ctaIcon} aria-hidden="true">
                🎯
              </span>
              <h3>Prácticos y Aplicables</h3>
              <p>Herramientas que puedes usar desde el primer día</p>
            </div>
            <div className={styles.ctaCard}>
              <span className={styles.ctaIcon} aria-hidden="true">
                👥
              </span>
              <h3>Sesiones Interactivas</h3>
              <p>Pregunta y participa en tiempo real</p>
            </div>
            <div className={styles.ctaCard}>
              <span className={styles.ctaIcon} aria-hidden="true">
                📊
              </span>
              <h3>Resultados Comprobados</h3>
              <p>Basados en experiencias reales y casos de éxito</p>
            </div>
          </div>
        </div>
      </div>

      {selectedWebinar && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedWebinar(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-title"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedWebinar(null)}
              aria-label="Cerrar formulario"
            >
              ×
            </button>

            {!showSuccess ? (
              <>
                <h2 id="registration-title" className={styles.modalTitle}>
                  Inscripción al Webinar
                </h2>
                <p className={styles.modalSubtitle}>{registrationForm.webinar}</p>

                <form onSubmit={handleSubmit} className={styles.registrationForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">
                      Nombre <span aria-label="Campo obligatorio">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className={styles.formInput}
                      value={registrationForm.nombre}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, nombre: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="apellidos">
                      Apellidos <span aria-label="Campo obligatorio">*</span>
                    </label>
                    <input
                      id="apellidos"
                      type="text"
                      className={styles.formInput}
                      value={registrationForm.apellidos}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, apellidos: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      Correo Electrónico <span aria-label="Campo obligatorio">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={styles.formInput}
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input
                      id="telefono"
                      type="tel"
                      className={styles.formInput}
                      value={registrationForm.telefono}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, telefono: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Confirmar Inscripción
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <p>
                  <strong>¡Inscripción confirmada!</strong>
                </p>
                <p>Recibirás un correo con todos los detalles del webinar.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
