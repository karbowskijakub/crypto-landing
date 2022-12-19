// @ts-nocheck
import type { AppProps } from 'next/app'
import GlobalStyles from '../assets/styles/globalStyles.js'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/styles/theme.js'
import MainTemplate from '../components/Templates/MainTemplate'
import '../assets/styles/fonts.css'
import CryptoProvider from '../providers/CryptoProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		
		<ThemeProvider theme={theme}>
			
			<CryptoProvider>
				<GlobalStyles />

				<MainTemplate>
					<Component {...pageProps} />
				</MainTemplate>
			</CryptoProvider>
		</ThemeProvider>
	)
}
