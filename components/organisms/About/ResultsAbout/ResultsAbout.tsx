import React, { useEffect } from 'react'
import { Container } from './ResultsAbout.styles'

import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { StatsBox } from '../../ResultSection/ResultSection.styles'
import ResultsInfo from '../../../molecules/ResultsInfo/ResultsInfo'
import { useSearchParams } from 'next/navigation'

const ResultsAbout = ({ results }: any) => {
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
	const [ref, inView] = useInView({ threshold: 0.5 })
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	const [ref3, inView3] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			animationControls.start('animate')
		}
	}, [animationControls, inView])
	useEffect(() => {
		if (inView2) {
			animationControlsSecond.start('animate')
		}
	}, [animationControlsSecond, inView2])
	useEffect(() => {
		if (inView3) {
			animationControlsThird.start('animate')
		}
	}, [animationControlsThird, inView3])

	return (
		<Container>
			<StatsBox ref={ref}>
				{results?.map((result: any, i: number) => (
					<ResultsInfo key={i} {...result} inView={inView} index={i} />
				))}
			</StatsBox>
		</Container>
	)
}

export default ResultsAbout
