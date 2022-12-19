import React from 'react'
import { LinkContainer, IconsWrapper, LinkContainerIcon, TwitterIcon, LinkedinIcon, Links } from './NavLinks.styles'
import { useEffect } from 'react'

const sidebarTransition = { type: 'spring', duration: 0.4 }

const NavLinks = ({ isOpen }:any) => {
	

	return (
		<>
			<Links>
				<LinkContainer href='#'>Home</LinkContainer>
				<LinkContainer href='#'>About us</LinkContainer>
				<LinkContainer href='#'>Portfolio</LinkContainer>
				<LinkContainer href='#'>Contact</LinkContainer>
				<IconsWrapper>
					<LinkContainerIcon href='#'>
						<TwitterIcon />
					</LinkContainerIcon>
					<LinkContainerIcon href='#'>
						<LinkedinIcon />
					</LinkContainerIcon>
				</IconsWrapper>
			</Links>
		</>
	)
}

export default NavLinks
