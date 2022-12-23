import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
export const HeroButton = styled(motion.button)`
	width: 150px;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
	padding: 1em 1.5em;
	background-color: transparent;
	font-weight: bold;
	margin: 1em 0em;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.white};
	overflow: hidden;

	&:before {
		content: '';
		position: absolute;
		background: ${({ theme }) => theme.colors.blue};
		bottom: 0;
		left: 0;
		right: 0;
		top: 100%;
		z-index: -1;
		transition: top 0.09s ease-in;
	}

	&:hover:before {
		top: 0;
	}

	@media only screen and ${breakpoints.device.xs} {
		margin-right: 2.5em;
		padding: 2em 2.5em;
	}
	@media only screen and ${breakpoints.device.xl} {
		margin-right: 2.5em;
		padding: 2.5em 3.5em;
		width: 250px;
	}
`

export const HeroButtonBlack = styled(motion.button)`
	width: 150px;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
	padding: 1em 1.5em;
	background-color: transparent;
	font-weight: bold;
	margin: 2.5em 0;
	border: 1px solid ${({ theme }) => theme.colors.black};
	z-index: 1;

	overflow: hidden;
`
