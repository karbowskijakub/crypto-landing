import React from 'react'
import { Container,InfoBox,TitleBox, } from './GoalSection.styles'
import { Decoration, TextBox, ButtonBox } from '../../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight, Right } from '../../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const GoalSection = () => {
	const [ref, inView] = useInView({ threshold: 0.5 })
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	const [ref3, inView3] = useInView({ threshold: 0.5 })
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()

	

	if (inView) {
		animationControls.start('animate')
	}
	if (inView2) {
		animationControlsSecond.start('animate')
	}
	if (inView3) {
		animationControlsThird.start('animate')
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
					<h1>Our goal</h1>
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
				
			</InfoBox>
		</Container>
	)
}

export default GoalSection
