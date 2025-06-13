import React from "react";
import {
  Smartphone,
  Tablet,
  Headphones,
  Cable,
  Shield,
  Battery,
  Monitor,
  Zap,
} from "lucide-react";
import styles from "./ServicesSection.module.css";

interface RepairService {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  price: string;
}

interface Accessory {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  featured: boolean;
}

const repairServices: RepairService[] = [
  {
    icon: Smartphone,
    title: "Reparación de Pantallas",
    description: "Pantallas rotas, táctil dañado, LCD o OLED",
    price: "Desde $499",
  },
  {
    icon: Battery,
    title: "Cambio de Batería",
    description: "Batería agotada, no carga, se descarga rápido",
    price: "Desde $499",
  },
  {
    icon: Zap,
    title: "Problemas de Carga",
    description: "Puerto de carga dañado, no carga, cable suelto",
    price: "Desde $499",
  },
  {
    icon: Monitor,
    title: "Cámara y Audio",
    description: "Cámara borrosa, micrófono, altavoces",
    price: "Desde $499",
  },
];

const accessories: Accessory[] = [
  {
    icon: Shield,
    title: "Fundas y Protectores",
    description:
      "Fundas resistentes, cristales templados, protectores de pantalla",
    featured: true,
  },
  {
    icon: Cable,
    title: "Cables y Cargadores",
    description: "Cables USB-C, Lightning, cargadores rápidos, inalámbricos",
    featured: false,
  },
  {
    icon: Headphones,
    title: "Audio y Accesorios",
    description: "Audífonos, parlantes Bluetooth, soportes para auto",
    featured: false,
  },
  {
    icon: Tablet,
    title: "Accesorios para Tablet",
    description: "Teclados, stylus, soportes, fundas especializadas",
    featured: false,
  },
];

export const  ServicesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Repair Services */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            ¿Qué Podemos <span className={styles.titleHighlight}>Reparar?</span>
          </h2>
          <p className={styles.description}>
            Desde smartphones hasta tablets, tenemos experiencia en todos los
            dispositivos móviles
          </p>
        </div>

        <div className={styles.grid}>
          {repairServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceContent}>
                  <div
                    className={`${styles.iconContainer} ${styles.repairIcon}`}
                  >
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <span className={styles.priceBadge}>{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accessories Section */}
        <div className={`${styles.header} ${styles.accessoriesHeader}`}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>Accesorios</span> Premium
          </h2>
          <p className={styles.description}>
            Los mejores accesorios para proteger y potenciar tu dispositivo
          </p>
        </div>

        <div className={styles.grid}>
          {accessories.map((accessory, index) => {
            const IconComponent = accessory.icon;
            return (
              <div
                key={index}
                className={`${styles.serviceCard} ${accessory.featured ? styles.featuredCard : ""}`}
              >
                <div className={styles.serviceContent}>
                  {accessory.featured && (
                    <span className={styles.popularBadge}>Más Popular</span>
                  )}
                  <div
                    className={`${styles.iconContainer} ${styles.accessoryIcon}`}
                  >
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.serviceTitle}>{accessory.title}</h3>
                  <p className={styles.serviceDescription}>
                    {accessory.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <button className={styles.ctaButton}>Ver Todos los Servicios</button>
        </div>
      </div>
    </section>
  );
};
