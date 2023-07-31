import Head from 'next/head'
import MBstyles from '@/styles/Metabatch/Metabatch.module.scss'
import Image from 'next/image'

export default function Rium() {
    return (
        <>
            <Head>
                <title>Riumについて | メタバースライブ文化を盛り上げるNFT | めたばっち</title>
            </Head>
            <main className="main">
                <div className='container'>
                    <div className={MBstyles.wrap}>
                        <h1 className='underPage-h1'>
                            <span>ABOUT Rium</span>
                            Riumについて
                        </h1>
                        <h2>
                            ただいま作成中
                        </h2>
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
