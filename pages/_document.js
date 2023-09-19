import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="mermaid"
          type="module"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
         mermaid.initialize({startOnLoad: true});
         mermaid.contentLoaded();`,
          }}
        />
        <link rel="stylesheet" href="/_static/katex.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
