import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'

export const CryptoBox = styled(motion.div)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
    

`
export const NameBox = styled.div`
display:flex;
flex-direction:row;
align-items:center;
	color: ${({ theme }) => theme.colors.black};
`
