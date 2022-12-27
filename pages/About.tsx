import React from 'react'
import HeroAbout from '../components/organisms/About/HeroAbout/HeroAbout'
import ResultsAbout from '../components/organisms/About/ResultsAbout/ResultsAbout'
import GoalSection from '../components/organisms/About/GoalSection/GoalSection'
import StorySection from '../components/organisms/About/StorySection/StorySection'
import { getResultsData, getStoryData } from '../pages/api/api.js'

interface Results {
	results?: any
	stories?: any
}

const About = ({ results, stories }: Results) => {
	return (
		<>
			<HeroAbout />
			<ResultsAbout results={results} />
			<GoalSection />
			<StorySection stories={stories} />
		</>
	)
}

export default About

export async function getStaticProps() {
	const result = await getResultsData()
	const results = result.map((project) => {
		const id = project.sys.id
		const data = project.fields

		return { id, ...data }
	})
	const story = await getStoryData()
	const stories = story.map((project) => {
		const id = project.sys.id
		const data = project.fields

		return { id, ...data }
	})
	return { props: { results, stories } }
}
