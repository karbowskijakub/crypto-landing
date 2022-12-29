import React, { useEffect } from 'react'
import {
	TitleBox,
	TextBox,
	DataBox,
	IconBox,
	InformationBox,
	NameBox,
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { CategoryBox, CryptoBox } from './StrategyInfo.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const StrategyInfo = ({ number, text, name }: any) => {
	const animationControls = useAnimation()
	const [ref, inView] = useInView({ threshold: 0 })
	useEffect(() => {
		if (inView) {
			animationControls.start('animate')
		}
	}, [animationControls, inView])

	return (
		<>
			<CryptoBox
				ref={ref}
				variants={slideRight}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControls}>
				<DataBox>
					<h2>{number}</h2>
				</DataBox>
				<CategoryBox>
					<h2>{name}</h2>
				</CategoryBox>

				<InformationBox>{documentToReactComponents(text)}</InformationBox>
			</CryptoBox>
		</>
	)
}

export default StrategyInfo
