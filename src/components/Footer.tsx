import Link from 'next/link';
import Image from 'next/image';
import { Link as Scroll } from "react-scroll"
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="sns-flame">
                    <div className='icon'>
                        <Link href="https://twitter.com/ninjametavelive" target="_blank" rel="noopener noreferrer" className='twitter'>
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link href="https://www.instagram.com/ninjametavelive/" target="_blank" rel="noopener noreferrer" className='instagram'>
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link href="https://discord.com/invite/SSwQwfUn3h" target="_blank" rel="noopener noreferrer" className='discord'>
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link href="https://www.tiktok.com/@metabatch_?lang=ja-JP" target="_blank" rel="noopener noreferrer" className='tiktok'>
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link href="https://rarible.com/metabatch/items" target="_blank" rel="noopener noreferrer" className='rarible'>
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link href="https://line.me/R/ti/p/@366ctfwh" target="_blank" rel="noopener noreferrer" className='line'>
                        </Link>
                    </div>
                </div>
                <div className='footer-menu'>
                    <nav>
                        <ul className='box order01'>
                            <li>
                                <Link href="/" >
                                    トップページ
                                </Link>
                            </li>
                            <li>
                                <Link href="/metavelive" >
                                    NINJAメタバライブについて
                                </Link>
                            </li>
                        </ul>
                        <ul className='box order02'>
                            <li>
                                <Link href="/metabatch" >
                                    めたばっちについて
                                </Link>
                                <ul className='sub'>
                                    <li>
                                        <Link href="/guidelines" >
                                            めたばっち二次創作ガイドライン
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/rium" >
                                    Rium(提携先)について
                                </Link>
                            </li>
                        </ul>
                        <ul className='box order03'>
                            <li>
                                <Link href="/members" >
                                    運営メンバー
                                </Link>
                                <ul className='sub'>
                                    <li>
                                        <Link href="/members#company" >
                                            会社概要
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contact" >
                                    お問い合わせ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-logo'>
                    <Image
                        src="/footer-logo.svg"
                        alt="Logo"
                        className="logo"
                        width={52}
                        height={52}
                    />
                </div>
            </footer>
        </>
    )
}