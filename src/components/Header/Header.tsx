'use client'

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  onCallClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCallClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+5512345678";
    onCallClick?.();
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Zap className={styles.logoIconSvg} />
          </div>
          <span className={styles.logoText}>Sr iPhone</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.navLink}
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("emergency")}
            className={styles.navLink}
          >
            Emergencia
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className={styles.navLink}
          >
            Ubicación
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={styles.navLink}
          >
            Reseñas
          </button>
        </nav>

        {/* Call Button */}
        <button onClick={handleCall} className={styles.callButton}>
          <Phone className={styles.callIcon} />
          <span className={styles.callText}>Llamar</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.mobileMenuButton}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav}>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.mobileNavLink}
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("emergency")}
            className={styles.mobileNavLink}
          >
            Emergencia
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className={styles.mobileNavLink}
          >
            Ubicación
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={styles.mobileNavLink}
          >
            Reseñas
          </button>
          <button onClick={handleCall} className={styles.mobileCallButton}>
            <Phone className={styles.callIcon} />
            Llamar Ahora
          </button>
        </nav>
      </div>
    </header>
  );
};
