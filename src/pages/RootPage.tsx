import React from 'react'
import { Layout } from '@/components/Layout/Layout'
import { Header } from '@/components/Header/Header'
import { EmergencyForm } from '@/components/EmergencyForm/EmergencyForm'
import { EmergencySection } from '@/components/EmergencySection/EmergencySection'
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection'
import { PhoneRepairLanding } from '@/components/PhoneRepairLanding/PhoneRepairLanding'
export const RootPage = () => {
  return (
    <div>
      <Header />
      <PhoneRepairLanding />
    </div>
  )
}
