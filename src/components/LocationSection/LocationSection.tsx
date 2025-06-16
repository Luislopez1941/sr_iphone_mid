import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Car,
  Home,
  MessageCircle,
} from "lucide-react";
import { CallButton } from "../CallButton/CallButton";
import styles from "./LocationSection.module.css";

interface BusinessHour {
  day: string;
  hours: string;
}

interface Service {
  name: string;
  time: string;
  icon: React.ComponentType<any>;
}

const businessHours: BusinessHour[] = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 9:00 PM" },
  { day: "Sábados", hours: "10:00 AM - 8:00 PM" },
  { day: "Domingos", hours: "10:00 AM - 8:00 PM" },
];

const services: Service[] = [
  { name: "Reparación en tienda", time: "15-30 min", icon: Home },
  { name: "Servicio a domicilio", time: "1-2 horas", icon: Car },
];

export const LocationSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola! Necesito información sobre reparaciones",
    );
    window.open(`https://wa.me/5219997979776?text=${message}`, "_blank");
  };

  const handleDirectionsClick = () => {
    const address = encodeURIComponent(
      "Calle 19 #256 x 34 san Vicente Chuburna",
    );
    window.open(`https://maps.google.com/?q=${address}`, "_blank");
  };

  return (
    <section className={styles.section} id="location">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Nuestra <span className={styles.titleHighlight}>Ubicación</span>
          </h2>
          <p className={styles.description}>
            Visítanos en nuestro local físico o solicita servicio a domicilio
          </p>
        </div>

        <div className={styles.content}>
          {/* Map placeholder */}
          <div className={styles.mapContainer}>
            <div className={styles.mapWrapper}>
              <iframe
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.308742423828!2d-89.60136332396167!3d20.994600685189404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567132573cefdd%3A0x99c0ef494ac86884!2sC.%2019%20256%2C%20San%20Miguel%2C%2097140%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses!2smx!4v1718293926844!5m2!1ses!2smx"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>


            {/* Address overlay */}
            <div className={styles.addressOverlay}>
              <div className={styles.addressContent}>
                <MapPin className={styles.addressIcon} />
                <div className={styles.addressInfo}>
                  <h3 className={styles.addressTitle}>Sr iPhone Mid</h3>
                  <p className={styles.addressText}>
                    Calle 19 #256 x 34 san Vicente Chuburna
                    <br />
                    Mérida, México
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location info */}
          <div className={styles.locationInfo}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  <Clock className={styles.cardIcon} />
                  Horarios de Atención
                </h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.hoursList}>
                  {businessHours.map((schedule, index) => (
                    <div key={index} className={styles.hoursItem}>
                      <span className={styles.hoursDay}>{schedule.day}</span>
                      <span className={styles.hoursTime}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <span className={styles.statusBadge}>🟢 Abierto ahora</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  <Phone className={styles.cardIcon} />
                  Contacto Directo
                </h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.contactInfo}>
                  <p className={styles.contactDescription}>
                    ¿Necesitas ayuda inmediata?
                  </p>
                  <CallButton
                    className={styles.contactButton}
                    phoneNumber="tel:+9997979776"
                  />
                  <div className={styles.contactDivider}>
                    <p className={styles.whatsappInfo}>
                      También disponible por WhatsApp
                    </p>
                    <button
                      onClick={handleWhatsAppClick}
                      className={styles.whatsappButton}
                    >
                      <MessageCircle className={styles.buttonIcon} />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Tipos de Servicio</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.servicesList}>
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className={styles.serviceItem}>
                        <IconComponent className={styles.serviceIcon} />
                        <div className={styles.serviceInfo}>
                          <h4 className={styles.serviceName}>{service.name}</h4>
                          <p className={styles.serviceTime}>
                            Tiempo estimado: {service.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={handleDirectionsClick}
              className={styles.directionsButton}
            >
              <Navigation className={styles.buttonIcon} />
              Cómo Llegar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
