"use client"

import { useState } from "react"
import styles from "./trabajar-irlanda.module.css"

const pasos = [
  {
    numero: 1,
    titulo: "Requisitos Iniciales",
    descripcion: "Verificación de títulos y documentación necesaria",
    detalles: [
      "Título universitario en Educación Primaria o Infantil",
      "Certificado de inglés (recomendable B1)",
      "Certificado de antecedentes penales",
      "Certificado médico",
      "CV actualizado en inglés",
    ],
  },
  {
    numero: 2,
    titulo: "Validación de Títulos",
    descripcion: "Proceso de reconocimiento académico en Irlanda",
    detalles: [
      "Solicitud al Teaching Council of Ireland (para escuelas de educación primaria, secundaria y necesidades especiales)",
      "Traducción jurada de documentos",
      "Apostilla de La Haya",
      "Evaluación académica",
      "Tiempo estimado: 3-6 meses",
    ],
  },
  {
    numero: 3,
    titulo: "Búsqueda de Empleo",
    descripcion: "Estrategias efectivas para encontrar trabajo",
    detalles: [
      "Registro en portales especializados",
      "Networking con otros profesionales",
      "Contacto directo con colegios",
      "Preparación para entrevistas",
      "Flexibilidad geográfica",
    ],
  },
  {
    numero: 4,
    titulo: "Trámites Administrativos",
    descripción: "Gestiones necesarias una vez conseguido el trabajo",
    detalles: [
      "Solicitud del PPS Number",
      "Apertura de cuenta bancaria",
      "Registro en Revenue (Hacienda)",
      "Búsqueda de alojamiento",
      "Seguro médico privado",
    ],
  },
]

const ventajas = [
  {
    titulo: "Sistema Educativo Avanzado",
    descripcion: "Métodos pedagógicos innovadores y recursos de última generación",
    icon: "🎓",
  },
  {
    titulo: "Salarios Competitivos",
    descripcion: "Remuneración superior a la media europea para profesores",
    icon: "💰",
  },
  {
    titulo: "Desarrollo Profesional",
    descripcion: "Oportunidades continuas de formación y crecimiento",
    icon: "📈",
  },
  {
    titulo: "Calidad de Vida",
    descripcion: "Equilibrio trabajo-vida personal en un entorno multicultural",
    icon: "🌟",
  },
]

export default function TrabajarIrlanda() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.nombre && formData.email) {
      console.log("Formulario enviado:", formData)
      setSubmitted(true)
      setTimeout(() => {
        setShowForm(false)
        setSubmitted(false)
        setFormData({ nombre: "", email: "", telefono: "" })
      }, 2000)
    }
  }

  const handleCancel = () => {
    setShowForm(false)
    setFormData({ nombre: "", email: "", telefono: "" })
  }

  return (
    <section className={styles.section} aria-labelledby="irlanda-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 id="irlanda-heading" className={styles.title}>
            Trabajar como Profesor en Irlanda
          </h1>
          <p className={styles.subtitle}>
            Guía completa para profesores de Educación Primaria e Infantil que desean desarrollar su carrera en Irlanda
          </p>
        </header>

        <div className={styles.intro}>
          <div className={styles.introContent}>
            <h2>¿Por qué elegir Irlanda?</h2>
            <p>
              Irlanda ofrece excelentes oportunidades para profesionales de la educación españoles. Con un sistema
              educativo reconocido internacionalmente y una fuerte demanda de profesores cualificados, es el destino
              ideal para expandir tu carrera profesional.
            </p>
          </div>
          <div className={styles.flag}>
            <span className={styles.flagEmoji} role="img" aria-label="Bandera de Irlanda">
              🇮🇪
            </span>
          </div>
        </div>

        <div className={styles.advantages}>
          <h2>Ventajas de Trabajar en Irlanda</h2>
          <div className={styles.advantagesGrid}>
            {ventajas.map((ventaja) => (
              <div key={ventaja.titulo} className={styles.advantage}>
                <span className={styles.advantageIcon} aria-hidden="true">
                  {ventaja.icon}
                </span>
                <h3>{ventaja.titulo}</h3>
                <p>{ventaja.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.process}>
          <h2>Proceso Paso a Paso</h2>
          <div className={styles.steps}>
            {pasos.map((paso, index) => (
              <article key={paso.numero} className={styles.step}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>{paso.numero}</div>
                  <div className={styles.stepTitle}>
                    <h3>{paso.titulo}</h3>
                    <p className={styles.stepDescription}>{paso.descripcion}</p>
                  </div>
                </div>

                <div className={styles.stepDetails}>
                  <h4>Requisitos y documentación:</h4>
                  <ul className={styles.detailsList}>
                    {paso.detalles.map((detalle) => (
                      <li key={detalle}>
                        <span className={styles.checkmark} aria-hidden="true">
                          ✓
                        </span>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < pasos.length - 1 && <div className={styles.stepConnector} aria-hidden="true"></div>}
              </article>
            ))}
          </div>
        </div>

        <div className={styles.support}>
          <h2>Nuestro Servicio de Asesoría</h2>
          <div className={styles.supportContent}>
            <div className={styles.supportText}>
              <p>
                Ofrecemos asesoría personalizada para acompañarte en todo el proceso de búsqueda de empleo en Irlanda.
                Nuestro equipo de expertos te ayudará desde la validación de títulos hasta la preparación para
                entrevistas.
              </p>

              <div className={styles.services}>
                <h3>¿Qué incluye nuestro servicio?</h3>
                <ul className={styles.servicesList}>
                  <li>Evaluación inicial de tu perfil profesional</li>
                  <li>Asesoramiento sobre validación de títulos</li>
                  <li>Preparación y optimización del CV</li>
                  <li>Simulacros de entrevistas</li>
                  <li>Contactos con colegios irlandeses</li>
                  <li>Seguimiento durante todo el proceso</li>
                </ul>
              </div>
            </div>

            <div className={styles.professors}>
              <h3>Profesores Colocados</h3>
              <p>150+ profesores han encontrado trabajo en Irlanda con nuestra ayuda.</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>¿Listo para el siguiente paso?</h2>
          <p>
            Apúntate a nuestra charla informativa por solo 20€ y descubre cómo podemos ayudarte a conseguir trabajo en
            Irlanda
          </p>

          {!showForm ? (
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton} onClick={() => setShowForm(true)}>
                Apuntarme a la Charla Informativa
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              {submitted ? (
                <div style={{ color: "white", textAlign: "center", padding: "1rem" }}>
                  <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>¡Gracias por tu interés!</p>
                  <p>Te enviaremos los detalles de la charla a tu correo electrónico.</p>
                </div>
              ) : (
                <>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+34 xxx xx xx xx"
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.formSubmitButton}>
                      Apuntarme
                    </button>
                    <button type="button" className={styles.formCancelButton} onClick={handleCancel}>
                      Cancelar
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
