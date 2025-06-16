'use client'

import React from "react";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "9997979776",
  message = "Hola! Me interesa saber más sobre sus servicios de reparación de celulares",
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleWhatsAppClick}
        className={styles.button}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className={styles.icon} />
      </button>
    </div>
  );
};
