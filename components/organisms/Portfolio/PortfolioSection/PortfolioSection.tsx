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
	CategoryBox,
	NameBox,
	DivBox,
} from '../../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight, Right, scaleY } from '../../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { HeroButtonBlack } from '../../../atoms/Button/Button'
import { HeroLinkBlack } from '../../HeroSection/HeroSection.styles'
import { ShareBlack } from '../../HeroSection/HeroSection.styles'
import { Container } from './PortfolioSection.styles'

import PortfolioProject from '../../../molecules/PortfolioProject/PortfolioProject'
import Image from 'next/image'

const PortfolioSection = ({ projects }: any) => {
	const animationControls = useAnimation()
	const [ref, inView] = useInView({ threshold: 0.5 })
	if (inView) {
		animationControls.start('animate')
	}

	const [ref2, inView2] = useInView({ threshold: 0.5 })
	const [ref3, inView3] = useInView({ threshold: 0.5 })
	const [ref4, inView4] = useInView({ threshold: 0.5 })
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
	const animationControlsFourth = useAnimation()
	if (inView2) {
		animationControlsSecond.start('animate')
	}
	if (inView3) {
		animationControlsThird.start('animate')
	}
	if (inView4) {
		animationControlsFourth.start('animate')
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
				{projects?.map((project: any, i: number) => (
					<PortfolioProject key={i} {...project} />
				))}
			</InfoBox>
		</Container>
	)
}

export default PortfolioSection
