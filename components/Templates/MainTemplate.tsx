import Navbar from '../organisms/Navbar/Navbar'
import Footer from '../organisms/Footer/Footer'
import Head from 'next/head'
const MainTemplate = ({ children }: any) => {
	return (
		<>
			<Head>
				<title>CryptoEuth</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/block.ico' />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default MainTemplate
