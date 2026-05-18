"use client"

import type React from "react"

import { useState } from "react"
import styles from "./contacto.module.css"

interface FormData {
  nombre: string
  email: string
  telefono: string
  asunto: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  mensaje?: string
}

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio"
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres"
    }

    return newErrors
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error específico cuando el usuario comience a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = validateForm()
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulamos el envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.section} aria-labelledby="contacto-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 id="contacto-heading" className={styles.title}>
            Contacta con Nosotros
          </h1>
          <p className={styles.subtitle}>
            ¿Tienes alguna pregunta o quieres más información? Estamos aquí para ayudarte
          </p>
        </header>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Información de Contacto</h2>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  📧
                </span>
                <div>
                  <h3>Email</h3>
                  <p>info@englishacademy.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  📱
                </span>
                <div>
                  <h3>Teléfono</h3>
                  <p>+34 123 456 789</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  ⏰
                </span>
                <div>
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  🌐
                </span>
                <div>
                  <h3>Modalidad</h3>
                  <p>100% Online</p>
                  <p>Clases desde cualquier lugar</p>
                </div>
              </div>
            </div>

            <div className={styles.responseTime}>
              <h3>Tiempo de Respuesta</h3>
              <p>
                Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas. Para consultas
                urgentes, no dudes en llamarnos directamente.
              </p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Envíanos un Mensaje</h2>

            {submitStatus === "success" && (
              <div className={styles.successMessage} role="alert">
                <span className={styles.successIcon} aria-hidden="true">
                  ✓
                </span>
                ¡Mensaje enviado correctamente! Te responderemos pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage} role="alert">
                <span className={styles.errorIcon} aria-hidden="true">
                  ⚠
                </span>
                Ha ocurrido un error. Por favor, inténtalo de nuevo.
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.nombre ? styles.inputError : ""}`}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  aria-invalid={!!errors.nombre}
                />
                {errors.nombre && (
                  <span id="nombre-error" className={styles.fieldError} role="alert">
                    {errors.nombre}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span id="email-error" className={styles.fieldError} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefono" className={styles.label}>
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="asunto" className={styles.label}>
                  Asunto
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="informacion-general">Información general</option>
                  <option value="certificaciones">Certificaciones</option>
                  <option value="clases-particulares">Clases particulares</option>
                  <option value="trabajar-irlanda">Trabajar en Irlanda</option>
                  <option value="erasmus">Erasmus+</option>
                  <option value="cursos-charlas">Webinars</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje" className={styles.label}>
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  className={`${styles.textarea} ${errors.mensaje ? styles.inputError : ""}`}
                  aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                  aria-invalid={!!errors.mensaje}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
                {errors.mensaje && (
                  <span id="mensaje-error" className={styles.fieldError} role="alert">
                    {errors.mensaje}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
                aria-describedby="submit-help"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              <p id="submit-help" className={styles.submitHelp}>
                Los campos marcados con * son obligatorios
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
