import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.ts'


export const Container = styled.div`

width:100%;
position:relative;
display:flex;
align-items:flex-start;
justify-content:center;
background:${({ theme }) => theme.colors.white};
margin-bottom:3em;
`
