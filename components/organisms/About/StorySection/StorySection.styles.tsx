import styled from 'styled-components'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: ${({ theme }) => theme.colors.white};
`
export const Selector = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and ${breakpoints.device.lg} {
		margin-top: 7em;
		display: block;
	}
`
export const SelectorItems = styled.div`
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		flex-direction: column;
	}
`
export const Section = styled.div`
	
	@media only screen and ${breakpoints.device.lg} {
position:relative;
	display: grid;
	gap: 5px;
	grid-template-columns: repeat(2, 1fr);
	
	
`
export const TextBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
	@media only screen and ${breakpoints.device.xs} {
		max-width: 550px;
		font-size: ${({ theme }) => theme.fontSize.xl};
	}


`

export const TitleBox = styled(motion.div)`
	text-align: center;
	
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
	@media only screen and ${breakpoints.device.lg} {
		font-size: ${({ theme }) => theme.fontSize.xl};
        border-bottom: none;
		border-top: 1px solid ${({ theme }) => theme.colors.blue};
		padding: 1em;
		position: sticky;
		top: 5px;
		display: inline-flex;
		justify-content: flex-start;
		align-items: center;
	}
`