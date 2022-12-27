// @ts-nocheck
import React from 'react'
import Image from 'next/legacy/image'
import {
	InfoBox,
	Text,
	Line,
	Buttons,
	HeroLink,
	Share,
	Paragraph,
	Shadow,
} from '../../HeroSection/HeroSection.styles.tsx'

import { HeroWrapper, Title } from './HeroContact.styles'
import { slideRight, Right, scaleY } from '../../../animations/animations.js'
import { HeroButton } from '../../../../atoms/Button/Button'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'

const HeroContact = () => {
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
						Contact
					</Title>
					<Line variants={Right} custom={{ delay: 1 }} initial='initial' animate='animate' />
				</Text>
			</InfoBox>
		</HeroWrapper>
	)
}

export default HeroContact
