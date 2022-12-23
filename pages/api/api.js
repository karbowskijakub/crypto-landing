const client = require('contentful').createClient({
	space: process.env.SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

const getPortfolioData = async () => {
	try {
		const { items } = await client.getEntries({ content_type: 'crypto' })
		return items
	} catch (error) {
		console.log(error)
		return []
	}
}
const getStrategyData = async () => {
	try {
		const { items } = await client.getEntries({ content_type: 'strategy' })
		return items
	} catch (error) {
		console.log(error)
		return []
	}
}
const getCoreData = async () => {
	try {
		const { items } = await client.getEntries({ content_type: 'core' })
		return items
	} catch (error) {
		console.log(error)
		return []
	}
}
const getResultsData = async () => {
	try {
		const { items } = await client.getEntries({ content_type: 'results' })
		return items
	} catch (error) {
		console.log(error)
		return []
	}
}

export { getPortfolioData, getStrategyData, getCoreData, getResultsData }
