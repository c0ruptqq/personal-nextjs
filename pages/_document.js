import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="stylesheet" href="/_static/page.css" />
        <link rel="stylesheet" href="/_static/markdown.css" />
        <link rel="stylesheet" href="/_static/highlight.css" />
        <link rel="stylesheet" href="/_static/katex@0.15.3.css" />
        <link rel="stylesheet" href="/_static/sequence-diagram-min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
