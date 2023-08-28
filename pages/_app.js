import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from '../components/footer'
import '../styles/global.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script type="text/javascript" id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
        </script>
      </Head>
      <main className="bg-bg dark:bg-text w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
