import React from 'react'
import HeroPortfolio from '../components/organisms/Portfolio/HeroPortfolio/HeroPortfolio'
import PortfolioSection from '../components/organisms/Portfolio/PortfolioSection/PortfolioSection'

import {getPortfolioData} from '../pages/api/api.js'

const Portfolio = ({projects}) => {

  return (
    <>
    <HeroPortfolio/>
<PortfolioSection projects={projects}/>
    </>
  )
}

export default Portfolio

export async function getStaticProps() {
	
	const project = await getPortfolioData()
	const projects = project.map((project) => {
		const id = project.sys.id
		const data = project.fields

		return { id, ...data }
	})

	return { props: {projects} }
};