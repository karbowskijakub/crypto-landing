import { motion } from 'framer-motion'
import Link from 'next/link'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'
import styled from 'styled-components'

export const HeroWrapper = styled.section`
width: 100%;
height: 50vh;
position: relative;
`
export const Title = styled(motion.h1)`
	display: inline-block;
	position: relative;
	margin-right: 0.5em;
	text-transform: uppercase;
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.xxxl};
	}

	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.hl};
	}
`