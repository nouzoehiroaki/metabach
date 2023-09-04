import Head from 'next/head'
import MBstyles from '@/styles/Contact/Contact.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <>
            <Head>
                <title>お問い合わせ | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <motion.div
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}    // アンマウント時
            >
            <main className="main">
                <section className={MBstyles.sec01}>
                    <div className='container'>
                        <div className={MBstyles.wrap}>
                            <h1 className='underPage-h1'>
                                <span>CONTACT</span>
                                お問い合わせ
                            </h1>
                            <h2>
                                <span className={MBstyles.one}>メタバースイベントでお悩みの法人様へ</span>
                                メタバースイベントならお<span>任</span>せください！
                            </h2>
                            <div className={MBstyles.listBox}>
                                <div className={MBstyles.img}>
                                    <picture>
                                        <source srcSet="/under/Contact/metabatch.webp" type="image/webp" />
                                        <Image
                                            src="/under/Contact/metabatch.png"
                                            alt="metabatch"
                                            width={198}
                                            height={216}
                                        />
                                    </picture>
                                </div>
                                <div className={MBstyles.li}>
                                    <ul>
                                        <li>
                                            メタバースを活用して自社の魅力をアップさせたいが、なにができるかイメージがわかない...
                                        </li>
                                        <li>
                                            メタバースで何か取り組みをやってみたいけど、何から手をつけていいかわからない... 
                                        </li>
                                        <li>
                                            メタバースイベントの経験がない中で、初めてイベントを開催して失敗しないか不安だ...
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3>
                                1年半で約40回の音楽ライブを実施してきたメンバーが相談に乗ります！ 
                            </h3>
                            <p className={MBstyles.p01}>
                                イベント代行／音響サポート／YouTube生配信／写真・動画撮影／アバター制作／ワールド制作
                            </p>
                            <div className={MBstyles.strengthsBox}>
                                <div className={MBstyles.left}>
                                    <picture>
                                        <source srcSet="/under/Contact/strengths01.webp" type="image/webp" />
                                        <Image
                                            src="/under/Contact/strengths01.png"
                                            alt="metabatch"
                                            width={740}
                                            height={416}
                                        />
                                    </picture>
                                    <h4>NINJAメタバライブの強み</h4>
                                    <ul>
                                        <li>
                                            音楽ライブ以外にも朗読劇、講演会、リアルイベント連携などの実施経験があります
                                        </li>
                                        <li>
                                            最新のメタバースやNFTといった分野の知見が豊富です
                                        </li>
                                        <li>
                                            音響、ライブ構成、3D制作、動画制作等、様々な分野の技術者・クリエーターが集まります
                                        </li>
                                    </ul>
                                </div>
                                <div className={MBstyles.right}>
                                    <picture>
                                        <source srcSet="/under/Contact/strengths02.webp" type="image/webp" />
                                        <Image
                                            src="/under/Contact/strengths02.png"
                                            alt="metabatch"
                                            width={740}
                                            height={416}
                                        />
                                    </picture>
                                    <h4>プラットフォーム「Rium」の強み</h4>
                                    <ul>
                                        <li>
                                            様々なNFTプロジェクトのワールドやアバターを世界観をもって制作しています
                                        </li>
                                        <li>
                                            ワールドのアップロードなどプラットフォームに関する個別具体的な問題にすばやく対応可能です。機能の変更・追加などもご相談いただけます。
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="https://tayori.com/form/f88ab12b9ab0a5541c1d714ba757fe44b6a07794/" className={`${MBstyles.link} ${MBstyles.typeA}`} target="_blank" rel="noopener noreferrer">
                                メタバースイベントのお問合せはこちら
                            </Link>
                            <p className={MBstyles.pt02}>
                                ご相談は無料です。お気軽にお声がけください！
                            </p>
                        </div>
                    </div>
                </section>
                <section className={`${MBstyles.sec02} ${MBstyles.border}`}>
                    <div className='container'>
                        <div className={MBstyles.wrap}>
                            <h2>
                                <span className={MBstyles.one}>広告出稿をお考えの法人様へ</span>
                                メタバライブに<span>広</span>告出稿ができます！
                            </h2>
                            <div className={MBstyles.center}>
                                <h3>NINJAメタバライブ広告の強み</h3>
                                <ul>
                                    <li>
                                        1イベントでの最多来場数2,093人、総来場数2万5千人以上のイベントです
                                    </li>
                                    <li>
                                        イベント参加者の滞在時間が1～2時間と長いです
                                    </li>
                                    <li>
                                        熱量の高いコミュニティに属する参加者が多く、関連プロジェクトへの「応援文化」が根付いています
                                    </li>
                                    <li>
                                        最前線のNFTやWeb3の世界に明るい、情報感度の高い層へリーチが可能です
                                    </li>
                                </ul>
                            </div>
                            <div className={MBstyles.imgBox}>
                                <div className={MBstyles.img}>
                                    <picture>
                                        <source srcSet="/under/Contact/strengths03.webp" type="image/webp" />
                                        <Image
                                            src="/under/Contact/strengths03.png"
                                            alt="metabatch"
                                            width={740}
                                            height={416}
                                        />
                                    </picture>
                                </div>
                                <div className={MBstyles.img}>
                                    <picture>
                                        <source srcSet="/under/Contact/strengths04.webp" type="image/webp" />
                                        <Image
                                            src="/under/Contact/strengths04.png"
                                            alt="metabatch"
                                            width={740}
                                            height={416}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <Link href="https://tayori.com/form/f88ab12b9ab0a5541c1d714ba757fe44b6a07794/" className={`${MBstyles.link} ${MBstyles.typeB}`} target="_blank" rel="noopener noreferrer">
                                広告のお問合せはこちら
                            </Link>
                            <p className={MBstyles.pt02}>
                                料金：5万円～（ご相談無料）
                            </p>
                        </div>
                    </div>   
                </section>
                <section className={`${MBstyles.sec03} ${MBstyles.border}`}>
                    <div className='container'>
                        <div className={MBstyles.wrap}>
                            <h2>
                                <span className={MBstyles.one}>個人のお客様・出演者様・クリエーター様へ</span>
                                メタバライブに関するご相談・お問い合わせ
                            </h2>
                            <p className={MBstyles.pt03}>
                                Discordサーバー「めたばDAO」では随時メタバライブに関するお問い合わせを受け付けております。<br />
                                機材・音楽権利等に関する情報も充実しています。お気軽にお声がけください。            
                            </p>
                            <Link href="https://discord.com/invite/SSwQwfUn3h" className='discordLink top'  target="_blank" rel="noopener noreferrer">
                                Discordサーバーへ
                            </Link>
                        </div>
                    </div>   
                </section>
            </main>
            </motion.div>
        </>
    )
}
