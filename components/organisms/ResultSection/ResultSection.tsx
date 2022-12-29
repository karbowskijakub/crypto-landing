// @ts-nocheck
import React, { useEffect } from 'react'
import { Decoration, DivBox } from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight, Right } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { HeroButtonBlack } from '../../atoms/Button/Button'
import { HeroLinkBlack } from '../HeroSection/HeroSection.styles'
import { ShareBlack } from '../HeroSection/HeroSection.styles'
import { Container, InfoBox, TitleBox, TextBox, StatsBox, ResultBox } from './ResultSection.styles'
import ResultsInfo from '../../molecules/ResultsInfo/ResultsInfo'

const ResultSection = ({ results }) => {
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
			<Decoration
				ref={ref}
				variants={slideRight}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControls}
			/>

			<InfoBox>
				<TitleBox
					ref={ref2}
					variants={Right}
					initial='initial'
					custom={{ duration: 1.1 }}
					animate={animationControlsSecond}>
					<h1>Results</h1>
				</TitleBox>
				<DivBox>
					<TextBox
						ref={ref3}
						variants={Right}
						initial='initial'
						custom={{ duration: 1.1 }}
						animate={animationControlsThird}>
						<p>
							The statistics of our company do not lie, they show that we are one of the best on the market. Dozens of
							clients have used our services.
						</p>
					</TextBox>
				</DivBox>

				<StatsBox ref={ref}>
					{results?.map((result, i) => (
						<ResultsInfo key={i} {...result} inView={inView} index={i} />
					))}
				</StatsBox>
			</InfoBox>
		</Container>
	)
}

export default ResultSection
