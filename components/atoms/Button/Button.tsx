import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroButton = styled(motion.button)`
width: 150px;


display: flex;
align-items: center;
justify-content: center;
position:relative;
cursor: pointer;
padding: 1em 1.5em;
background-color: transparent;
font-weight: bold;
margin: 1em 0;
border: none;
border-bottom: 1px solid ${({ theme }) => theme.colors.white};
overflow: hidden;
&:hover {
    color: ${({ theme }) => theme.colors.black};
  }
  
  &:before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.grey};
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.09s ease-in;
  }
  
  &:hover:before {
    top: 0;
  }


`

export const HeroButtonBlack = styled(motion.button)`
width: 150px;


display: flex;
align-items: center;
justify-content: center;
position:relative;
cursor: pointer;
padding: 1em 1.5em;
background-color: transparent;
font-weight: bold;
margin: 2.5em 0;
border: none;

border-bottom: 3px solid ${({ theme }) => theme.colors.black};
overflow: hidden;

&:hover {
    color: ${({ theme }) => theme.colors.black};
  }
  
  &:before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.grey};
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.09s ease-in;
  }
  
  &:hover:before {
    top: 0;
  }


`