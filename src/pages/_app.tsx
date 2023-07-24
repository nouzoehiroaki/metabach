import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
