import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: ${({ theme }) => theme.colors.lavender};
`
