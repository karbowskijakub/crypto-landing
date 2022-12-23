import React from 'react'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import AboutSection from '../components/organisms/AboutSection/AboutSection'
import PortfolioSection from '../components/organisms/PortfolioSection/PortfolioSection'
import StrategySection from '../components/organisms/StrategySection/StrategySection'
import ResultSection from '../components/organisms/ResultSection/ResultSection'
import CoreSection from '../components/organisms/CoreSection/CoreSection'

const MainPage = ({ projects, strategies, cores, results }) => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<PortfolioSection projects={projects} />
			<StrategySection strategies={strategies} />
			<ResultSection results={results} />
			<CoreSection cores={cores} />
		</>
	)
}

export default MainPage
