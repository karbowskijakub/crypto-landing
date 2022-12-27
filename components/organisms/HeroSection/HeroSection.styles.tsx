import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { RiShareBoxLine } from 'react-icons/ri'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
export const Share = styled(RiShareBoxLine)`
	display: block;
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	transition: all 0.3s;
	margin-left: 0.1em;
	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
`
export const ShareBlack = styled(RiShareBoxLine)`
	display: block;
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.black};
	cursor: pointer;
	transition: all 0.3s;
	margin-left: 0.1em;
	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
`

export const HeroWrapper = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
`
export const InfoBox = styled.div`
	z-index: 20;
	position: absolute;
	top: 15em;
	margin-left: 3em;
	max-width: 1400px;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.m};
	@media only screen and ${breakpoints.device.xl} {
		margin-left: 15em;
		top: 20em;
	}
`
export const Text = styled.div``

const moveright = keyframes`
from{
    transform: scaleX(0);
}
to{
    transform: scaleX(1);
}
`

export const Title = styled(motion.h1)`
	display: inline-block;
	position: relative;
	margin-right: 0.5em;
	text-transform: uppercase;
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.xxl};
	}

	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.hl};
	}
`
export const Paragraph = styled(motion.p)`
	max-width: 200px;
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
	@media only screen and ${breakpoints.device.md} {
		font-size: ${({ theme }) => theme.fontSize.xl};
		max-width: 400px;
	}
`

export const Line = styled(motion.div)`
	content: '';
	display: inline-block;
	width: 100px;
	height: 2px;
	bottom: 5px;

	background-color: ${({ theme }) => theme.colors.white};
	animation: all 2s cubic-bezier(0.94, -0.03, 0.75, 0.5);
	transform-origin: top left;
	animation-name: ${moveright};
	@media only screen and ${breakpoints.device.xl} {
		width: 500px;
	}
`
export const Buttons = styled(motion.div)`
	margin-top: 1em;

	display: flex;
	flex-direction: column;
	@media only screen and ${breakpoints.device.xs} {
		flex-direction: row;
	}
`
export const HeroLink = styled(Link)`
	display: flex;
	flex-direction: row;
	text-decoration: none;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.s};

	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
`
export const HeroLinkBlack = styled(Link)`
	z-index: 2;
	display: flex;
	flex-direction: row;
	text-decoration: none;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize.s};
	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`
export const Shadow = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.7);
`
