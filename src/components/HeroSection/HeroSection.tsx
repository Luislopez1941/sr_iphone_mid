import React from "react";
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react";
import { CallButton } from "../CallButton/CallButton";
import styles from "./HeroSection.module.css";

export const HeroSection: React.FC = () => {
  const handleLocationClick = () => {
    const locationSection = document.getElementById("location");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmergencyClick = () => {
    const emergencySection = document.getElementById("emergency");
    if (emergencySection) {
      emergencySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <Zap className={styles.badgeIcon} />
            <span>Tecnología Avanzada</span>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            <span className={styles.titleMain}>Reparación</span>
            <span className={styles.titleAccent}>Inteligente</span>
            <span className={styles.titleSub}>para tu futuro digital</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Experiencia premium en reparación de dispositivos móviles con
            tecnología de última generación y servicio personalizado.
          </p>

          {/* CTA Buttons */}
          <div className={styles.buttons}>
            <CallButton
              variant="primary"
              size="lg"
              className={styles.primaryButton}
            />
            <button
              onClick={handleEmergencyClick}
              className={styles.emergencyButton}
            >
              <span>Servicio 24/7</span>
              <ArrowRight className={styles.arrowIcon} />
            </button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5K+</div>
              <div className={styles.statLabel}>Dispositivos Reparados</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15min</div>
              <div className={styles.statLabel}>Tiempo Promedio</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statLabel}>Satisfacción</div>
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Smartphone />
            </div>
            <h3 className={styles.featureTitle}>Diagnóstico IA</h3>
            <p className={styles.featureDescription}>
              Análisis automatizado para identificar problemas al instante
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Zap />
            </div>
            <h3 className={styles.featureTitle}>Reparación Express</h3>
            <p className={styles.featureDescription}>
              Procesos optimizados para máxima eficiencia y calidad
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Shield />
            </div>
            <h3 className={styles.featureTitle}>Garantía Premium</h3>
            <p className={styles.featureDescription}>
              Cobertura extendida con repuestos originales certificados
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>
    </section>
  );
};
