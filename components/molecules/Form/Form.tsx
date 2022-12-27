// @ts-nocheck
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FormBox, TextForm, ButtonForm } from './Form.styles'

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const Form = () => {
	const validationSchema = yup.object({
		name: yup.string('Enter your message').min(5, 'Message should be longer').required('Message is required'),
		email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
		message: yup.string('Enter your message').min(5, 'Message should be longer').required('Message is required'),
		phone: yup
			.string('Enter your message')
			.matches(phoneRegExp, 'Invalid phone number')
			.required('Message is required'),
	})

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	return (
		<>
			<FormBox onSubmit={formik.handleSubmit} autoComplete='off'>
				<TextForm
					fullWidth
					id='name'
					name='name'
					label='Name'
					variant='standard'
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
					sx={{
						label: { color: 'white' },
					}}
				/>
				<TextForm
					fullWidth
					id='email'
					name='email'
					label='Email'
					variant='standard'
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					sx={{
						label: { color: 'white' },
					}}
				/>
				<TextForm
					fullWidth
					id='phone'
					name='phone'
					label='Phone (optional)'
					type='phone'
					variant='standard'
					onChange={formik.handleChange}
					error={formik.touched.phone && Boolean(formik.errors.phone)}
					helperText={formik.touched.phone && formik.errors.phone}
					sx={{
						label: { color: 'white' },
					}}
				/>
				<TextForm
					fullWidth
					id='message'
					name='message'
					label='Message'
					variant='standard'
					multiline
					minRows={2}
					maxRows={2}
					onChange={formik.handleChange}
					error={formik.touched.message && Boolean(formik.errors.message)}
					helperText={formik.touched.message && formik.errors.message}
					sx={{
						label: { color: 'white' },
					}}
				/>
				<ButtonForm variant='contained' fullWidth type='submit'>
					Submit
				</ButtonForm>
			</FormBox>
		</>
	)
}

export default Form
