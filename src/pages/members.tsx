import Head from 'next/head'
import { useEffect } from "react"
import MBstyles from '@/styles/Members/Members.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Members() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash && hash !== "#") {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return (
        <>
            <Head>
                <title>運営メンバー | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <main className="main">
                <section>
                    <div className='container'>
                        <div className={MBstyles.wrap}>
                            <h1 className='underPage-h1'>
                                <span>MEMBERS</span>
                                運営メンバー
                            </h1>
                            <div className={MBstyles.members}>
                                <div className={MBstyles.member}>
                                    <div className={MBstyles.img}>
                                        <picture>
                                            <source srcSet="/under/Members/pessham.webp" type="image/webp" />
                                            <Image
                                                src="/under/Members/pessham.png"
                                                alt="ペスハム / Pessham"
                                                width={420}
                                                height={242}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MBstyles.text}>
                                        <h2 className={MBstyles.name}>
                                            ペスハム / <span className={MBstyles.mini}>Pessham</span>
                                            <span className={MBstyles.twitter}>
                                                <Link href="https://twitter.com/pess_ham" target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        src="/hov-tw.svg"
                                                        alt="ペスハム / Pessham"
                                                        width={40}
                                                        height={32}
                                                    />
                                                </Link>
                                            </span>
                                        </h2>
                                        <p className={MBstyles.post}>Representative, Marketer</p>
                                    </div>
                                </div>
                                <div className={MBstyles.member}>
                                    <div className={MBstyles.img}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Members/mela.webp" type="image/webp" />
                                            <Image
                                                src="/under/Members/mela.png"
                                                alt="メラ / Mela Souma"
                                                width={420}
                                                height={242}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MBstyles.text}>
                                        <h2 className={MBstyles.name}>
                                            メラ / <span className={MBstyles.mini}>Mela Souma</span>
                                            <span className={MBstyles.twitter}>
                                                <Link href="https://twitter.com/MelaNftartist" target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        src="/hov-tw.svg"
                                                        alt="メラ / Mela Souma"
                                                        width={40}
                                                        height={32}
                                                    />
                                                </Link>
                                            </span>
                                        </h2>
                                        <p className={MBstyles.post}>Main MC, Designer</p>
                                    </div>
                                </div>
                                <div className={MBstyles.member}>
                                    <div className={MBstyles.img}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Members/kouki.webp" type="image/webp" />
                                            <Image
                                                src="/under/Members/kouki.png"
                                                alt="こうき / Kouki"
                                                width={420}
                                                height={242}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MBstyles.text}>
                                        <h2 className={MBstyles.name}>
                                            こうき / <span className={MBstyles.mini}>Kouki</span>
                                            <span className={MBstyles.twitter}>
                                                <Link href="https://twitter.com/kouki_ism" target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        src="/hov-tw.svg"
                                                        alt="こうき / Kouki"
                                                        width={40}
                                                        height={32}
                                                    />
                                                </Link>
                                            </span>
                                        </h2>
                                        <p className={MBstyles.post}>Technical Coordinator</p>
                                    </div>
                                </div>
                                <div className={MBstyles.member}>
                                    <div className={MBstyles.img}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Members/awo.webp" type="image/webp" />
                                            <Image
                                                src="/under/Members/awo.png"
                                                alt="アヲアヒル / Awoahiru"
                                                width={420}
                                                height={242}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MBstyles.text}>
                                        <h2 className={MBstyles.name}>
                                            アヲアヒル /  <span className={MBstyles.mini}>Awoahiru</span>
                                            <span className={MBstyles.twitter}>
                                                <Link href="https://twitter.com/awoahiru" target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        src="/hov-tw.svg"
                                                        alt="アヲアヒル / Awoahiru"
                                                        width={40}
                                                        height={32}
                                                    />
                                                </Link>
                                            </span>
                                        </h2>
                                        <p className={MBstyles.post}>Live Producer</p>
                                    </div>
                                </div>
                                <div className={MBstyles.member}>
                                    <div className={MBstyles.img}>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/under/Members/rukan.webp" type="image/webp" />
                                            <Image
                                                src="/under/Members/rukan.png"
                                                alt="るかん / Rukan"
                                                width={420}
                                                height={242}
                                            />
                                        </picture>
                                    </div>
                                    <div className={MBstyles.text}>
                                        <h2 className={MBstyles.name}>
                                            るかん / <span className={MBstyles.mini}>Rukan</span>
                                            <span className={MBstyles.twitter}>
                                                <Link href="https://twitter.com/rukan1010" target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        src="/hov-tw.svg"
                                                        alt="るかん / Rukan"
                                                        width={40}
                                                        height={32}
                                                    />
                                                </Link>
                                            </span>
                                        </h2>
                                        <p className={MBstyles.post}>Event Director</p>
                                    </div>
                                </div>
                                <div className={MBstyles.otherMembers}>
                                    <div className={MBstyles.left}>
                                        <h3>
                                            <Link href="https://twitter.com/cameshow_eth" target="_blank" rel="noopener noreferrer">
                                                カメしょう
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/takuboooVideo" target="_blank" rel="noopener noreferrer">
                                                たくぼぉ
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/tasogarefilms" target="_blank" rel="noopener noreferrer">
                                                たそがれ
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/KINOKO_VJ" target="_blank" rel="noopener noreferrer">
                                                KINOKO
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/hopperA15" target="_blank" rel="noopener noreferrer">
                                                hopper
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/norisuke_NFT" target="_blank" rel="noopener noreferrer">
                                                のりすけ
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/ZodieSpi" target="_blank" rel="noopener noreferrer">
                                                Zodie
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className={MBstyles.right}>
                                        <h3>
                                            <Link href="https://twitter.com/NarukamiF_14941" target="_blank" rel="noopener noreferrer">
                                                ピロリズム
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/2jo_TAMA" target="_blank" rel="noopener noreferrer">
                                                二条たま
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/yukaka1028" target="_blank" rel="noopener noreferrer">
                                                ぼっけ
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/OoChihiroOO" target="_blank" rel="noopener noreferrer">
                                                チヒロ
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/hironia_nft" target="_blank" rel="noopener noreferrer">
                                                ヒロニア
                                            </Link>
                                        </h3>
                                        <h3>
                                            <Link href="https://twitter.com/nft_mkst" target="_blank" rel="noopener noreferrer">
                                                Mii
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='company' className={MBstyles.sec02}>
                    <div className='container'>
                        <div className={MBstyles.wrap}>
                            <h1 className='underPage-h1'>
                                <span>COMPANY OVERVIEW</span>
                                運営会社概要
                            </h1>
                            <div className={MBstyles.company}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>会社名</th>
                                            <td>株式会社メタマケ</td>
                                        </tr>
                                        <tr>
                                            <th>代表社員</th>
                                            <td>石澤 亮輔</td>
                                        </tr>
                                        <tr>
                                            <th>住所</th>
                                            <td>東京都多摩市落合2-17-10</td>
                                        </tr>
                                        <tr>
                                            <th>資本金</th>
                                            <td>50万円</td>
                                        </tr>
                                        <tr>
                                            <th>設立年月日</th>
                                            <td>2023年6月9日</td>
                                        </tr>
                                        <tr>
                                            <th>事業内容</th>
                                            <td>
                                                メタバース（仮想空間）における音楽ライブの企画、立案及び運営代行 他
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>法人番号</th>
                                            <td>1012403006010</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
