import styled from 'styled-components'
import breakpoints from '../../../assets/breakpoints/breakpoints.js'
import { motion } from 'framer-motion'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const FormBox = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-width: 100%;
	min-height: 100%;
`

export const TextForm = styled(TextField)`
	& label.Mui-focused {
		color: ${({ theme }) => theme.colors.white};
	}

	& .MuiInput-underline::before {
		border-color: ${({ theme }) => theme.colors.white};
	}
	& .MuiInput-underline::after {
		border: none;
	}
	&& .MuiInput-underline:hover:before {
		border-bottom: 2px solid ${({ theme }) => theme.colors.white};
	}

	input {
		color: ${({ theme }) => theme.colors.white};
	}
	textarea {
		color: ${({ theme }) => theme.colors.white};
	}
`
export const ButtonForm = styled(Button)``
