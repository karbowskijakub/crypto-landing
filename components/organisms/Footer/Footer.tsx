import React from 'react'


import { Container, CopyBox, CopyContainer, LogoBox, FooterInfo, InfoBox,TextBox } from './Footer.styles'
import { LogoContainer } from '../Navbar/Navbar.styles'
import { IconsWrapper, LinkContainerIcon, LinkedinIcon, TwitterIcon } from '../../molecules/NavLinks/NavLinks.styles'
import { Right } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const Footer = () => {
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()

	const [ref, inView] = useInView({ threshold: 0.5 })
	const [ref2, inView2] = useInView({ threshold: 0.5 })

	if (inView) {
		animationControls.start('animate')
	}
	if (inView2) {
		animationControlsSecond.start('animate')
	}

	return (
		<Container>
			<InfoBox>
				<FooterInfo ref={ref} variants={Right} initial='initial' custom={{ duration: 1.1 }} animate={animationControls}>
					<LogoBox>
						<LogoContainer href='#' passHref>
							CryptoEnth
						</LogoContainer>
					</LogoBox>
					<TextBox>
						<p>
						We help in a marketing promotion in the world of cryptocurrencies.
						</p>
					</TextBox>
				</FooterInfo>
				<CopyBox
					ref={ref2}
					variants={Right}
					initial='initial'
					custom={{ duration: 1.1 }}
					animate={animationControlsSecond}>
					<CopyContainer>
						<p> &copy; Created by Jakub Karbowski</p>
					</CopyContainer>
					<IconsWrapper>
						<LinkContainerIcon href='#'>
							<TwitterIcon />
						</LinkContainerIcon>
						<LinkContainerIcon href='#'>
							<LinkedinIcon />
						</LinkContainerIcon>
					</IconsWrapper>
				</CopyBox>
			</InfoBox>
		</Container>
	)
}

export default Footer
