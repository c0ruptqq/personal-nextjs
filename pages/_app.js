import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from '../components/footer'
import '../styles/global.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <main className="bg-bg dark:bg-text w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
