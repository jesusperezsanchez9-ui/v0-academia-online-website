import styles from "./nuestro-metodo.module.css"

export default function NuestroMetodo() {
  return (
    <section className={styles.section} aria-labelledby="metodo-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 id="metodo-heading" className={styles.title}>
            Nuestro Método de Enseñanza
          </h1>
          <p className={styles.subtitle}>Un enfoque personalizado que se adapta a tu vida y tus objetivos</p>
        </div>

        <div className={styles.pillarsContainer}>
          <div className={styles.pillarSection}>
            <div className={styles.pillarHeader}>
              <div className={styles.pillarIcon} aria-hidden="true">
                ⏰
              </div>
              <h2>1. Tu ritmo, tus reglas</h2>
            </div>
            <div className={styles.pillarContent}>
              <div className={styles.feature}>
                <h3>Adaptabilidad Horaria Total</h3>
                <p>
                  Entendemos tu ritmo de vida. Por eso, ofrecemos una flexibilidad real para que puedas programar tus
                  sesiones en los huecos que mejor te vengan, sin estrés ni complicaciones.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>Clases Individualizadas</h3>
                <p>
                  No eres un número más. Adaptamos el contenido y la velocidad de aprendizaje a tus objetivos
                  personales, asegurando que cada minuto de clase sea productivo y centrado en lo que tú necesitas
                  reforzar.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pillarSection}>
            <div className={styles.pillarHeader}>
              <div className={styles.pillarIcon} aria-hidden="true">
                👥
              </div>
              <h2>2. Comunidad y Comunicación</h2>
            </div>
            <div className={styles.pillarContent}>
              <div className={styles.feature}>
                <h3>Fomento de la Competencia Comunicativa</h3>
                <p>
                  El inglés se aprende hablando. Creamos dinámicas grupales diseñadas específicamente para que pierdas
                  el miedo, ganes fluidez y desarrolles tus habilidades sociales en un entorno seguro y colaborativo.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>Webinars Educativos Exclusivos</h3>
                <p>
                  Accede periódicamente a seminarios online sobre técnicas de estudio, preparación de exámenes oficiales
                  y cultura anglosajona para complementar tu formación.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pillarSection}>
            <div className={styles.pillarHeader}>
              <div className={styles.pillarIcon} aria-hidden="true">
                💻
              </div>
              <h2>3. Tecnología a tu Servicio</h2>
            </div>
            <div className={styles.pillarContent}>
              <div className={styles.feature}>
                <h3>Plataforma Multiplataforma 24/7</h3>
                <p>
                  Estudia donde quieras y cuando quieras. Nuestra plataforma online es totalmente responsive,
                  permitiéndote acceder a materiales, ejercicios y grabaciones desde tu ordenador, tablet o smartphone.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pillarSection}>
            <div className={styles.pillarHeader}>
              <div className={styles.pillarIcon} aria-hidden="true">
                🌍
              </div>
              <h2>4. Más allá del Idioma: Tu Futuro Profesional</h2>
            </div>
            <div className={styles.pillarContent}>
              <div className={styles.feature}>
                <h3>Asesoría para Trabajar en Irlanda</h3>
                <p>
                  ¿Sueñas con una experiencia laboral en la Isla Esmeralda? Te guiamos en todo el proceso: desde la
                  adaptación de tu CV al mercado irlandés hasta consejos prácticos para tu aterrizaje profesional.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>Impulso a Proyectos Erasmus+</h3>
                <p>
                  Ayudamos a los más jóvenes a encontrar y solicitar proyectos Erasmus+. Te acompañamos en la búsqueda
                  de oportunidades de movilidad internacional que enriquecerán tu perfil personal y académico.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>¿Listo para comenzar?</h2>
          <p>Descubre cómo nuestro método puede transformar tu aprendizaje del inglés</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Solicitar prueba de nivel</button>
            <button className={styles.secondaryButton}>Ver cursos disponibles</button>
          </div>
        </div>
      </div>
    </section>
  )
}
