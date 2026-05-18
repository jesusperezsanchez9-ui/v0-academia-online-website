"use client"

import type React from "react"

import { useState } from "react"
import styles from "./clases-particulares.module.css"

const nivelesEducativos = [
  {
    id: "primaria",
    titulo: "Educación Primaria",
    descripcion: "Clases adaptadas para niños de 6 a 12 años con metodología lúdica y participativa.",
    caracteristicas: [
      "Aprendizaje a través del juego",
      "Desarrollo de habilidades básicas",
      "Refuerzo escolar personalizado",
      "Preparación para niveles superiores",
    ],
    icon: "🧒",
    precio: "15€/hora",
    horario: "Lunes a viernes: 16:00 - 20:00",
  },
  {
    id: "adultos",
    titulo: "Educación de Adultos",
    descripcion: "Formación especializada para adultos que desean aprender inglés desde cero o mejorar su nivel.",
    caracteristicas: [
      "Metodología adaptada a adultos",
      "Horarios flexibles",
      "Enfoque práctico y profesional",
      "Apoyo continuo y personalizado",
    ],
    icon: "👨‍🎓",
    precio: "18€/hora",
    horario: "Lunes a domingo: 09:00 - 21:00",
  },
]

const horariosSemanal = [
  { dia: "Lunes", horarios: ["16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00"] },
  { dia: "Martes", horarios: ["16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00"] },
  { dia: "Miércoles", horarios: ["16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00"] },
  { dia: "Jueves", horarios: ["16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00"] },
  { dia: "Viernes", horarios: ["16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00"] },
  { dia: "Sábado", horarios: ["10:00-11:00", "11:00-12:00", "12:00-13:00"] },
  { dia: "Domingo", horarios: ["10:00-11:00", "11:00-12:00"] },
]

const testimonios = [
  {
    id: 1,
    nombre: "María González",
    nivel: "Primaria",
    texto:
      "Mi hijo ha mejorado mucho su inglés. La profesora es muy paciente y sabe cómo mantener su interés en las clases.",
    rating: 5,
  },
  {
    id: 2,
    nombre: "Juan Rodríguez",
    nivel: "Adulto",
    texto:
      "Excelente academia. Las clases son muy personalizadas y he avanzado mucho en poco tiempo. Muy recomendable.",
    rating: 5,
  },
  {
    id: 3,
    nombre: "Laura Martínez",
    nivel: "Primaria",
    texto:
      "Gracias a las clases particulares, mi hija ahora saca mejores notas en el colegio. Muy satisfecha con el servicio.",
    rating: 5,
  },
]

interface BookingFormData {
  nombre: string
  apellidos: string
  email: string
  telefono: string
  tipoServicio: string
  nivel: string
}

export default function ClasesParticulares() {
  const [selectedLevel, setSelectedLevel] = useState("primaria")
  const [expandedSchedule, setExpandedSchedule] = useState<string | null>(null)
  const [reservedSlots, setReservedSlots] = useState<Set<string>>(new Set())

  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null)
  const [bookingForm, setBookingForm] = useState<BookingFormData>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    tipoServicio: "",
    nivel: "",
  })

  const selectedLevelData = nivelesEducativos.find((n) => n.id === selectedLevel)

  const createGoogleCalendarLink = (day: string, timeSlot: string) => {
    const [startTime, endTime] = timeSlot.split("-")
    const today = new Date()
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const targetDayIndex = daysOfWeek.indexOf(day)
    const currentDayIndex = today.getDay()

    let daysUntilTarget = targetDayIndex - currentDayIndex
    if (daysUntilTarget <= 0) daysUntilTarget += 7

    const targetDate = new Date(today)
    targetDate.setDate(today.getDate() + daysUntilTarget)

    const startDateTime = new Date(targetDate)
    const [startHour, startMinute] = startTime.split(":").map(Number)
    startDateTime.setHours(startHour, startMinute, 0, 0)

    const endDateTime = new Date(targetDate)
    const [endHour, endMinute] = endTime.split(":").map(Number)
    endDateTime.setHours(endHour, endMinute, 0, 0)

    const formatDateTime = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "")
    }

    const title = `Clase de Inglés - ${selectedLevelData?.titulo || "Particular"}`
    const details = `Clase particular de inglés en modalidad online.`
    const location = "Online (el enlace se enviará por email)"

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDateTime(startDateTime)}/${formatDateTime(endDateTime)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`

    return googleCalendarUrl
  }

  const handleReserveSlot = (day: string, timeSlot: string) => {
    const slotKey = `${day}-${timeSlot}`

    if (reservedSlots.has(slotKey)) {
      alert("Este horario ya ha sido reservado")
      return
    }

    setSelectedSlot({ day, time: timeSlot })
    setShowBookingForm(true)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!bookingForm.nombre || !bookingForm.apellidos || !bookingForm.email || !bookingForm.tipoServicio) {
      alert("Por favor, completa todos los campos obligatorios")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(bookingForm.email)) {
      alert("Por favor, introduce un email válido")
      return
    }

    if (selectedSlot) {
      const slotKey = `${selectedSlot.day}-${selectedSlot.time}`
      setReservedSlots((prev) => new Set(prev).add(slotKey))

      const googleCalendarLink = createGoogleCalendarLink(selectedSlot.day, selectedSlot.time)
      window.open(googleCalendarLink, "_blank")
    }

    alert(
      `Reserva confirmada para ${bookingForm.nombre} ${bookingForm.apellidos}.\n\nServicio: ${bookingForm.tipoServicio}\nNivel: ${bookingForm.nivel}\nDía: ${selectedSlot?.day}\nHorario: ${selectedSlot?.time}\n\nRedirigiendo al método de pago...`,
    )

    setShowBookingForm(false)
    setBookingForm({
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      tipoServicio: "",
      nivel: "",
    })
    setSelectedSlot(null)
  }

  const closeBookingForm = () => {
    setShowBookingForm(false)
    setSelectedSlot(null)
  }

  return (
    <section className={styles.section} aria-labelledby="clases-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 id="clases-heading" className={styles.title}>
            Clases Particulares de Inglés
          </h1>
          <p className={styles.subtitle}>
            Enseñanza personalizada adaptada a las necesidades específicas de cada estudiante
          </p>
        </header>

        <div className={styles.personalizedApproach}>
          <div className={styles.approachContent}>
            <h2>Enfoque Personalizado para Cada Alumno</h2>
            <p>
              Entendemos que cada estudiante tiene ritmos de aprendizaje únicos, fortalezas diferentes y objetivos
              específicos. Por eso, nuestras clases particulares se adaptan completamente a las necesidades individuales
              de cada alumno.
            </p>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  🎯
                </span>
                <div>
                  <h3>Objetivos Claros</h3>
                  <p>Definimos metas específicas y medibles para cada estudiante</p>
                </div>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  📊
                </span>
                <div>
                  <h3>Seguimiento Continuo</h3>
                  <p>Monitoreo constante del progreso y ajustes en la metodología</p>
                </div>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  🔄
                </span>
                <div>
                  <h3>Flexibilidad Total</h3>
                  <p>Adaptamos contenido, ritmo y horarios según tus necesidades</p>
                </div>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  💻
                </span>
                <div>
                  <h3>Clases Online</h3>
                  <p>Enseñanza 100% online desde cualquier lugar del mundo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.levelSelector}>
          <h2>Selecciona tu Nivel Educativo</h2>
          <div className={styles.levelButtonsContainer}>
            {nivelesEducativos.map((nivel) => (
              <button
                key={nivel.id}
                className={`${styles.levelSelectorButton} ${selectedLevel === nivel.id ? styles.active : ""}`}
                onClick={() => setSelectedLevel(nivel.id)}
                aria-pressed={selectedLevel === nivel.id}
                aria-label={`Seleccionar ${nivel.titulo}`}
              >
                <span className={styles.selectorIcon}>{nivel.icon}</span>
                <span>{nivel.titulo}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedLevelData && (
          <div className={styles.selectedLevelDetails}>
            <div className={styles.detailsGrid}>
              <div className={styles.detailsCard}>
                <div className={styles.detailsHeader}>
                  <h3>Descripción</h3>
                </div>
                <p>{selectedLevelData.descripcion}</p>
              </div>

              <div className={styles.detailsCard}>
                <div className={styles.detailsHeader}>
                  <h3>Precio</h3>
                </div>
                <p className={styles.priceHighlight}>{selectedLevelData.precio}</p>
                <p className={styles.priceNote}>Primera clase de evaluación: Gratis</p>
              </div>

              <div className={styles.detailsCard}>
                <div className={styles.detailsHeader}>
                  <h3>Disponibilidad</h3>
                </div>
                <p>{selectedLevelData.horario}</p>
              </div>
            </div>

            <div className={styles.characteristicsSection}>
              <h3>Características principales:</h3>
              <div className={styles.characteristicsGrid}>
                {selectedLevelData.caracteristicas.map((caracteristica) => (
                  <div key={caracteristica} className={styles.characteristicItem}>
                    <span className={styles.checkmark} aria-hidden="true">
                      ✓
                    </span>
                    <span>{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={styles.educationLevels}>
          <h2>Comparativa de Programas</h2>
          <div className={styles.levelsGrid}>
            {nivelesEducativos.map((nivel) => (
              <article key={nivel.id} className={styles.levelCard}>
                <div className={styles.levelHeader}>
                  <span className={styles.levelIcon} aria-hidden="true">
                    {nivel.icon}
                  </span>
                  <h3 className={styles.levelTitle}>{nivel.titulo}</h3>
                </div>

                <p className={styles.levelDescription}>{nivel.descripcion}</p>

                <div className={styles.characteristics}>
                  <h4>Características principales:</h4>
                  <ul className={styles.characteristicsList}>
                    {nivel.caracteristicas.map((caracteristica) => (
                      <li key={caracteristica}>
                        <span className={styles.checkmark} aria-hidden="true">
                          ✓
                        </span>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={styles.levelButton}>Solicitar información</button>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.scheduleSection}>
          <h2>Horarios Disponibles</h2>
          <p className={styles.scheduleSubtitle}>
            Selecciona un día para ver los horarios disponibles. Al reservar, se abrirá Google Calendar automáticamente.
          </p>
          <div className={styles.scheduleList}>
            {horariosSemanal.map((item) => (
              <div key={item.dia} className={styles.scheduleDay}>
                <button
                  className={styles.scheduleDayButton}
                  onClick={() => setExpandedSchedule(expandedSchedule === item.dia ? null : item.dia)}
                  aria-expanded={expandedSchedule === item.dia}
                  aria-controls={`schedule-${item.dia}`}
                >
                  <span className={styles.dayName}>{item.dia}</span>
                  <span className={styles.dayExpander} aria-hidden="true">
                    {expandedSchedule === item.dia ? "−" : "+"}
                  </span>
                </button>
                {expandedSchedule === item.dia && (
                  <div id={`schedule-${item.dia}`} className={styles.scheduleContent}>
                    <div className={styles.timeSlotGrid}>
                      {item.horarios.map((timeSlot) => {
                        const slotKey = `${item.dia}-${timeSlot}`
                        const isReserved = reservedSlots.has(slotKey)

                        return (
                          <div key={timeSlot} className={styles.timeSlotItem}>
                            <span className={styles.timeSlotText}>{timeSlot}</span>
                            <button
                              className={`${styles.reserveButton} ${isReserved ? styles.reservedButton : ""}`}
                              onClick={() => handleReserveSlot(item.dia, timeSlot)}
                              disabled={isReserved}
                              aria-label={`Reservar clase el ${item.dia} de ${timeSlot}`}
                            >
                              {isReserved ? "Reservado" : "Reservar"}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.testimonialsSection}>
          <h2>Opiniones de Nuestros Estudiantes</h2>
          <div className={styles.testimonialsGrid}>
            {testimonios.map((testimonial) => (
              <article key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.ratingStars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.texto}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.nombre}</strong>
                  <span className={styles.testimonialLevel}>{testimonial.nivel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.methodology}>
          <h2>Nuestra Metodología</h2>
          <div className={styles.methodologySteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Evaluación Inicial</h3>
                <p>Analizamos el nivel actual y identificamos fortalezas y áreas de mejora</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Plan Personalizado</h3>
                <p>Diseñamos un programa de estudios específico para cada estudiante</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Seguimiento Activo</h3>
                <p>Monitorizamos el progreso y ajustamos la metodología según sea necesario</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Evaluación Continua</h3>
                <p>Realizamos evaluaciones regulares para medir el avance y celebrar logros</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>¿Listo para comenzar tu viaje de aprendizaje personalizado?</h2>
          <p>Contacta con nosotros para una evaluación gratuita y descubre cómo podemos ayudarte</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Solicitar evaluación gratuita</button>
            <button className={styles.secondaryButton}>Ver horarios disponibles</button>
          </div>
        </div>

        {showBookingForm && (
          <div className={styles.modalOverlay} onClick={closeBookingForm}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={closeBookingForm} aria-label="Cerrar formulario">
                ×
              </button>

              <h2 className={styles.modalTitle}>Formulario de Reserva</h2>
              {selectedSlot && (
                <p className={styles.modalSubtitle}>
                  {selectedSlot.day} - {selectedSlot.time}
                </p>
              )}

              <form onSubmit={handleFormSubmit} className={styles.bookingForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">
                      Nombre <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={bookingForm.nombre}
                      onChange={handleFormChange}
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="apellidos">
                      Apellidos <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      value={bookingForm.apellidos}
                      onChange={handleFormChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleFormChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={bookingForm.telefono}
                    onChange={handleFormChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="tipoServicio">
                    Tipo de Servicio <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="tipoServicio"
                    name="tipoServicio"
                    value={bookingForm.tipoServicio}
                    onChange={handleFormChange}
                    required
                    className={styles.formSelect}
                  >
                    <option value="">Selecciona una opción</option>
                    <optgroup label="Certificaciones">
                      <option value="Certificación - Aptis">Aptis</option>
                      <option value="Certificación - Trinity">Trinity</option>
                      <option value="Certificación - Cambridge">Cambridge</option>
                      <option value="Certificación - EOI">EOI</option>
                    </optgroup>
                    <optgroup label="Clases Particulares">
                      <option value="Clases Particulares - Niños">Niños (Educación Primaria)</option>
                      <option value="Clases Particulares - Adultos">Adultos</option>
                    </optgroup>
                  </select>
                </div>

                {bookingForm.tipoServicio && (
                  <div className={styles.formGroup}>
                    <label htmlFor="nivel">
                      Nivel <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="nivel"
                      name="nivel"
                      value={bookingForm.nivel}
                      onChange={handleFormChange}
                      required
                      className={styles.formSelect}
                    >
                      <option value="">Selecciona un nivel</option>
                      {bookingForm.tipoServicio.startsWith("Certificación - Aptis") && (
                        <>
                          <option value="General">General</option>
                          <option value="for Teachers">for Teachers</option>
                          <option value="for Teens">for Teens</option>
                        </>
                      )}
                      {bookingForm.tipoServicio.startsWith("Certificación - Trinity") && (
                        <>
                          <option value="GESE">GESE</option>
                          <option value="ISE">ISE</option>
                          <option value="SELT">SELT</option>
                        </>
                      )}
                      {bookingForm.tipoServicio.startsWith("Certificación - Cambridge") && (
                        <>
                          <option value="KET (A2)">KET (A2)</option>
                          <option value="PET (B1)">PET (B1)</option>
                          <option value="FCE (B2)">FCE (B2)</option>
                          <option value="CAE (C1)">CAE (C1)</option>
                          <option value="CPE (C2)">CPE (C2)</option>
                        </>
                      )}
                      {bookingForm.tipoServicio.startsWith("Certificación - EOI") && (
                        <>
                          <option value="Básico">Básico</option>
                          <option value="Intermedio">Intermedio</option>
                          <option value="Avanzado">Avanzado</option>
                        </>
                      )}
                      {bookingForm.tipoServicio.startsWith("Clases Particulares") && (
                        <>
                          <option value="Principiante">Principiante</option>
                          <option value="Elemental">Elemental</option>
                          <option value="Pre-intermedio">Pre-intermedio</option>
                          <option value="Intermedio">Intermedio</option>
                          <option value="Intermedio alto">Intermedio alto</option>
                          <option value="Avanzado">Avanzado</option>
                        </>
                      )}
                    </select>
                  </div>
                )}

                <div className={styles.formActions}>
                  <button type="button" onClick={closeBookingForm} className={styles.cancelButton}>
                    Cancelar
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Proceder al Pago
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
