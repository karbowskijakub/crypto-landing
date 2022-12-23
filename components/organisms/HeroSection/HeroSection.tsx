import React from 'react'
import Image from 'next/legacy/image'
import {
	HeroWrapper,
	InfoBox,
	Title,
	Text,
	Line,
	Buttons,
	HeroLink,
	Share,
	Paragraph,
	Shadow,
} from './HeroSection.styles'
import { slideRight, Right, scaleY } from '../../animations/animations.js'
import { HeroButton } from '../../atoms/Button/Button'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'

const HeroSection = () => {
	return (
		<HeroWrapper>
			<Image
				src={require('../../../assets/images/dynamic.jpg')}
				layout='fill'
				quality={100}
				alt='Hero image'
				crossOrigin=''
			/>
			<Shadow />
			<InfoBox>
				<Text>
					<Title variants={slideRight} custom={{ delay: 0.5 }} initial='initial' animate='animate'>
						{' '}
						Make future with us, get invest today
					</Title>
					<Line variants={Right} custom={{ delay: 1 }} initial='initial' animate='animate' />
					<Paragraph variants={scaleY} initial='initial' animate='animate' custom={2.2}>
						We help in a marketing promotion in the world of cryptocurrencies.{' '}
					</Paragraph>
				</Text>
				<Buttons variants={scaleY} initial='initial' animate='animate' custom={2.2}>
					<HeroButton>
						{' '}
						<HeroLink href='#'>
							Contact <Share />
						</HeroLink>
					</HeroButton>
					<HeroButton>
						<HeroLink href='#'>
							Portfolio
							<Share />
						</HeroLink>
					</HeroButton>
				</Buttons>
			</InfoBox>
		</HeroWrapper>
	)
}

export default HeroSection
