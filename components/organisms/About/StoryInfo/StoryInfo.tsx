import React from 'react'
import { TitleBox, TextBox, CryptoBox, DataBox, CategoryBox } from '../../../atoms/SectionScheme/SectionScheme.styles'
import { slideLeft } from '../../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import { IconBox, SetupBox, InformationBox, NameBox } from './StoryInfo.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const StoryInfo = ({ name, text }: any) => {
	const animationControlsSecond = useAnimation()
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	if (inView2) {
		animationControlsSecond.start('animate')
	}

	return (
		<>
			<CryptoBox
				ref={ref2}
				variants={slideLeft}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControlsSecond}>
				<SetupBox>
					<NameBox>
						<h2>{name}</h2>
					</NameBox>
				</SetupBox>
				<InformationBox>{documentToReactComponents(text)}</InformationBox>
			</CryptoBox>
		</>
	)
}

export default StoryInfo
