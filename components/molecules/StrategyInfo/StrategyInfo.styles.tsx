import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'

export const CategoryBox = styled.div`
	display: flex;

	justify-content: center;
	flex-direction: column;
	font-size: ${({ theme }) => theme.fontSize.m};
`
