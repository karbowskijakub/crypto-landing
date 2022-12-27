import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const Element = styled(motion.div)`
	width: 100%;
	height: 150px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media only screen and ${breakpoints.device.lgx} {
		margin: 3em 0;
	}
`

export const ElementWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ElementNumber = styled.div`
	height: 50%;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.l};
	@media only screen and ${breakpoints.device.lgx} {
		font-size: ${({ theme }) => theme.fontSize.xxl};
	}
`
export const ElementInfo = styled.div`
	font-size: ${({ theme }) => theme.fontSize.l};
	text-align: center;
	color: ${({ theme }) => theme.colors.white};

	@media only screen and ${breakpoints.device.lgx} {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
`
