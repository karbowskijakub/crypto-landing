import React, { useContext } from 'react'
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
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight, Right, scaleY } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { HeroButtonBlack } from '../../atoms/Button/Button'
import { HeroLinkBlack } from '../HeroSection/HeroSection.styles'
import { ShareBlack } from '../HeroSection/HeroSection.styles'
import { Container } from './PortfolioSection.styles'

import PortfolioProject from '../../molecules/PortfolioProject/PortfolioProject'
import Image from 'next/image'

const PortfolioSection = ({ projects }:any) => {
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
				<TitleBox
					ref={ref2}
					variants={Right}
					initial='initial'
					custom={{ duration: 1.1 }}
					animate={animationControlsSecond}>
					<h1>Portfolio</h1>
				</TitleBox>
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

				{projects?.map((project:any, i:number) => (
					<PortfolioProject key={i} {...project} />
				))}

				<ButtonBox>
					<HeroButtonBlack
						ref={ref4}
						variants={Right}
						initial='initial'
						custom={{ duration: 1.1 }}
						animate={animationControlsFourth}>
						<HeroLinkBlack href='#'>
							More about us
							<ShareBlack />
						</HeroLinkBlack>
					</HeroButtonBlack>
				</ButtonBox>
			</InfoBox>
		</Container>
	)
}

export default PortfolioSection
