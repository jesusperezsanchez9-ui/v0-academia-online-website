export default function Erasmus() {
  return (
    <section className={styles.erasmus}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1>Erasmus+</h1>
          <p className={styles.subtitle}>
            Descubre las oportunidades de movilidad internacional que ofrece Erasmus+ para jóvenes. Experiencias únicas
            de aprendizaje, voluntariado e intercambio cultural en toda Europa.
          </p>
        </div>

        {/* ¿Qué es Erasmus+? */}
        <div className={styles.intro}>
          <h2>¿Qué es Erasmus+?</h2>
          <p>
            Erasmus+ es el programa de la Unión Europea para la educación, formación, juventud y deporte. Ofrece
            oportunidades de estudio, formación, intercambio y voluntariado en países europeos y más allá.
          </p>
        </div>

        {/* Programas Disponibles */}
        <div className={styles.programs}>
          <h2>Programas Disponibles</h2>

          {/* Intercambios Juveniles */}
          <div className={styles.programCard}>
            <div className={styles.programHeader}>
              <div className={styles.programIcon} aria-hidden="true">
                🌍
              </div>
              <h3>1. Intercambios Juveniles (Youth Exchanges)</h3>
            </div>

            <p className={styles.programDescription}>
              Son encuentros de grupos de jóvenes (13 a 30 años) de diferentes países para trabajar sobre un tema
              específico (medio ambiente, arte, política, etc.) durante 5 a 21 días.
            </p>

            <div className={styles.programDetails}>
              <div className={styles.detailItem}>
                <strong>Ideal para:</strong>
                <span>Estudiantes de secundaria o jóvenes sin experiencia previa.</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Lo que cubre:</strong>
                <span>Viaje, alojamiento y manutención.</span>
              </div>
            </div>
          </div>

          {/* Voluntariado */}
          <div className={styles.programCard}>
            <div className={styles.programHeader}>
              <div className={styles.programIcon} aria-hidden="true">
                🤝
              </div>
              <h3>2. Voluntariado (Cuerpo Europeo de Solidaridad)</h3>
            </div>

            <p className={styles.programDescription}>
              Aunque tiene su propio nombre, forma parte de la familia de programas de la UE. Permite a jóvenes de 18 a
              30 años realizar un voluntariado de 2 a 12 meses en otro país.
            </p>

            <div className={styles.programDetails}>
              <div className={styles.detailItem}>
                <strong>Ideal para:</strong>
                <span>Recién graduados o personas en año sabático.</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Lo que cubre:</strong>
                <span>Gastos de estancia, dinero de bolsillo (pocket money) y seguro médico.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cómo Participar */}
        <div className={styles.howToParticipate}>
          <h2>¿Cómo Participar?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Investiga</h3>
              <p>
                Explora las oportunidades disponibles en el portal oficial de Erasmus+ y otras plataformas asociadas.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Selecciona</h3>
              <p>Elige el programa que mejor se adapte a tus intereses, edad y disponibilidad de tiempo.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Aplica</h3>
              <p>Completa el proceso de solicitud siguiendo las instrucciones específicas de cada programa.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Prepárate</h3>
              <p>Una vez aceptado, prepara tu documentación y disfruta de esta experiencia internacional única.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>¿Necesitas Ayuda para Aplicar?</h2>
          <p>
            Ofrecemos asesoría personalizada para ayudarte a encontrar y aplicar al programa Erasmus+ que mejor se
            ajuste a tus objetivos. Desde la elección del proyecto hasta la preparación de tu candidatura.
          </p>
          <button className={styles.ctaButton} aria-label="Solicitar asesoría para Erasmus+">
            Solicitar Asesoría
          </button>
        </div>
      </div>
    </section>
  )
}

import styles from "./erasmus.module.css"
