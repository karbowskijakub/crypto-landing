import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const CategoryBox = styled.div`
	display: flex;

	justify-content: center;
	flex-direction: column;
	font-size: ${({ theme }) => theme.fontSize.m};
	@media only screen and ${breakpoints.device.lgx} {
		font-size: ${({ theme }) => theme.fontSize.xxl};
		
	}
	
	@media only screen and ${breakpoints.device.lg} {
		text-align:center;
		
	}
`
export const CryptoBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding: 5em 2em;
	}

	&:last-child {
		margin-bottom: 4em;
	}
`
