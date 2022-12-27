import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const Container = styled.div`
	z-index: 5;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors.darkBlue};
`

export const LogoBox = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 4em;
`
export const CopyBox = styled(motion.div)``
export const CopyContainer = styled.div`
	p {
		font-size: ${({ theme }) => theme.fontSize.s};
		color: ${({ theme }) => theme.colors.white};
		@media only screen and ${breakpoints.device.xss} {
			font-size: ${({ theme }) => theme.fontSize.xl};
		}
	}
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-top: 1em;
`
export const FooterInfo = styled(motion.div)``

export const InfoBox = styled.div`
	padding: 2em;
`
export const TextBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	p {
		text-align: center;
		color: ${({ theme }) => theme.colors.white};
	}
	@media only screen and ${breakpoints.device.xs} {
		max-width: 750px;
	}
	@media only screen and ${breakpoints.device.sm} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
	margin-bottom: 2em;
`
