import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home/Home.module.scss'

export default function Home() {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            <meta name="description" content="「めたばっち」は、メタバースライブ文化を盛り上げる10000点のジェネラティブNFT!Ninja DAOと一緒に作ってきた「メタバの渦」をもっともっと拡げます!" />
            <link rel="icon" href="/og.ico" />
            <link rel="apple-touch-icon" href="/og.png" />
            <meta property="og:site_name" content="メタバースライブ文化を盛り上げるNFT | めたばっち" />
            <meta property="og:url" content="https://metabatch.ninjametavelive.com/"/>
            <meta property="og:type" content="website or article"/>
            <meta property="og:title" content="メタバースライブ文化を盛り上げるNFT | めたばっち"/>
            <meta property="og:description" content="「めたばっち」は、メタバースライブ文化を盛り上げる10000点のジェネラティブNFT!Ninja DAOと一緒に作ってきた「メタバの渦」をもっともっと拡げます!"/>
            <meta property="og:image" content="https://metabatch.ninjametavelive.com/og.png"/>
            <meta property="og:locale" content="ja_JP"/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content="「めたばっち」は、メタバースライブ文化を盛り上げる10000点のジェネラティブNFT!Ninja DAOと一緒に作ってきた「メタバの渦」をもっともっと拡げます!" />
            <meta name="twitter:image:src" content="https://metabatch.ninjametavelive.com/og.png" />
        </Head>
        <main className={styles.main}>
            test
        </main>
    </>
  )
}
