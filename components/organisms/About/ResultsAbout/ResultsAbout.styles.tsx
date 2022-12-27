import { motion } from 'framer-motion'
import Link from 'next/link'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import styled from 'styled-components'


export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: ${({ theme }) => theme.colors.darkBlue};
`