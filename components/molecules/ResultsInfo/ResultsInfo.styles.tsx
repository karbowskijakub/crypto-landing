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
`

export const ElementWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ElementNumber = styled.div`
height:50%;
color:${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize.l};
`
export const ElementInfo = styled.div`
font-size: ${({ theme }) => theme.fontSize.l};
text-align:center;
color:${({ theme }) => theme.colors.white}
`