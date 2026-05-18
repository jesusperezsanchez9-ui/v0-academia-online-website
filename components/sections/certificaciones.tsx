import styles from "./certificaciones.module.css"

const certificaciones = [
  {
    nombre: "Aptis",
    descripcion: "Certificación flexible del British Council con resultados rápidos.",
    niveles: "A1-C2",
    modalidades: ["General", "for Teachers", "for Teens"],
    duracion: "2h 30min",
    ventajas: ["Resultados en 48-72 horas", "Fechas flexibles", "Formato innovador"],
  },
  {
    nombre: "Trinity",
    descripcion: "Exámenes de Trinity College London con enfoque comunicativo.",
    niveles: "A1-C2",
    modalidades: ["GESE", "ISE", "SELT"],
    duracion: "Variable",
    ventajas: ["Enfoque práctico", "Reconocimiento internacional", "Examinadores nativos"],
  },
  {
    nombre: "Cambridge",
    descripcion: "Los exámenes más prestigiosos y reconocidos mundialmente.",
    niveles: "A2-C2",
    modalidades: ["KET", "PET", "FCE", "CAE", "CPE"],
    duracion: "3-4 horas",
    ventajas: ["Máximo prestigio", "Validez permanente", "Reconocimiento global"],
  },
  {
    nombre: "EOI",
    descripcion: "Escuelas Oficiales de Idiomas - Certificación oficial española.",
    niveles: "A2-C2",
    modalidades: ["Básico", "Intermedio", "Avanzado"],
    duracion: "Variable",
    ventajas: ["Titulación oficial", "Acceso a oposiciones", "Reconocimiento nacional"],
  },
]

export default function Certificaciones() {
  return (
    <section className={styles.section} aria-labelledby="certificaciones-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 id="certificaciones-heading" className={styles.title}>
            Certificaciones Oficiales
          </h1>
          <p className={styles.subtitle}>
            Prepárate para obtener tu certificación oficial de inglés con nuestro acompañamiento especializado
          </p>
        </header>

        <div className={styles.onlineAdvantages}>
          <h2>Ventajas de la Modalidad Online</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantage}>
              <span className={styles.advantageIcon} aria-hidden="true">
                🌍
              </span>
              <h3>Acceso desde cualquier lugar</h3>
              <p>Estudia desde la comodidad de tu hogar o cualquier ubicación con conexión a internet</p>
            </div>
            <div className={styles.advantage}>
              <span className={styles.advantageIcon} aria-hidden="true">
                ⏰
              </span>
              <h3>Flexibilidad horaria</h3>
              <p>Adapta tu horario de estudio a tus necesidades personales y profesionales</p>
            </div>
            <div className={styles.advantage}>
              <span className={styles.advantageIcon} aria-hidden="true">
                👥
              </span>
              <h3>Acompañamiento individual</h3>
              <p>Atención personalizada y seguimiento continuo de tu progreso</p>
            </div>
            <div className={styles.advantage}>
              <span className={styles.advantageIcon} aria-hidden="true">
                💰
              </span>
              <h3>Mejor relación calidad-precio</h3>
              <p>Formación de calidad sin costes adicionales de desplazamiento</p>
            </div>
          </div>
        </div>

        <div className={styles.certificationsGrid}>
          {certificaciones.map((cert, index) => (
            <article key={cert.nombre} className={styles.certificationCard}>
              <header className={styles.cardHeader}>
                <h3 className={styles.certificationName}>{cert.nombre}</h3>
                <span className={styles.certificationLevels} aria-label={`Niveles disponibles: ${cert.niveles}`}>
                  {cert.niveles}
                </span>
              </header>

              <div className={styles.cardContent}>
                <p className={styles.description}>{cert.descripcion}</p>

                <div className={styles.details}>
                  <div className={styles.detail}>
                    <strong>Modalidades:</strong>
                    <ul className={styles.modalityList}>
                      {cert.modalidades.map((modalidad) => (
                        <li key={modalidad}>{modalidad}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detail}>
                    <strong>Duración del examen:</strong>
                    <span>{cert.duracion}</span>
                  </div>
                </div>

                <div className={styles.advantages}>
                  <strong>Ventajas principales:</strong>
                  <ul className={styles.advantagesList}>
                    {cert.ventajas.map((ventaja) => (
                      <li key={ventaja}>
                        <span className={styles.checkmark} aria-hidden="true">
                          ✓
                        </span>
                        {ventaja}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className={styles.cardFooter}>
                <button className={styles.infoButton} aria-describedby={`info-${index}`}>
                  Más información
                </button>
                <p id={`info-${index}`} className={styles.srOnly}>
                  Solicita más información sobre la certificación {cert.nombre}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>¿Listo para comenzar tu preparación?</h2>
          <p>Contáctanos y te ayudaremos a elegir la certificación que mejor se adapte a tus objetivos</p>
          <button className={styles.ctaButton}>Solicitar asesoría gratuita</button>
        </div>
      </div>
    </section>
  )
}
