import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Smartphone,
  Zap,
  Shield,
  ArrowUp,
} from "lucide-react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola! Me interesa saber más sobre sus servicios",
    );
    window.open(`https://wa.me/5512345678?text=${message}`, "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/sr_iphone_mid_", "_blank");
  };

  const openFacebook = () => {
    window.open("https://facebook.com/sriphone", "_blank");
  };

  const openTwitter = () => {
    window.open("https://twitter.com/sriphone", "_blank");
  };

  const quickServices = [
    "Cambio de Pantalla",
    "Reparación de Batería",
    "Problemas de Carga",
    "Cámara y Audio",
    "Fundas Premium",
    "Accesorios",
  ];

  const businessInfo = [
    {
      icon: Phone,
      text: "(999) 797-9776",
      action: () => (window.location.href = "tel:9997979776"),
    },
    {
      icon: Mail,
      text: "info@sriphone.com",
      action: () => (window.location.href = "mailto:info@sriphone.com"),
    },
    { icon: MapPin, text: "Calle 19 #256 x 34 san Vicente Chuburna", action: () => {} },
    { icon: Clock, text: "Lun-Vie: 9AM-8PM", action: () => {} },
  ];

  return (
    <footer className={styles.footer}>
      {/* Animated background elements */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className={styles.container}>
        {/* Main footer content */}
        <div className={styles.mainContent}>
          {/* Brand section */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <Zap className={styles.logoIconSvg} />
              </div>
              <h3 className={styles.logoText}>Sr iPhone Mid</h3>
            </div>

            <p className={styles.brandDescription}>
              Líder en reparación de dispositivos móviles con tecnología de
              vanguardia y servicio personalizado. Tu futuro digital está
              asegurado con nosotros.
            </p>

            {/* Social links */}
            <div className={styles.socialLinks}>
              <button
                onClick={openInstagram}
                className={styles.socialButton}
                aria-label="Instagram"
              >
                <Instagram className={styles.socialIcon} />
              </button>
              <button
                onClick={openFacebook}
                className={styles.socialButton}
                aria-label="Facebook"
              >
                <Facebook className={styles.socialIcon} />
              </button>
              <button
                onClick={openTwitter}
                className={styles.socialButton}
                aria-label="Twitter"
              >
                <Twitter className={styles.socialIcon} />
              </button>
            </div>
          </div>

          {/* Services section */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Servicios Rápidos</h4>
            <ul className={styles.linksList}>
              {quickServices.map((service, index) => (
                <li key={index} className={styles.linkItem}>
                  <button className={styles.link}>
                    <Smartphone className={styles.linkIcon} />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contacto Directo</h4>
            <div className={styles.contactList}>
              {businessInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <button
                    key={index}
                    onClick={info.action}
                    className={styles.contactItem}
                  >
                    <IconComponent className={styles.contactIcon} />
                    <span className={styles.contactText}>{info.text}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <button onClick={openWhatsApp} className={styles.ctaButton}>
              <span>Consulta Gratis</span>
              <ArrowUp className={styles.ctaIcon} />
            </button>
          </div>
        </div>

        {/* Features strip */}
        <div className={styles.featuresStrip}>
          <div className={styles.feature}>
            <Shield className={styles.featureIcon} />
            <span className={styles.featureText}>Garantía 90 días</span>
          </div>
          <div className={styles.feature}>
            <Zap className={styles.featureIcon} />
            <span className={styles.featureText}>Reparación express</span>
          </div>
          <div className={styles.feature}>
            <Phone className={styles.featureIcon} />
            <span className={styles.featureText}>Servicio 24/7</span>
          </div>
        </div>

        {/* Bottom section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © {currentYear} Sr iPhone Mid. Todos los derechos reservados.
            </p>
            <p className={styles.legalText}>
              Política de Privacidad • Términos de Servicio
            </p>
          </div>

          <button onClick={scrollToTop} className={styles.scrollTop}>
            <ArrowUp className={styles.scrollTopIcon} />
            <span>Inicio</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
