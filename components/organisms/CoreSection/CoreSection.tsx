import React, { useEffect } from 'react'
import {
	Decoration,
	InfoBox,
	TitleBox,
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
import { Container, Selector, SelectorItems, Section, TextBox } from './CoreSection.styles'
import CoreInfo from '../../molecules/CoreInfo/CoreInfo'

const CoreSection = ({ cores }: any) => {
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
	const [ref, inView] = useInView({ threshold: 0 })
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
					<h1>Core of the company</h1>
				</TitleBox>
				<Section>
					<Selector>
						<TextBox
							ref={ref3}
							variants={Right}
							initial='initial'
							custom={{ duration: 1.1 }}
							animate={animationControlsThird}>
							<p>Our company has solid advantages in what it does. We use the best technologies.</p>
						</TextBox>
					</Selector>
					<SelectorItems>
						{cores?.map((core: any, i: number) => (
							<CoreInfo key={i} {...core} />
						))}
					</SelectorItems>
				</Section>
			</InfoBox>
		</Container>
	)
}

export default CoreSection
