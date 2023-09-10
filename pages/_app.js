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
        <Script type="module" src="https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js"></Script>
        <Script type="text/javascript" src="/_static/underscore-min.js"></Script>
        <Script type="text/javascript" src="/_static/webfont.js"></Script>
        <Script type="text/javascript" src="/_static/snap.svg.min.js"></Script>
        <Script type="text/javascript" src="/_static/tweenlite.min.js"></Script>
        <Script type="text/javascript" src="/_static/mermaid.min.js"></Script>
        <Script type="text/javascript" src="/_static/sequence-diagram-min.js"></Script>
        <Script type="text/javascript" src="/_static/katex@0.15.3.js"></Script>
        <Script type="text/javascript" src="/_static/mhchem.min.js"></Script>
        <Script type="text/javascript" src="/_static/raphael@2.3.0.min.js"></Script>
        <Script type="text/javascript" src="/_static/flowchart@1.13.0.min.js"></Script>
        <Script type="text/javascript" src="/_static/viz.js"></Script>
        <Script type="text/javascript" src="/_static/full.render.js"></Script>
      </Head>
      <main className="bg-bg dark:bg-text w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
