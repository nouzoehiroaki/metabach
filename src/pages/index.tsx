import Head from 'next/head'
import React, { useState, useRef  } from 'react';
import Image from 'next/image'
import styles from '@/styles/Home/Home.module.scss'
import Link from 'next/link';
import Modal from '@/components/Modal';
import { CSSTransition } from 'react-transition-group';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

export default function Home() {
    const nodeRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVideoThumHidden, setIsVideoThumHidden] = useState(false);
    const toggleMenu = () => {
        setIsModalOpen(!isModalOpen);
        setIsVideoThumHidden(!isModalOpen);
        document.body.classList.toggle('no-scroll');
    };
    const closeMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsModalOpen(false);
        setIsVideoThumHidden(false);
        document.body.classList.remove('no-scroll');
    };
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
                            NINJAメタバライブは、メタバースライブを1年半で約40回やってきたプロ集団。<br />
                            国産メタバースプラットフォーム「Rium」は、コミュニティに根差した「遊び場」を提供します。圧倒的な「動作の軽さ」と「音質の良さ」で、仲間と一緒に遊んじゃおう!
                        </p>
                        <strong className={styles.strong}>
                            このたび、NINJAメタバライブは
                            <br className='tab-only'/>
                            <Link href="/rium" className={styles.rium} >
                                <span className={styles.newWindow}>「Rium」</span>
                            </Link>
                            と提携し、<br />
                            一緒にメタバース×NFTの未来を切り拓いていきます。
                        </strong>
                        <div className={styles.flex}>
                            <Link href="https://prtimes.jp/main/html/rd/p/000000002.000123671.html" className='btn01' target="_blank" rel="noopener noreferrer">プレスリリース</Link>
                            <button className={`${styles.margin01} newOrder`} onClick={toggleMenu}>
                                <picture>
                                    <source srcSet="/newOrder.webp" type="image/webp" />
                                    <Image
                                        src="/newOrder.png"
                                        alt="めたばっちホルダーの皆様へ新体制についてのお知らせ"
                                        width={640}
                                        height={140}
                                    />
                                </picture>
                            </button>
                        </div>
                        <CSSTransition
                            nodeRef={nodeRef}
                            in={isModalOpen}
                            timeout={500}
                            classNames={{
                                enter:"enter",
                                enterActive: "enterActive",
                                exit: "exit",
                                exitActive: "exitActive",
                            }}
                            unmountOnExit
                        >
                        <section ref={nodeRef} className='modalUp'>
                            <Modal onClose={closeMenu} />
                        </section>
                        </CSSTransition>
                        <React.Fragment>
                            <ModalVideo 
                                channel='youtube'  
                                isOpen={isOpen} 
                                videoId="TmJh99ObzOk" 
                                onClose={closeVideoModal}
                            />
                            <button className={`videoThum ${isVideoThumHidden ? 'hidden' : ''}`} onClick={openModal}>
                                <picture>
                                    <source srcSet="/top/openMovie.webp" type="image/webp" />
                                    <Image
                                        src="/top/openMovie.png"
                                        alt="オープニング動画"
                                        width={1200}
                                        height={669}
                                    />
                                </picture>
                            </button>
                        </React.Fragment>
                        <section className='about section-margin'>
                            <div className='site-h3'>
                                <h3>
                                    ABOUT
                                </h3>
                            </div>
                            <div className='link-flex-box'>
                                <div className='box'>
                                    <div className='img'>
                                        <Link href="/metavelive" >
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
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <h4 className='title-style'>
                                            <Link href="/metavelive" >
                                                NINJAメタバライブ
                                            </Link>
                                        </h4>
                                        <p>
                                            2021年12月より40回以上のメタバースライブを主催するライブクリエーター集団です。
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <Link href="/metabatch" >
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet="/top/metabatch-sp.webp" type="image/webp" />
                                                <source media="(max-width: 768px)" srcSet="/top/metabatch-sp.png" type="image/png" />
                                                <source srcSet="/top/metabatch.webp" type="image/webp" />
                                                <Image
                                                    src="/top/metabatch.png"
                                                    alt="Ninja MetaveLive"
                                                    width={840}
                                                    height={745}
                                                />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <h4 className='title-style'>
                                            <Link href="/metabatch" >
                                                めたばっち
                                            </Link>
                                        </h4>
                                        <p className={styles.topPLetter}>
                                            メタバースの妖精。NINJAメタバライブが2022年12月にリリースしたジェネラティブNFTのキャラクターです。
                                        </p>
                                        <Link href="/guidelines" className='guide-line top' >
                                            二次創作ガイドラインはこちら
                                        </Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <Link href="/rium" >
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet="/top/rium-sp.webp" type="image/webp" />
                                                <source media="(max-width: 768px)" srcSet="/top/rium-sp.png" type="image/png" />
                                                <source srcSet="/top/rium.webp" type="image/webp" />
                                                <Image
                                                    src="/top/rium.png"
                                                    alt="Ninja MetaveLive"
                                                    width={840}
                                                    height={745}
                                                />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <h4 className='title-style'>
                                            <Link href="/rium" >
                                                Rium
                                            </Link>
                                        </h4>
                                        <p className={styles.topPLetter}>
                                            株式会社トランスリミットが開発する国産メタバースプラットフォーム。「動作の軽さ」と「音質の良さ」が強みです。<br />
                                            2023年6月よりNINJAメタバライブと提携中。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='members section-margin'>
                            <div className='site-h3'>
                                <h3>
                                    MEMBERS
                                </h3>
                            </div>
                            <div className={styles.flex02}>
                                <div className={styles.box}>
                                    <picture>
                                        <source media="(max-width: 768px)" srcSet="/top/member-sp.webp" type="image/webp" />
                                        <source media="(max-width: 768px)" srcSet="/top/member-sp.png" type="image/png" />
                                        <source srcSet="/top/member.webp" type="image/webp" />
                                        <Image
                                            src="/top/member.png"
                                            alt="Ninja MetaveLive"
                                            width={1016}
                                            height={354}
                                        />
                                    </picture>
                                </div>
                                <div className={styles.box}>
                                    <h4 className={styles.titleStyle}>
                                        <Link href="/members" >
                                            運営メンバー・会社情報
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </section>
                        <section className='contact section-margin'>
                            <div className='site-h3'>
                                <h3>
                                    CONTACT
                                </h3>
                            </div>
                            <div className={styles.flex02}>
                                <div className={styles.box}>
                                    <picture>
                                        <source media="(max-width: 768px)" srcSet="/top/houjin-sp.webp" type="image/webp" />
                                        <source media="(max-width: 768px)" srcSet="/top/houjin-sp.png" type="image/png" />
                                        <source srcSet="/top/houjin.webp" type="image/webp" />
                                        <Image
                                            src="/top/houjin.png"
                                            alt="Ninja MetaveLive"
                                            width={766}
                                            height={214}
                                        />
                                    </picture>
                                </div>
                                <div className={styles.box}>
                                    <h4 className={styles.titleStyle}>
                                        <Link href="/contact" >
                                            お問い合わせ
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}
