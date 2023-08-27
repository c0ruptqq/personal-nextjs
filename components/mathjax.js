import Script from 'next/script'


export default function mathJax() {
  return (
    <>
      <Script type="text/x-mathjax-config">
        MathJax.Hub.Config({tex2jax: {inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true },TeX: {extensions: ["mhchem.js"] } });
      </Script>
      <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full"></Script>
    </>
  )
}
