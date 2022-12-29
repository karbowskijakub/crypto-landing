// @ts-nocheck
import React from 'react'
import Image from 'next/legacy/image'
import {
	InfoBox,
	Title,
	Text,
	Line,
	Buttons,
	HeroLink,
	Share,
	Paragraph,
	Shadow,
} from '../../HeroSection/HeroSection.styles.tsx'

import { HeroWrapper } from './HeroPortfolio.styles'
import { slideRight, Right, scaleY } from '../../../animations/animations.js'
import { HeroButton } from '../../../../atoms/Button/Button'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'

const HeroPortfolio = () => {
	return (
		<HeroWrapper>
			<Image
				src={require('../../../../assets/images/dynamic.jpg')}
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
						Portfolio
					</Title>
					<Line variants={Right} custom={{ delay: 1 }} initial='initial' animate='animate' />
					<Paragraph variants={scaleY} initial='initial' animate='animate' custom={2.2}>
						Get to know the projects we work with.{' '}
					</Paragraph>
				</Text>
			</InfoBox>
		</HeroWrapper>
	)
}

export default HeroPortfolio
