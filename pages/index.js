import Head from 'next/head'
import NavBar from '../components/NavBar'
import Homepage from '../components/Homepage'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>GraySwipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  )
}
