import Head from 'next/head'
import React, { useState  } from 'react';
import RMstyles from '@/styles/Rium/Rium.module.scss'
import Image from 'next/image'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { motion } from 'framer-motion'

export default function Rium() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
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
    const openModal4 = () => {
        document.cookie = 'myCookie=myValue; SameSite=None; Secure';
        setIsOpen4(true);
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

    const closeVideoModal4 = () => {
        setIsOpen4(false);
    };
    return (
        <>
            <Head>
                <title>Riumについて | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <motion.div
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}    // アンマウント時
            >
            <main className="main">
                <div className='container'>
                    <div className={RMstyles.wrap}>
                        <h1 className='underPage-h1'>
                            <span>ABOUT Rium</span>
                            Riumについて
                        </h1>
                        <div className={RMstyles.flexBox}>
                            <p>
                                国産メタバースプラットフォーム「Rium」は、コミュニティに根差した「遊び場」を提供します。<br />
                                2022年9月にα版がスタートしたばかり。しかし、NFTコミュニティを中心に着実にイベント実績を積み上げ。2023年7月の第24回新生メタバライブではユニークユーザーベースで385人が集まりました。<br /><br />

                                スマホでアクセスしても落ちにくい、圧倒的な「動作の軽さ」とYouTube並みの「音質の良さ」が特徴。<br />
                                NFTコミュニティを中心に音楽ライブやアスレチックなどの「遊び場」をつくり、コミュニティの一体感を醸成します。
                            </p>
                            <div className={RMstyles.img}>
                                <Image
                                    src="/under/Rium/rium-logo.svg"
                                    alt="Rium"
                                    width={276}
                                    height={300}
                                    className={RMstyles.logo}
                                />
                            </div>
                        </div>
                        <div className="dushed-box">
                            <h2 className='h2-blue'>イベント開催例</h2>
                            <strong className={RMstyles.strong}>
                                Riumでは様々なNFTコミュニティの<br className='pcOnly'/>
                                イベント・音楽ライブを開催しています
                            </strong>
                            <div className={RMstyles.eventContBox}>
                                <h3>
                                    CryptoNinjaPartners「霧隠の里」
                                </h3>
                                <span className={`${RMstyles.tag} ${RMstyles.yellow}`}>
                                イベント
                                </span>
                                <p className={RMstyles.mb01}>
                                    日本を代表するNFTコレクション「CNP」のキャラになりきってアスレチックを遊ぶことができます。
                                </p>
                                <React.Fragment>
                                    <ModalVideo 
                                        channel='youtube'  
                                        isOpen={isOpen1} 
                                        videoId="0aI98Q7PPNM" 
                                        onClose={closeVideoModal1}
                                    />
                                    <button className="videoThum metabach" onClick={openModal1}>
                                        <picture>
                                            <source srcSet="/under/Rium/rium-thum01.webp" type="image/webp" />
                                            <Image
                                                src="/under/Rium/rium-thum01.png"
                                                alt="【Rium】霧隠の郷"
                                                width={1310}
                                                height={730}
                                            />
                                        </picture>
                                    </button>
                                </React.Fragment>
                            </div>
                            <div className={RMstyles.eventContBox}>
                                <h3>
                                    きよし「きよしの国」
                                </h3>
                                <span className={`${RMstyles.tag} ${RMstyles.yellow}`}>
                                イベント
                                </span>
                                <p className={RMstyles.mb01}>
                                    CNP Jobsのうじゅうな氏が作成した「CryptoNinja」の100次創作キャラクター「きよし」きよしの種をバーン(燃やす)するとアイテムがもらえるイベントを開催しました。
                                </p>
                                <React.Fragment>
                                    <ModalVideo 
                                        channel='youtube'  
                                        isOpen={isOpen2} 
                                        videoId="yM3P-2yC9Hg" 
                                        onClose={closeVideoModal2}
                                    />
                                    <button className="videoThum metabach" onClick={openModal2}>
                                        <picture>
                                            <source srcSet="/under/Rium/rium-thum02.webp" type="image/webp" />
                                            <Image
                                                src="/under/Rium/rium-thum02.png"
                                                alt="【Rium】きよしのくに"
                                                width={1260}
                                                height={586}
                                            />
                                        </picture>
                                    </button>
                                </React.Fragment>
                            </div>
                            <div className={RMstyles.eventContBox}>
                                <h3>
                                    ゴジャフェス
                                </h3>
                                <span className={`${RMstyles.tag} ${RMstyles.emerald}`}>
                                音楽ライブ
                                </span>
                                <p className={RMstyles.mb01}>
                                    姫路が生んだ元お笑い芸人「ブドウちゃん」が毎月第一日曜日に主催するレゲエ音楽イベント。ハイジャンプのギミックや、ネオンカラーの変化も実装。
                                </p>
                                <React.Fragment>
                                    <ModalVideo 
                                        channel='youtube'  
                                        isOpen={isOpen3} 
                                        videoId="7mGBYo8x6Qw" 
                                        onClose={closeVideoModal3}
                                    />
                                    <button className="videoThum metabach" onClick={openModal3}>
                                        <picture>
                                            <source srcSet="/under/Rium/rium-thum03.webp" type="image/webp" />
                                            <Image
                                                src="/under/Rium/rium-thum03.png"
                                                alt="【Rium】ゴジャフェス"
                                                width={1258}
                                                height={674}
                                            />
                                        </picture>
                                    </button>
                                </React.Fragment>
                            </div>
                            <div className={`${RMstyles.eventContBox} ${RMstyles.last} `}>
                                <h3>
                                    罵尻ロマ子様「罵倒ライブ」
                                </h3>
                                <span className={`${RMstyles.tag} ${RMstyles.emerald}`}>
                                音楽ライブ
                                </span>
                                <p className={RMstyles.mb01}>
                                    NFT・メタバース・web3界隈で大人気の「罵倒女王」罵尻ロマ子様の単独ライブ。世の豚さん達をぶち落とすギミックが多数。
                                </p>
                                <React.Fragment>
                                    <ModalVideo 
                                        channel='youtube'  
                                        isOpen={isOpen4} 
                                        videoId="sdsBzYGucaE" 
                                        onClose={closeVideoModal4}
                                    />
                                    <button className="videoThum metabach" onClick={openModal4}>
                                        <picture>
                                            <source srcSet="/under/Rium/rium-thum04.webp" type="image/webp" />
                                            <Image
                                                src="/under/Rium/rium-thum04.png"
                                                alt="【Rium】罵尻ロマ子 罵倒ライブ"
                                                width={1260}
                                                height={650}
                                            />
                                        </picture>
                                    </button>
                                </React.Fragment>
                            </div>
                        </div>
                        <div className="dushed-box">
                            <p className={RMstyles.lastText}>
                                Riumは現在αテスト版です。各イベントの開催ごとにオープンしています。<br />
                                イベントの最新情報はこちらからチェックしてください！
                            </p>
                            <div className={RMstyles.box}>
                                <div className={RMstyles.flexBox}>
                                    <a className={`${RMstyles.snsBtn} ${RMstyles.twitter}`} href="https://twitter.com/RiumMetaverse" target='_blank' rel='noopener noreferrer'>@RiumMetaverse</a>
                                    <a className={`${RMstyles.snsBtn} ${RMstyles.discord}`} href="https://discord.com/invite/mJj5beZv6M" target='_blank' rel='noopener noreferrer'>Rium Metaverse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </motion.div>
        </>
    )
}
