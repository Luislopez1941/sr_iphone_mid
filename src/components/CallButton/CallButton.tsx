import React from "react";
import { Phone } from "lucide-react";
import styles from "./CallButton.module.css";

interface CallButtonProps {
  phoneNumber?: string;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  children?: React.ReactNode;
}

export const CallButton: React.FC<CallButtonProps> = ({
  phoneNumber = "tel:+1234567890",
  className = "",
  variant = "primary",
  size = "default",
  children = "Llamar Ahora",
}) => {
  const handleCall = () => {
    window.location.href = phoneNumber;
  };

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      onClick={handleCall}
      className={buttonClasses}
      aria-label="Llamar ahora"
    >
      <Phone className={styles.icon} />
      {children}
    </button>
  );
};
