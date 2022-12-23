import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: ${({ theme }) => theme.colors.darkBlue};
`
export const CategoryBox = styled.div`
	display: flex;

	justify-content: center;
	flex-direction: column;
	font-size: ${({ theme }) => theme.fontSize.m};
`

export const TitleBox = styled(motion.div)`
	text-align: center;

	background: ${({ theme }) => theme.colors.darkBlue};
	h1 {
		color: ${({ theme }) => theme.colors.white};
	}
`

export const InfoBox = styled.div`
	margin-top: 6em;
	padding: 2em;
`
export const TextBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	p {
		color: ${({ theme }) => theme.colors.white};
	}
`
export const StatsBox = styled(motion.div)`
	width: 100%;
	height: 100%;

	display: grid;
	gap: 5px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
`

export const ResultBox = styled(motion.div)``
