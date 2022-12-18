import Head from 'next/head'
import MainPage from './MainPage'
import Navbar from '../components/organisms/Navbar/Navbar'

export default function Home() {
  return (
<>
      <Head>
        <title>CryptoEuth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<MainPage/>
     </>

  )
}
