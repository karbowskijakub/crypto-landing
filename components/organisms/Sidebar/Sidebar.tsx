// @ts-nocheck
import React from 'react'
import { Background, MobileLinks, HamburgerDiv, HamburgerMenu } from './Sidebar.styles'
import {
	LinkContainer,
	IconsWrapper,
	LinkContainerIcon,
	TwitterIcon,
	LinkedinIcon,
} from '../../molecules/NavLinks/NavLinks.styles'
import { useEffect } from 'react'

interface Open {
	setOpen?: any
	isOpen?: any
}

const sidebarTransition = { type: 'spring', duration: 0.4 }

const Sidebar = ({ isOpen, setOpen }: Open) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = ''
		}
	}, [])
	const ClassName = isOpen ? 'active' : null
	return (
		<>
			{/* background */}
			<Background
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: sidebarTransition,
				}}
				exit={{ opacity: 0, transition: sidebarTransition }}
				onClick={isOpen}></Background>
			{/* MobileLinks */}
			<MobileLinks
				initial={{ x: '100%' }}
				animate={{
					x: '0%',
					transition: sidebarTransition,
				}}
				exit={{ x: '100%', transition: sidebarTransition }}>
				<LinkContainer className={ClassName} href='#'>
					Home
				</LinkContainer>
				<LinkContainer className={ClassName} href='#'>
					About us
				</LinkContainer>
				<LinkContainer className={ClassName} href='#'>
					Portfolio
				</LinkContainer>
				<LinkContainer className={ClassName} href='#'>
					Contact
				</LinkContainer>
				<IconsWrapper>
					<LinkContainerIcon className={ClassName} href='#'>
						<TwitterIcon />
					</LinkContainerIcon>
					<LinkContainerIcon className={ClassName} href='#'>
						<LinkedinIcon />
					</LinkContainerIcon>
				</IconsWrapper>
				<HamburgerDiv>
					<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}></HamburgerMenu>
				</HamburgerDiv>
			</MobileLinks>
		</>
	)
}

export default Sidebar
