import React from 'react'

import { NavBar } from '../../components/navBar/navBar'
import { HeroSection } from '../../components/heroSection/heroSection'
import { EcoSystem } from '../../components/ecoSystem/ecoSystem'

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <EcoSystem />
        </div>
    )
}
