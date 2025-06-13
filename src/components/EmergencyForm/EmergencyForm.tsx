'use client'

import React, { useState } from "react";
import { AlertTriangle, MapPin, Clock } from "lucide-react";
import styles from "./EmergencyForm.module.css";

interface FormData {
  name: string;
  phone: string;
  address: string;
  deviceType: string;
  problem: string;
  urgency: string;
}

export const EmergencyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    deviceType: "",
    problem: "",
    urgency: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Emergency repair request:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        address: "",
        deviceType: "",
        problem: "",
        urgency: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.successAlert}>
            <AlertTriangle className={styles.alertIcon} />
            ¡Solicitud enviada! Nos contactaremos contigo en los próximos 15
            minutos.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          <AlertTriangle className={styles.titleIcon} />
          Reparación de Emergencia
        </h3>
        <p className={styles.cardSubtitle}>
          Servicio a domicilio en menos de 1 hora
        </p>
      </div>

      <div className={styles.cardContent}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              placeholder="Tu nombre"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Teléfono
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              placeholder="Tu número de teléfono"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Dirección completa
            </label>
            <input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
              placeholder="Dirección donde necesitas el servicio"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="deviceType" className={styles.label}>
              Tipo de dispositivo
            </label>
            <select
              id="deviceType"
              value={formData.deviceType}
              onChange={(e) => handleInputChange("deviceType", e.target.value)}
              required
              className={styles.select}
            >
              <option value="">Selecciona tu dispositivo</option>
              <option value="iphone">iPhone</option>
              <option value="samsung">Samsung</option>
              <option value="huawei">Huawei</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="motorola">Motorola</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="urgency" className={styles.label}>
              Nivel de urgencia
            </label>
            <select
              id="urgency"
              value={formData.urgency}
              onChange={(e) => handleInputChange("urgency", e.target.value)}
              required
              className={styles.select}
            >
              <option value="">¿Qué tan urgente es?</option>
              <option value="high">Muy urgente (1 hora)</option>
              <option value="medium">Urgente (2-4 horas)</option>
              <option value="low">Normal (mismo día)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="problem" className={styles.label}>
              Descripción del problema
            </label>
            <textarea
              id="problem"
              value={formData.problem}
              onChange={(e) => handleInputChange("problem", e.target.value)}
              required
              placeholder="Describe qué le pasa a tu dispositivo"
              rows={3}
              className={styles.textarea}
            />
          </div>

          <div className={styles.infoBox}>
            <div className={styles.infoHeader}>
              <Clock className={styles.infoIcon} />
              <span>Tiempo de respuesta estimado</span>
            </div>
            <p className={styles.infoText}>
              Nuestro técnico se contactará contigo en 15 minutos y llegará a tu
              ubicación según la urgencia seleccionada.
            </p>
          </div>

          <button type="submit" className={styles.submitButton}>
            <MapPin className={styles.buttonIcon} />
            Solicitar Reparación a Domicilio
          </button>
        </form>
      </div>
    </div>
  );
};
