import React from "react";
import { Header } from "../Header/Header";
import { WhatsAppButton } from "../WhatsAppButton/WhatsAppButton";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <WhatsAppButton phoneNumber="5512345678" />

      {/* Ambient Background Effects */}
      <div className={styles.ambientEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
    </div>
  );
};
