import React from 'react'
import Link from 'next/link'
import { Container, NavWrapper, LogoContainer, Links, HamburgerDiv, HamburgerMenu,LogoWrapper } from './Navbar.styles'
import NavLinks from '../../molecules/NavLinks/NavLinks'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
		<Container>
			<NavWrapper>
			<LogoWrapper>
					<LogoContainer href='#' passHref>
						CryptoEnth
					</LogoContainer>
				</LogoWrapper>

				<HamburgerDiv>
					<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}></HamburgerMenu>
				</HamburgerDiv>
				<NavLinks />
			</NavWrapper>
			
		</Container>
		<AnimatePresence>
		{isOpen && <Sidebar isOpen={() => setOpen(false)} setOpen={setOpen} />}</AnimatePresence></>
	)
}

export default Navbar
