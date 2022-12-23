import styled from 'styled-components'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const LinkContainer = styled(Link)`
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.white};
	transition: all 0.3s;
	margin: 0em 1em;
	&:hover {
		color: ${({ theme }) => theme.colors.grey};
	}
	&.active {
		padding: 0.5em;
	}
	@media only screen and ${breakpoints.device.md} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
`
export const LinkContainerIcon = styled(Link)`
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.white};
	margin: 0 0.3em;
	transition: all 0.3s;
	&:hover {
		color: ${({ theme }) => theme.colors.grey};
	}
	&.active {
		padding: 0.5em;
	}
`
export const IconsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
export const LinkedinIcon = styled(AiFillLinkedin)`
	display: block;
	font-size: ${({ theme }) => theme.fontSize.xxl};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		color: ${({ theme }) => theme.colors.white};
		transform: scale(1.2);
	}
`

export const TwitterIcon = styled(AiFillTwitterSquare)`
	display: block;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.xxl};

	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		color: ${({ theme }) => theme.colors.white};
		transform: scale(1.2);
	}
`

export const Links = styled(motion.div)`
	margin: 1em 1em;
	align-items: center;
	justify-content: center;
	display: none;
	@media only screen and ${breakpoints.device.md} {
		display: flex;
	}
`
