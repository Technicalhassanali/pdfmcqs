import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        <Script src='/my-script.js'  strategy="afterInteractive"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
