import React from "react";
import { Award, Shield, Clock, Users } from "lucide-react";
import styles from "./FeaturesSection.module.css";

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: "5 Años de Experiencia",
    description: "Especializados en reparación de dispositivos móviles",
  },
  {
    icon: Shield,
    title: "Garantía de 90 Días",
    description: "Todas nuestras reparaciones incluyen garantía completa",
  },
  {
    icon: Clock,
    title: "Servicio Rápido",
    description: "La mayoría de reparaciones en menos de 30 minutos",
  },
  {
    icon: Users,
    title: "+1000 Clientes Satisfechos",
    description: "Miles de dispositivos reparados exitosamente",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            ¿Por Qué Elegir{" "}
            <span className={styles.titleHighlight}>Sr iPhone?</span>
          </h2>
          <p className={styles.description}>
            Somos tu mejor opción para reparaciones y accesorios de celulares
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={styles.featureCard}>
                <div className={styles.iconContainer}>
                  <IconComponent className={styles.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
