import Head from "next/head";
import Navbar from "../components/navbar";
import '../styles/global.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-light w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
