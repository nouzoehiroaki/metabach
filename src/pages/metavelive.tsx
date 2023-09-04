import React, { useState  } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import MLstyles from '@/styles/Metavelive/Metavelive.module.scss'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { motion } from 'framer-motion'

export default function Metavelive() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        document.cookie = 'myCookie=myValue; SameSite=None; Secure';
        setIsOpen(true);
    };
    const closeVideoModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Head>
                <title>NINJAメタバライブについて | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <motion.div
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}    // アンマウント時
            >
            <main className="main">
                <div className='container'>
                    <div className={MLstyles.wrap}>
                        <h1 className='underPage-h1'>
                            <span>ABOUT NINJA METAVELIVE</span>
                            NINJAメタバライブについて
                        </h1>
                        <div className={MLstyles.flex}>
                            <p className={MLstyles.p}>
                                NINJAメタバライブは、メタバースライブを2021年12月から1年半で約40回開催してきたプロ集団です。<br /><br />

                                延べ来場者数は2.5万人以上。<br /><br />

                                日本最大のNFT系コミュニティ「NinjaDAO」発でゼロからメンバーが集まり、メタバースライブを作ってきました。
                            </p>
                            <div className={MLstyles.div}>
                                <h2>
                                    <picture>
                                        <source media="(max-width: 768px)" srcSet="/top/ninjametavelive-sp.webp" type="image/webp" />
                                        <source media="(max-width: 768px)" srcSet="/top/ninjametavelive-sp.png" type="image/png" />
                                        <source srcSet="/top/ninjametavelive.webp" type="image/webp" />
                                        <Image
                                            src="/top/ninjametavelive.png"
                                            alt="Ninja MetaveLive"
                                            width={840}
                                            height={745}
                                        />
                                    </picture>
                                </h2>
                            </div>
                        </div>
                        <div className={MLstyles.boad}>
                            <strong>これまでの実績</strong>
                            <ul>
                                <li>DOZAN11(三木道三)氏 2回出演 </li>
                                <li>SABOTEN キヨシ氏 2回出演</li>
                                <li>八代亜紀氏バースデーライブサポート</li>
                                <li>テレビ放映 NHK BS1 「欲望の資本主義 2022夏特別編 メタバースの衝撃~デジタル経済のパラドックス~」</li>
                            </ul>
                        </div>
                        <section className={`${MLstyles.contents} section-margin`}>
                            <div className='site-h3'>
                                <h3>
                                    MISSION
                                </h3>
                            </div>
                            <h4>
                                メタバースライブに≪
                                <span>行く</span>≫<br className='spOnly'/>文化をもっと広げる
                            </h4>
                            <div className={MLstyles.flex02}>
                                <div className={MLstyles.textBox}>
                                    <h5>あなたは覚えていますか？</h5>
                                    <p>
                                        メタバライブに初めて行ったときの、あの感動を。<br /><br />

                                        これから行く人は、想像してみてください。<br /><br />

                                        家の中で。家族の前で。夕飯を食べながら。洗濯物を干しながら。<br />
                                        そこには、アバターになった私がいて、仲間がいて、同じ空間を共有している。
                                    </p>
                                </div>
                                <div className={MLstyles.imgBox01}>
                                    <div className={MLstyles.img01}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission01-sp.webp" type="image/webp" />
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission01-sp.png" type="image/png" />
                                            <source srcSet="/under/Metavelive/mission01.webp" type="image/webp" />
                                            <Image
                                                src="/under/Metavelive/mission01.png"
                                                alt="Ninja MetaveLive"
                                                width={582}
                                                height={308}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MLstyles.img02}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission02-sp.webp" type="image/webp" />
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission02-sp.png" type="image/png" />
                                            <source srcSet="/under/Metavelive/mission02.webp" type="image/webp" />
                                            <Image
                                                src="/under/Metavelive/mission02.png"
                                                alt="Ninja MetaveLive"
                                                width={582}
                                                height={308}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div className={`${MLstyles.flex02} ${MLstyles.reverse}`}>
                                <div className={MLstyles.textBox}>
                                    <p>
                                        出演者と1対1のオンラインライブでは味わえない、会場全体を包み込む空気。<br />
                                        来場者と出演者が一体になった時に感じる生命力。<br />
                                        メタバースライブには、そんな不思議な魅力があります。<br /><br />

                                        私たちは、そんなメタバースライブの「入口」を作る集団です。<br />
                                        ハマった方は、もっともっと、楽しみましょう！
                                    </p>
                                </div>
                                <div className={MLstyles.imgBox01}>
                                    <div className={MLstyles.img01}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission03-sp.webp" type="image/webp" />
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission03-sp.png" type="image/png" />
                                            <source srcSet="/under/Metavelive/mission03.webp" type="image/webp" />
                                            <Image
                                                src="/under/Metavelive/mission03.png"
                                                alt="Ninja MetaveLive"
                                                width={582}
                                                height={308}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MLstyles.img02}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission04-sp.webp" type="image/webp" />
                                            <source media="(max-width: 768px)" srcSet="/under/Metavelive/mission04-sp.png" type="image/png" />
                                            <source srcSet="/under/Metavelive/mission04.webp" type="image/webp" />
                                            <Image
                                                src="/under/Metavelive/mission04.png"
                                                alt="Ninja MetaveLive"
                                                width={582}
                                                height={308}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <Link href="https://twitter.com/ninjametavelive" className='twitter-link metavelive' target="_blank" rel="noopener noreferrer">
                                <span>
                                    最新のライブ開催情報をチェック！
                                </span>
                            </Link>
                        </section>
                        <section className={`${MLstyles.contents} section-margin`}>
                            <div className='site-h3'>
                                <h3>
                                    VISION
                                </h3>
                            </div>
                            <h4>
                                ボーダレス
                            </h4>
                            <React.Fragment>
                                <ModalVideo 
                                    channel='youtube'  
                                    isOpen={isOpen} 
                                    videoId="7gSSecQxS_s" 
                                    onClose={closeVideoModal}
                                />
                                <button className="videoThum" onClick={openModal}>
                                    <picture>
                                        <source srcSet="/under/Metavelive/song.webp" type="image/webp" />
                                        <Image
                                            src="/under/Metavelive/song.png"
                                            alt="メタバライブの歌"
                                            width={1524}
                                            height={857}
                                        />
                                    </picture>
                                </button>
                            </React.Fragment>
                            <h5>
                                性別　年齢　そんなの知らない<br />
                                人種　国籍　そんなのいらない<br />
                                お気に入りのアバターで<br />
                                いざ今日も出かけよう！
                            </h5>
                            <p>
                                例えば、寝たきりでベッドから動くことができない。<br />
                                でも歌うのが好きでたまらない、そんな人がいたとします。<br />
                                大やけどを負った過去があり、人目に顔をさらしたくない人がいたとします。<br />
                                彼らは、表現の手段を断たれてしまったのでしょうか？<br />
                                メタバライブなら、どんな人でも、最高の表現者になりうるのです。<br /><br />

                                あなたも、メタバライブでステージデビューしてみませんか？
                            </p>
                        </section>
                        <section className='dushed-box'>
                            <div className={MLstyles.flex03}>
                                <div className={MLstyles.box}>
                                    <Link href="https://discord.com/invite/SSwQwfUn3h" target="_blank" rel="noopener noreferrer">
                                        <picture>
                                            <source srcSet="/metaveDAO.webp" type="image/webp" />
                                            <Image
                                                src="/metaveDAO.png"
                                                alt="メタバースにワクワクする人が一緒にワクワクできる仲間を作れるコミュニティー"
                                                width={316}
                                                height={316}
                                                className={MLstyles.img}
                                            />
                                        </picture>
                                    </Link>
                                </div>
                                <div className={`${MLstyles.box} ${MLstyles.selfCenter}`}>
                                    <p>
                                        メタバライブへ出演希望の方は
                                        「めたばDAO」Discordサーバー内でお気軽にご相談ください
                                    </p>
                                    <Link href="https://discord.com/invite/SSwQwfUn3h" className='discordLink top'  target="_blank" rel="noopener noreferrer">
                                        Discordサーバーへ
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className='dushed-box'>
                            <div className={MLstyles.flex04}>
                                <div className={MLstyles.box}>
                                    <picture>
                                        <source media="(max-width: 768px)" srcSet="/top/houjin-sp.webp" type="image/webp" />
                                        <source media="(max-width: 768px)" srcSet="/top/houjin-sp.png" type="image/png" />
                                        <source srcSet="/top/houjin.webp" type="image/webp" />
                                        <Image
                                            src="/top/houjin.png"
                                            alt="Ninja MetaveLive"
                                            width={766}
                                            height={214}
                                            className={MLstyles.img}
                                        />
                                    </picture>
                                </div>
                                <div className={`${MLstyles.box} ${MLstyles.selfCenter}`}>
                                    <p>
                                        メタバライブでは法人様のサポート、広告出稿も承っております
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            </motion.div>
        </>
    )
}
