import React from "react";
import styles from "./FinalCTASection.module.css";

export const FinalCTASection: React.FC = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+5512345678";
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola! Necesito información sobre reparaciones",
    );
    window.open(`https://wa.me/5512345678?text=${message}`, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Listo para Reparar tu{" "}
          <span className={styles.titleHighlight}>Dispositivo?</span>
        </h2>
        <p className={styles.description}>
          No esperes más. Contáctanos ahora y recupera tu celular en tiempo
          récord.
        </p>

        <div className={styles.buttons}>
          <button onClick={handleCallClick} className={styles.primaryButton}>
            Llamar Ahora: (55) 1234-5678
          </button>
          <button
            onClick={handleWhatsAppClick}
            className={styles.secondaryButton}
          >
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
