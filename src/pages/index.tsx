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
                        <div className={styles.flex}>
                            <Link href="/test" className='btn01'>プレスリリース</Link>
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
                    </div>
                </section>
            </main>
        </>
    )
}
