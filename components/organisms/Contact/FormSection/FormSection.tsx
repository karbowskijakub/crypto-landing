import React, { useEffect } from 'react'
import { Container, ContactBox, InfoContainer, Info, FormBox, Gridy } from './FormSection.styles'
import { Decoration } from '../../../atoms/SectionScheme/SectionScheme.styles'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { slideRight, Right } from '../../../animations/animations.js'
import Form from '../../../molecules/Form/Form'
import Image from 'next/legacy/image'

const FormSection = () => {
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
	const [ref, inView] = useInView({ threshold: 0.5 })
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	const [ref3, inView3] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			animationControls.start('animate')
		}
	}, [animationControls, inView])
	useEffect(() => {
		if (inView2) {
			animationControlsSecond.start('animate')
		}
	}, [animationControlsSecond, inView2])
	useEffect(() => {
		if (inView3) {
			animationControlsThird.start('animate')
		}
	}, [animationControlsThird, inView3])

	return (
		<Container>
			<Decoration
				ref={ref}
				variants={slideRight}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControls}
			/>
			<ContactBox>
				<Image
					src={require('../../../../assets/images/shiny.svg')}
					layout='fill'
					quality={100}
					alt='Hero image'
					crossOrigin=''
				/>
				<InfoContainer
					ref={ref2}
					variants={Right}
					initial='initial'
					custom={{ duration: 1.1 }}
					animate={animationControlsSecond}>
					<Info>
						<h1>Contact Us</h1>
						<p>
							Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help
							your business grow. If you are looking for unique digital experiences that’s relatable to your users,
							contact us.
						</p>
					</Info>
				</InfoContainer>
				<FormBox
					ref={ref3}
					variants={Right}
					initial='initial'
					custom={{ duration: 1.1 }}
					animate={animationControlsThird}>
					<Form />
				</FormBox>
			</ContactBox>
		</Container>
	)
}

export default FormSection
