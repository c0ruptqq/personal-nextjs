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
        <script type="module" src="https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js"></script>
        <link rel="shortcut icon" type="image/ico" href="/_static/favicon.ico" />
        <link rel="stylesheet" href="/_static/page.css" />
        <link rel="stylesheet" href="/_static/markdown.css" />
        <link rel="stylesheet" href="/_static/highlight.css" />
        <link rel="stylesheet" href="/_static/katex@0.15.3.css" />
        <link rel="stylesheet" href="/_static/sequence-diagram-min.css" />
        <script type="text/javascript" src="/_static/underscore-min.js"></script>
        <script type="text/javascript" src="/_static/webfont.js"></script>
        <script type="text/javascript" src="/_static/snap.svg.min.js"></script>
        <script type="text/javascript" src="/_static/tweenlite.min.js"></script>
        <script type="text/javascript" src="/_static/mermaid.min.js"></script>
        <script type="text/javascript" src="/_static/sequence-diagram-min.js"></script>
        <script type="text/javascript" src="/_static/katex@0.15.3.js"></script>
        <script type="text/javascript" src="/_static/mhchem.min.js"></script>
        <script type="text/javascript" src="/_static/raphael@2.3.0.min.js"></script>
        <script type="text/javascript" src="/_static/flowchart@1.13.0.min.js"></script>
        <script type="text/javascript" src="/_static/viz.js"></script>
        <script type="text/javascript" src="/_static/full.render.js"></script>
      </Head>
      <main className="bg-bg dark:bg-text w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
