import Head from 'next/head'
import Homepage from '../components/Homepage'
export default function Home() {
  return (
    <div>
      <Head>
        <title>GraySwipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </div>
  )
}
