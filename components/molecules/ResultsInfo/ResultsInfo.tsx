import React, { useContext } from 'react'
import { Element, ElementWrap, ElementNumber, ElementInfo } from './ResultsInfo.styles'
import { scaleY } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/image'

interface Results {
	inView?: any
	index: number
}

const ResultsInfo = ({ number, text, inView, index }: Results) => {
	const animationControlsThird = useAnimation()

	return (
		<Element variants={scaleY} initial='initial' animate={inView && 'animate'} custom={index * 0.8}>
			<ElementWrap>
				<ElementNumber>
					<h1>{number}</h1>
				</ElementNumber>
				<ElementInfo>
					<p>{text}</p>
				</ElementInfo>
			</ElementWrap>
		</Element>
	)
}

export default ResultsInfo
