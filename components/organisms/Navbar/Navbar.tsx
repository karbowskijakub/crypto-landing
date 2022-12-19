import React from 'react'
import Link from 'next/link'
import { Container, NavWrapper, LogoContainer,  HamburgerDiv, HamburgerMenu,LogoWrapper } from './Navbar.styles'
import NavLinks from '../../molecules/NavLinks/NavLinks'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Right } from '../../animations/animations.js'
const Navbar = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
		<Container>
			<NavWrapper>
			<LogoWrapper variants={Right}
           custom={{ delay: 0.5}} 
           initial='initial' 
           animate='animate'>
					<LogoContainer href='#' passHref>
						CryptoEnth
					</LogoContainer>
				</LogoWrapper>

				<HamburgerDiv variants={Right}
           custom={{ delay: 0.5}} 
           initial='initial' 
           animate='animate'>
					<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}></HamburgerMenu>
				</HamburgerDiv>
				<NavLinks 
				variants={Right}
           custom={{ delay: 0.5}} 
           initial='initial' 
           animate='animate'
				/>
			</NavWrapper>
			
		</Container>
		
		<AnimatePresence>
			{/* 
// @ts-ignore */}
		{isOpen && <Sidebar isOpen={() => setOpen(false)} setOpen={setOpen} />}</AnimatePresence></>
	)
}

export default Navbar
