import React from 'react'
import {
	Decoration,
	InfoBox,
	TitleBox,
	TextBox,
	ButtonBox,
	CryptoBox,
	DataBox,
	IconBox,
	InformationBox,
	NameBox,
	DivBox,
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight, Right } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { HeroButtonBlack } from '../../atoms/Button/Button'
import { HeroLinkBlack } from '../HeroSection/HeroSection.styles'
import { ShareBlack } from '../HeroSection/HeroSection.styles'
import Image from 'next/image'
import { Container } from './StrategySection.styles'
import StrategyInfo from '../../molecules/StrategyInfo/StrategyInfo'

const StrategySection = ({ strategies }: any) => {
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
	const [ref, inView] = useInView({ threshold: 0 })
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	const [ref3, inView3] = useInView({ threshold: 0.5 })

	if (inView) {
		animationControls.start('animate')
	}
	if (inView2) {
		animationControlsSecond.start('animate')
	}
	if (inView3) {
		animationControlsThird.start('animate')
	}

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
					<h1>Our strategy</h1>
				</TitleBox>
				<DivBox>
					<TextBox
						ref={ref3}
						variants={Right}
						initial='initial'
						custom={{ duration: 1.1 }}
						animate={animationControlsThird}>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
							Latin literature from 45 BC, making it over 2000 years old.
						</p>
					</TextBox>
				</DivBox>
				{strategies?.map((strategy: any, i: number) => (
					<StrategyInfo key={i} {...strategy} />
				))}
			</InfoBox>
		</Container>
	)
}

export default StrategySection
