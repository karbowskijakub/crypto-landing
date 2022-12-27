import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: ${({ theme }) => theme.colors.lavender};
`

export const InfoBox = styled.div`
	margin-top: 7em;
	margin-bottom: 7em;
	padding: 2em;
	display:flex;
	justify-content:flex-start;
	flex-direction:column;
	align-items:center;
	@media only screen and ${breakpoints.device.lg} {
		display:flex;
		justify-content:space-between;
		align-items:center;
		flex-direction:row;
	}

`
export const TitleBox = styled(motion.div)`
	text-align: center;
	
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
	@media only screen and ${breakpoints.device.lg} {
		font-size: ${({ theme }) => theme.fontSize.xl};
		margin: 4em 3em;
	}
	@media only screen and ${breakpoints.device.xl} {
		font-size: ${({ theme }) => theme.fontSize.xxl};
		
	}
`