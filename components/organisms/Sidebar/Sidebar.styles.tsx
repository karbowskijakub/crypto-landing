import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'
import { Cross as Hamburger } from 'hamburger-react'

export const Background = styled(motion.div)`
	position: fixed;
	z-index: 100;
	background: rgba(0, 0, 0, 0.6);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`

export const MobileLinks = styled(motion.div)`
	position: fixed;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 100;
	height: 100%;
	background: black;
`
export const HamburgerMenu = styled(Hamburger)`
	z-index: 100;
`

export const HamburgerDiv = styled.div`
	position: fixed;
	top: 2.5em;
	right: 0;
	color: ${({ theme }) => theme.colors.white};
	margin-right: 1.5em;
	z-index: 100;
	@media only screen and ${breakpoints.device.md} {
		display: none;
	}
`
