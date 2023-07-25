import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <main className="main">
                <section className={styles.firstView}>
                    <h1>
                        <picture>
                            <source media="(max-width: 768px)" srcSet="/top/first-view-sp.webp" type="image/webp" />
                            <source media="(max-width: 768px)" srcSet="/top/first-view-sp.jpg" type="image/jpg" />
                            <source srcSet="/top/first-view.webp" type="image/webp" />
                            <img className="img" src="/top/first-view.jpg" alt="スマホで行ける僕らの遊び場(メタバース)" width={2998} height={1640}/>
                        </picture>
                    </h1>
                </section>
            </main>
        </>
    )
}
