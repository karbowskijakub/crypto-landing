import styled from 'styled-components'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const IconBox = styled.div`
	position: relative;
	width: 70px;
	height: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
	filter: brightness(0) saturate(100%) invert(42%) sepia(41%) saturate(709%) hue-rotate(165deg) brightness(96%)
		contrast(87%);
`
export const SetupBox = styled.div`
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
`
export const InformationBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	margin-bottom: 1em;
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 350px;
		font-size: ${({ theme }) => theme.fontSize.xl};
		margin: 0 3em;
	}
`

export const NameBox = styled.div`
	color: ${({ theme }) => theme.colors.blue};
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		h2 {
			font-size: ${({ theme }) => theme.fontSize.xxl};
		}
	}
`
