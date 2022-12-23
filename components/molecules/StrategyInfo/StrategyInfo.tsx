import React, { useContext } from 'react'
import {
	TitleBox,
	TextBox,
	CryptoBox,
	DataBox,
	IconBox,
	InformationBox,
	NameBox,
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { CategoryBox } from './StrategyInfo.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const StrategyInfo = ({ number, text, name }: any) => {
	const animationControls = useAnimation()
	const [ref, inView] = useInView({ threshold: 0 })
	if (inView) {
		animationControls.start('animate')
	}

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
				<NameBox>
					<CategoryBox>
						<h2>{name}</h2>
					</CategoryBox>
				</NameBox>
				<InformationBox>{documentToReactComponents(text)}</InformationBox>
			</CryptoBox>
		</>
	)
}

export default StrategyInfo
