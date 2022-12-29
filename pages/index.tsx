import MainPage from './MainPage'
import { getPortfolioData, getStrategyData, getCoreData, getResultsData } from '../pages/api/api.js'

interface Results {
	projects?: any
	strategies?: any
	cores?: any
	results?: any
}

export default function Home({ projects, strategies, cores, results }: Results) {
	return (
		<>
			<MainPage projects={projects} strategies={strategies} cores={cores} results={results} />
		</>
	)
}

export async function getStaticProps() {
	const strategy = await getStrategyData()
	const strategies = strategy.map((project) => {
		const id = project.sys.id
		const data = project.fields
		return { id, ...data }
	})
	const data = await getPortfolioData()
	const projects = data.map((project) => {
		const id = project.sys.id
		const data = project.fields

		return { id, ...data }
	})
	const core = await getCoreData()
	const cores = core.map((project) => {
		const id = project.sys.id
		const data = project.fields

		return { id, ...data }
	})
	const result = await getResultsData()
	const results = result.map((project) => {
		const id = project.sys.id
		const data = project.fields

		return { id, ...data }
	})
	return { props: { strategies, projects, cores, results } }
}
