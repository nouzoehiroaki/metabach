import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home/Home.module.scss'
import Link from 'next/link';

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
                            <Image
                                src="/top/first-view.jpg"
                                alt="スマホで行ける僕らの遊び場(メタバース)"
                                width={2998}
                                height={1640}
                            />
                        </picture>
                    </h1>
                </section>
                <section className={styles.concept}>
                    <div className='container'>
                        <h2 className={styles.h2}>
                            <span className='en color'>CONCEPT</span>
                            コミュニティで、<span className='color'>遊</span>ぼう。
                        </h2>
                        <p className={`${styles.topPLetter} base16 top`}>
                            国産メタバースプラットフォーム「Rium」は、コミュニティに根差した「遊び場」を提供します。圧倒的な「動作の軽さ」と「音質の良さ」で、仲間と一緒に遊んじゃおう!<br />
                            NINJAメタバライブは、メタバースライブを1年半で約40回やってきたプロ集団。
                        </p>
                        <strong className={styles.strong}>
                            このたび、NINJAメタバライブは
                            <Link href="/test" className={styles.rium}>
                                <span className='newWindow'>「Rium」</span>
                            </Link>
                            と提携し、<br />
                            一緒にメタバース×NFTの未来を切り拓いていきます。
                        </strong>
                        <Link href="/test" className='btn01'>プレスリリース</Link>
                        <button className={`${styles.margin01} newOrder`}>
                            <picture>
                                <source srcSet="/newOrder.webp" type="image/webp" />
                                <Image
                                    src="/newOrder.jpg"
                                    alt="めたばっちホルダーの皆様へ新体制についてのお知らせ"
                                    width={640}
                                    height={140}
                                />
                            </picture>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}
