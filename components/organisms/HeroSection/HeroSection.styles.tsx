import styled,{keyframes}  from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { RiShareBoxLine } from 'react-icons/ri'

export const Share = styled(RiShareBoxLine)`
display:block;
font-size: ${({ theme }) => theme.fontSize.l};
color: ${({ theme }) => theme.colors.white};
cursor: pointer;
transition: all 0.3s;
margin-left:0.1em;

`
export const ShareBlack = styled(RiShareBoxLine)`
display:block;
font-size: ${({ theme }) => theme.fontSize.l};
color: ${({ theme }) => theme.colors.black};
cursor: pointer;
transition: all 0.3s;
margin-left:0.1em;

`


export const HeroWrapper = styled.section`
	width: 100%;
	height: 100vh;
	position: relative
`
export const InfoBox = styled.div`
	z-index: 20;
	position: absolute;
	top: 15em;
	margin-left: 3em;
	
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.m};
`
export const Text = styled.div`

`


const moveright = keyframes`
from{
    transform: scaleX(0);
}
to{
    transform: scaleX(1);
}
`;

export const Title = styled(motion.h1)`
display:inline-block;
position:relative;
margin-right:0.5em;
text-transform: uppercase;
`
export const Paragraph = styled(motion.p)`
max-width:200px;
`


export const Line =  styled(motion.div)`
content: "";
display: inline-block;
width: 100px;
height: 2px;
bottom: 5px;

background-color:  ${({ theme }) => theme.colors.white};
animation:all 2s cubic-bezier(0.94, -0.03, 0.75, 0.5);
transform-origin: top left;
animation-name: ${moveright};
`
export const Buttons = styled(motion.div)`
margin-top:1em;
display:flex;
flex-direction:column;
`
export const HeroLink = styled(Link)`
display:flex;
flex-direction:row;
text-decoration:none;
align-items:center;
justify-content:center;
color: ${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize.s};
`
export const HeroLinkBlack = styled(Link)`
display:flex;
flex-direction:row;
text-decoration:none;
align-items:center;
justify-content:center;
color: ${({ theme }) => theme.colors.black};
font-size: ${({ theme }) => theme.fontSize.s};
`