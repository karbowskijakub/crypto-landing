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

import { HeroWrapper } from './HeroAbout.styles'
import { slideRight, Right, scaleY } from '../../../animations/animations.js'
import { HeroButton } from '../../../../atoms/Button/Button'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'

const HeroAbout = () => {
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
						About us
					</Title>
					<Line variants={Right} custom={{ delay: 1 }} initial='initial' animate='animate' />
					<Paragraph variants={scaleY} initial='initial' animate='animate' custom={2.2}>
						We help our clients succeed. Get to know us.{' '}
					</Paragraph>
				</Text>
			</InfoBox>
		</HeroWrapper>
	)
}

export default HeroAbout
