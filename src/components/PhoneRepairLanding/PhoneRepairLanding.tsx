'use client'

import React from "react";
import { Layout } from "../Layout/Layout";
import { HeroSection } from "../HeroSection/HeroSection";
import { ServicesSection } from "../ServicesSection/ServicesSection";
import { EmergencySection } from "../EmergencySection/EmergencySection";
import { FeaturesSection } from "../FeaturesSection/FeaturesSection";
import { TestimonialsSection } from "../TestimonialsSection/TestimonialsSection";
import { LocationSection } from "../LocationSection/LocationSection";
import { FinalCTASection } from "../FinalCTASection/FinalCTASection";
import { Footer } from "../Footer/Footer";

export const PhoneRepairLanding: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <EmergencySection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </Layout>
  );
};
