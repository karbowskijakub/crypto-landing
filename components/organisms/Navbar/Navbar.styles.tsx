import styled from 'styled-components'
import Link from 'next/link'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { Cross as Hamburger } from 'hamburger-react'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'

export const Container = styled.nav`
position:absolute;
top:0;
z-index:30;
width:100%;
height:130px;
display:flex;
align-items:center;
justify-content:center;

`

export const NavWrapper =styled.div`
width:1200px;
display:flex;
align-items:center;
justify-content:space-between;
padding:2em;
`
export const LogoWrapper = styled.div`
z-index:5;
`
export const LogoContainer =styled(Link)`
z-index:5;
text-decoration:none;
font-size: ${({ theme }) => theme.fontSize.xl};
color:${({ theme }) => theme.colors.white};
font-weight:bold;
transition: all 0.3s;

&:hover {
    padding-left:0.1em;
}
@media only screen and ${breakpoints.device.md} {
	font-size: ${({ theme }) => theme.fontSize.xxxl};
}

`
export const HamburgerMenu = styled(Hamburger)`
z-index: 100;
`

export const HamburgerDiv = styled.div`
color: ${({ theme }) => theme.colors.white};
	
	z-index: 20;
	@media only screen and ${breakpoints.device.md} {
		display: none;
	}
`
