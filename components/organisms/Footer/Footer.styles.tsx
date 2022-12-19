import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.ts'
import { motion } from 'framer-motion'

export const Container = styled.div`
z-index: 5;
width:100%;
position:relative;
display:flex;
align-items:center;
justify-content:center;
background:${({ theme }) => theme.colors.darkBlue};

`

export const LogoBox = styled.div`

display:flex;
align-items:flex-start;
justify-content:center;

`
export const CopyBox = styled(motion.div)`



`
export const CopyContainer = styled.div`
p{
   color: ${({ theme }) => theme.colors.white};
}
display:flex;
align-items:flex-start;
justify-content:center;
margin-top:1em;

`
export const FooterInfo = styled(motion.div)`



`

export const InfoBox = styled.div`

padding:2em;
`