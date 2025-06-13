import React from "react";
import { Star, ThumbsUp } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: "María García",
    rating: 5,
    text: "Excelente servicio! Repararon mi iPhone en 20 minutos y quedó como nuevo. El precio fue muy justo.",
    service: "Cambio de pantalla iPhone",
  },
  {
    name: "Carlos López",
    rating: 5,
    text: "Vine por una funda y me asesoraron muy bien. Tienen gran variedad de accesorios de calidad.",
    service: "Compra de accesorios",
  },
  {
    name: "Ana Rodríguez",
    rating: 5,
    text: "El servicio a domicilio es increíble. Vinieron a mi oficina y arreglaron mi Samsung en el lugar.",
    service: "Reparación a domicilio",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Clientes <span className={styles.titleHighlight}>Felices</span>
          </h2>
          <p className={styles.description}>
            Lee lo que nuestros clientes dicen sobre nuestro servicio
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.cardContent}>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={styles.star} />
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.customerInfo}>
                  <p className={styles.customerName}>{testimonial.name}</p>
                  <p className={styles.serviceType}>{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.ctaButton}>
            <ThumbsUp className={styles.buttonIcon} />
            Ver Más Reseñas
          </button>
        </div>
      </div>
    </section>
  );
};
