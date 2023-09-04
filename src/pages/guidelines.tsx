import Head from 'next/head'
import GLstyles from '@/styles/Guidelines/Guidelines.module.scss'
import Link from 'next/link';
export default function Guidelines() {
    return (
        <>
            <Head>
                <title>めたばっちの二次創作ガイドライン | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <main className="main">
                <div className='container'>
                    <div className={GLstyles.wrap}>
                        <h1 className='underPage-h1'>
                            <span>GUIDELINES FOR METABATCH</span>
                            めたばっちの二次創作ガイドライン
                        </h1>
                        <p>
                            めたばっちの二次創作ガイドラインは基本的に、
                            <Link href="https://www.ninja-dao.com/guidelines" target="_blank" rel="noopener noreferrer" className={GLstyles.guideline}>
                                CryptoNinja
                            </Link>
                            <Link href="https://www.cryptoninja-partners.xyz/guidline" target="_blank" rel="noopener noreferrer" className={GLstyles.guideline}>
                                CNP
                            </Link>
                            のガイドラインに準じます。
                        </p>
                        <p>
                            めたばっちの素材をそのまま使って創作することも許可します。<br />
                            商用利用に関しても概ね同じ条件で許可しますが、公式のめたばっちの素材をそのまま利用した創作物は原則認めておりません。この場合は販売前に必ずコミュニティでご相談ください。<br /><br />

                            また、めたばっち(NINJAメタバライブ)公式と誤認される可能性があるものは、ジェネラティブNFT・手描き・音楽・動画等々作成方法を問わず販売を認めない場合がありますので、めたばっちの二次創作を使ったジェネラティブNFTを検討の場合は、 事前にコミュニティ で相談いただくのが安全かと思います。<br /><br />

                            めたばっちを使った描き下ろし、オリジナルの作品作りや、非商用利用での素材利用は自由です。クリエイティビティ溢れる作品をお待ちしています!
                        </p>
                        <p className={GLstyles.pes}>
                            NINJAメタバライブ代表　ペスハム
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
