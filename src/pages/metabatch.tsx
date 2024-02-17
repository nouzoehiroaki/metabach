import Head from 'next/head'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import MBstyles from '@/styles/Metabatch/Metabatch.module.scss'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

export default function Metabatch() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const openModal1 = () => {
        document.cookie = 'myCookie=myValue; SameSite=None; Secure';
        setIsOpen1(true);
    };

    const openModal2 = () => {
        document.cookie = 'myCookie=myValue; SameSite=None; Secure';
        setIsOpen2(true);
    };

    const openModal3 = () => {
        document.cookie = 'myCookie=myValue; SameSite=None; Secure';
        setIsOpen3(true);
    };
    const closeVideoModal1 = () => {
        setIsOpen1(false);
    };

    const closeVideoModal2 = () => {
        setIsOpen2(false);
    };

    const closeVideoModal3 = () => {
        setIsOpen3(false);
    };
    return (
        <>
            <Head>
                <title>めたばっちについて | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <main className="main">
                <div className='container'>
                    <div className={MBstyles.wrap}>
                        <h1 className='underPage-h1'>
                            <span>ABOUT METABATCH</span>
                            めたばっちについて
                        </h1>
                        <p>
                            ジャジャ～～～ン！<br /><br />

                            愉快！爽快！<br />
                            めたばっちSODAはもう飲んだっちか⁉
                        </p>
                        <React.Fragment>
                            <ModalVideo
                                channel='youtube'
                                isOpen={isOpen1}
                                videoId="ZlFusgy5kpo"
                                onClose={closeVideoModal1}
                            />
                            <button className="videoThum metabach" onClick={openModal1}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="/under/Metabatch/thum01-sp.webp" type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet="/under/Metabatch/thum01-sp.png" type="image/png" />
                                    <source srcSet="/under/Metabatch/thum01.webp" type="image/webp" />
                                    <Image
                                        src="/under/Metabatch/thum01.png"
                                        alt="めたばっちソーダ"
                                        width={1540}
                                        height={863}
                                    />
                                </picture>
                            </button>
                        </React.Fragment>
                        <p>
                            あ、Meのことまだ知らないっちね<br /><br />

                            めたばっちはメタバライブが作り出す「メタバの渦」をもっともっと拡げるために、メタバライブ1周年のときに産まれた<br />「<span>メタバースの妖精</span>」っち!
                        </p>
                        <React.Fragment>
                            <ModalVideo
                                channel='youtube'
                                isOpen={isOpen2}
                                videoId="8FECQWjrzjA"
                                onClose={closeVideoModal2}
                            />
                            <button className="videoThum metabach" onClick={openModal2}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="/under/Metabatch/thum02-sp.webp" type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet="/under/Metabatch/thum02-sp.png" type="image/png" />
                                    <source srcSet="/under/Metabatch/thum02.webp" type="image/webp" />
                                    <Image
                                        src="/under/Metabatch/thum02.png"
                                        alt="めたばっちの歌"
                                        width={1540}
                                        height={863}
                                    />
                                </picture>
                            </button>
                        </React.Fragment>
                        <p>
                            Meの趣味はファンのみんなと遊ぶこと。 <br />
                            ファンサは大事っちからね～！
                        </p>
                        <React.Fragment>
                            <ModalVideo
                                channel='youtube'
                                isOpen={isOpen3}
                                videoId="Z7iFsg6jehw"
                                onClose={closeVideoModal3}
                            />
                            <button className="videoThum metabach" onClick={openModal3}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="/under/Metabatch/thum03-sp.webp" type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet="/under/Metabatch/thum03-sp.png" type="image/png" />
                                    <source srcSet="/under/Metabatch/thum03.webp" type="image/webp" />
                                    <Image
                                        src="/under/Metabatch/thum03.png"
                                        alt="めたばっち ファンサ"
                                        width={1540}
                                        height={863}
                                    />
                                </picture>
                            </button>
                        </React.Fragment>
                        <p>
                            Meの好きな食べ物はイーサっち!<br />
                            ん？イーサを知らない？勉強が足りてないっちね！<br /><br />

                            そんな人は「めたばDAO」に入って聞いてみるっち!<br />
                            Meのなかまがやさしく教えてくれるっちからね
                        </p>
                        <div className={MBstyles.flex01}>
                            <div className={MBstyles.box}>
                                <Link href="https://discord.com/invite/SSwQwfUn3h" target="_blank" rel="noopener noreferrer">
                                    <picture>
                                        <source srcSet="/metaveDAO.webp" type="image/webp" />
                                        <Image
                                            src="/metaveDAO.png"
                                            alt="メタバースにワクワクする人が一緒にワクワクできる仲間を作れるコミュニティー"
                                            width={316}
                                            height={316}
                                            className={MBstyles.img}
                                        />
                                    </picture>
                                </Link>
                                <Link href="https://discord.com/invite/SSwQwfUn3h" className='discordLink top metabatch' target="_blank" rel="noopener noreferrer">
                                    Discordサーバーへ
                                </Link>
                            </div>
                            <div className={MBstyles.box}>
                                <Link href="/guidelines" >
                                    <picture>
                                        <source srcSet="/under/Metabatch/guidelines.webp" type="image/webp" />
                                        <Image
                                            src="/under/Metabatch/guidelines.png"
                                            alt="めたばっちの二次創作物・グッズ等をご製作の方へ"
                                            width={316}
                                            height={316}
                                            className={MBstyles.img}
                                        />
                                    </picture>
                                </Link>
                                <Link href="/guidelines" className='guide-line metabach'>
                                    二次創作ガイドラインはこちら
                                </Link>
                            </div>
                        </div>
                        <section className='dushed-box'>
                            <div className='link-flex-box'>
                                <div className='box'>
                                    <div className='img'>
                                        <Link href="https://shop.metabatch.me/" target="_blank" rel="noopener noreferrer">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/onlineshop-sp.webp" type="image/webp" />
                                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/onlineshop-sp.png" type="image/png" />
                                                <source srcSet="/under/Metabatch/onlineshop.webp" type="image/webp" />
                                                <Image
                                                    src="/under/Metabatch/onlineshop.png"
                                                    alt="公式オンラインショップ"
                                                    width={600}
                                                    height={338}
                                                />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <h4 className='title-style'>
                                            <Link href="https://shop.metabatch.me/" target="_blank" rel="noopener noreferrer">
                                                公式オンラインショップ
                                            </Link>
                                        </h4>
                                        <p>
                                            めたばっちのキーホルダーやバッジ、Tシャツなどのグッズご購入はこちら
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <Link href="https://line.me/R/ti/p/@366ctfwh" target="_blank" rel="noopener noreferrer">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/line-sp.webp" type="image/webp" />
                                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/line-sp.png" type="image/png" />
                                                <source srcSet="/under/Metabatch/line.webp" type="image/webp" />
                                                <Image
                                                    src="/under/Metabatch/line.png"
                                                    alt="公式LINE"
                                                    width={600}
                                                    height={338}
                                                />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <h4 className='title-style'>
                                            <Link href="https://line.me/R/ti/p/@366ctfwh" target="_blank" rel="noopener noreferrer">
                                                公式LINE
                                            </Link>
                                        </h4>
                                        <p className={MBstyles.topPLetter}>
                                            めたばっちの公式LINEで情報発信中!
                                            友達登録で公式オンラインショップのクーポンがご利用いただけます
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <Link href="https://rarible.com/metabatch/items" target="_blank" rel="noopener noreferrer">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/opensea-sp.webp" type="image/webp" />
                                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/opensea-sp.png" type="image/png" />
                                                <source srcSet="/under/Metabatch/opensea.webp" type="image/webp" />
                                                <Image
                                                    src="/under/Metabatch/opensea.png"
                                                    alt="OPEN SEA"
                                                    width={600}
                                                    height={338}
                                                />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <h4 className='title-style'>
                                            <Link href="https://rarible.com/metabatch/items" target="_blank" rel="noopener noreferrer">
                                                Rarible
                                            </Link>
                                        </h4>
                                        <p className={MBstyles.topPLetter}>
                                            めたばっちのデジタルコレクション（NFT）のご購入はこちら<br />
                                            過去のNINJAメタバライブのアーカイブが見放題 & 公式オンラインショップのクーポンが手に入ります！
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className={MBstyles.imgPosi}>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/metabach-sp.webp" type="image/webp" />
                                <source media="(max-width: 768px)" srcSet="/under/Metabatch/metabach-sp.png" type="image/png" />
                                <source srcSet="/under/Metabatch/metabach.webp" type="image/webp" />
                                <Image
                                    src="/under/Metabatch/metabach.png"
                                    alt="めたばっち"
                                    width={990}
                                    height={776}
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
