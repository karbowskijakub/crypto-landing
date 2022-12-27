import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'

export const Decoration = styled(motion.div)`
	border-top-width: 40%;
	border: none;
	border-top: 3px solid ${({ theme }) => theme.colors.blue};
	width: 150px;
	height: 10px;
	background: transparent;
	position: absolute;
	top: 4em;
	left: 2em;

	@media only screen and ${breakpoints.device.xs} {
		width: 250px;
	}
	@media only screen and ${breakpoints.device.xl} {
		width: 450px;
	}
	@media only screen and ${breakpoints.device.lg} {
		width: 750px;
	}
`

export const InfoBox = styled.div`
	margin-top: 4em;
	padding: 2em;
`

export const TitleBox = styled(motion.div)`
	text-align: center;
	margin: 4em 0;
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
	@media only screen and ${breakpoints.device.lg} {
		font-size: ${({ theme }) => theme.fontSize.xxl};
	}
`

export const DivBox = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and ${breakpoints.device.lg} {
		align-items: flex-start;
	}
`

export const TextBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
	@media only screen and ${breakpoints.device.xs} {
		max-width: 750px;
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
`
export const ButtonBox = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
`
export const CryptoBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		flex-direction:row;
		justify-content: space-between;
		padding:8em 4em;

	}
`
export const DataBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.blue};
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		justify-content: center;
		align-items: center;
		order: 3;
	}
`
export const NameBox = styled.div`

@media only screen and ${breakpoints.device.lg} {
	display: flex;
flex-direction:row;
justify-content: center;
}

	color: ${({ theme }) => theme.colors.black};
`
export const IconBox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 100%;
	margin-right: 1.5em;
`

export const CategoryBox = styled.div`
	display: flex;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.m};
	@media only screen and ${breakpoints.device.lg} {
		margin-left: 1.5em;
	
	}
	h1 {
		@media only screen and ${breakpoints.device.lg} {
			font-size: ${({ theme }) => theme.fontSize.xxxl};
		}
	}
	p {
		@media only screen and ${breakpoints.device.lg} {
			font-size: ${({ theme }) => theme.fontSize.xl};
		}
	}
	h2 {
		@media only screen and ${breakpoints.device.lg} {
			font-size: ${({ theme }) => theme.fontSize.xxl};
		}
	}
`
export const InformationBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	margin-bottom: 1em;
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 900px;
		font-size: ${({ theme }) => theme.fontSize.xl};
		margin: 0 3em;
	}
`
export const HoverBox = styled.div`
	transition: all 0.3s ease;
	&:hover {
		transform: translateX(10px);
	}
	@media only screen and ${breakpoints.device.lg} {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding: 5em 6em;
	
	}


	
`
