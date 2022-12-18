import type { AppProps } from 'next/app'
import GlobalStyles from '../assets/styles/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/styles/theme.ts'
import MainTemplate from '../components/Templates/MainTemplate'
import '../assets/styles/fonts.css'
import CryptoProvider from '../providers/CryptoProvider';


export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CryptoProvider>
			<GlobalStyles />
			
      <MainTemplate/>
	
			<Component {...pageProps} />
			</CryptoProvider>
		</ThemeProvider>
	)
}
