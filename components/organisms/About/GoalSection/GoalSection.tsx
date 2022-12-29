import React,{useEffect} from 'react'
import { Container, InfoBox, TitleBox } from './GoalSection.styles'
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

	useEffect(() => {
		if (inView) {
			animationControls.start('animate')
		}
	  }, [animationControls, inView]);
	useEffect(() => {
		if (inView2) {
			animationControlsSecond.start('animate')
		}
	  }, [animationControlsSecond, inView2]);
	useEffect(() => {
		if (inView3) {
			animationControlsThird.start('animate')
		}
	  }, [animationControlsThird, inView3]);


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
					Our long-term plan is to get as much funding as possible for our clients.
					</p>
				</TextBox>
			</InfoBox>
		</Container>
	)
}

export default GoalSection
