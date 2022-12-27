import React from 'react'
import { LinkContainer, IconsWrapper, LinkContainerIcon, TwitterIcon, LinkedinIcon, Links } from './NavLinks.styles'
import { useEffect } from 'react'
import { Right } from '../../animations/animations.js'
const sidebarTransition = { type: 'spring', duration: 0.4 }

const NavLinks = ({ isOpen }: any) => {
	return (
		<>
			<Links variants={Right} custom={{ delay: 0.5 }} initial='initial' animate='animate'>
				<LinkContainer href='/'>Home</LinkContainer>
				<LinkContainer href='/About'>About us</LinkContainer>
				<LinkContainer href='/Portfolio'>Portfolio</LinkContainer>
				<LinkContainer href='/Contact'>Contact</LinkContainer>
				<IconsWrapper>
					<LinkContainerIcon href='/'>
						<TwitterIcon />
					</LinkContainerIcon>
					<LinkContainerIcon href='/'>
						<LinkedinIcon />
					</LinkContainerIcon>
				</IconsWrapper>
			</Links>
		</>
	)
}

export default NavLinks
