import React from "react";
import { EmergencyForm } from "../EmergencyForm/EmergencyForm";
import styles from "./EmergencySection.module.css";

export const EmergencySection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>🚨 SERVICIO DE EMERGENCIA</div>
          <h2 className={styles.title}>
            ¿Tu Celular se Dañó? ¡Te Ayudamos Ya!
          </h2>
          <p className={styles.description}>
            Solicita reparación a domicilio y nuestro técnico llegará a tu
            ubicación en menos de 1 hora
          </p>
        </div>

        <div className={styles.formContainer}>
          <EmergencyForm />
        </div>
      </div>
    </section>
  );
};
