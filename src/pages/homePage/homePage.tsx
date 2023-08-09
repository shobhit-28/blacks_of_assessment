import React from 'react'

import { NavBar } from '../../components/navBar/navBar'
import { HeroSection } from '../../components/heroSection/heroSection'
import { EcoSystem } from '../../components/ecoSystem/ecoSystem'
import { ProductsSection } from '../../components/productsSection/productsSection'
import { PlatformAssistSection } from '../../components/platformAssistSection/platformAssistSection'
import { Footer } from '../../components/footer/footer'

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <EcoSystem />
            <ProductsSection />
            <PlatformAssistSection />
            <Footer />
        </div>
    )
}
