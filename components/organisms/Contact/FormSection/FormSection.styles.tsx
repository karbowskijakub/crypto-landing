import styled from 'styled-components'
import breakpoints from '../../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const Container = styled.div`
	width: 100%;
	height: 1200px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors.white};
`

export const ContactBox = styled.div`
	width: 80%;
	height: 80%;
	border-radius: 1em;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media only screen and ${breakpoints.device.lg} {
		width: 90%;
		height: 60%;
	}
	@media only screen and ${breakpoints.device.lg} {
		flex-direction: row;
		padding: 7em;
	}
	padding: 1em;
`
export const Info = styled.div`
	max-width: 60%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media only screen and ${breakpoints.device.lg} {
		margin-right: 2em;
	}

	h1 {
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.l};
		margin-bottom: 2em;
		@media only screen and ${breakpoints.device.xs} {
			font-size: ${({ theme }) => theme.fontSize.xxl};
		}
		@media only screen and ${breakpoints.device.lg} {
			font-size: ${({ theme }) => theme.fontSize.xxl};
		}
	}
	p {
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.m};
		@media only screen and ${breakpoints.device.xs} {
			font-size: ${({ theme }) => theme.fontSize.l};
		}
		@media only screen and ${breakpoints.device.lg} {
			font-size: ${({ theme }) => theme.fontSize.l};
		}
	}
`
export const InfoContainer = styled(motion.div)`
	width: 100%;
	height: 100%;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const FormBox = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    z-index:10;
`
