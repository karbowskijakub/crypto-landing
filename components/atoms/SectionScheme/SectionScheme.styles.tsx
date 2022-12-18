import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Decoration = styled(motion.div)`
border-top-width: 40%;
border:none;
border-top: 3px solid ${({ theme }) => theme.colors.blue};
width: 150px;
height:10px;
background: transparent;
position: absolute;
top: 4em;
left: 2em;


`

export const InfoBox = styled.div`
margin-top:6em;
padding:2em;
`

export const TitleBox = styled(motion.div)`
text-align:center;


`

export const TextBox =  styled(motion.div)`

border-bottom:1px solid ${({ theme }) => theme.colors.grey};
`
export const ButtonBox =  styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
`
export const CryptoBox = styled(motion.div)`


border-bottom:1px solid ${({ theme }) => theme.colors.grey};
&:last-child {
    border:none;
}



`
export const DataBox = styled.div`
font-size: ${({ theme }) => theme.fontSize.xl};
color: ${({ theme }) => theme.colors.blue};
`
export const NameBox = styled.div`
display:flex;
flex-direction:row;
color: ${({ theme }) => theme.colors.black};

`
export const IconBox = styled.div`
position:relative;
width:70px;
height:140px;
display:flex;
align-items:center;
justify-content:center;


`
export const CategoryBox = styled.div`
margin-left:1.5em;
display:flex;

justify-content:center;
flex-direction:column;
font-size: ${({ theme }) => theme.fontSize.m};
`
export const InformationBox = styled.div`

font-size: ${({ theme }) => theme.fontSize.md};
`