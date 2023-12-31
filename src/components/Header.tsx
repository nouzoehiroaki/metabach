import React, { useState, FC, useRef,useEffect } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll');
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
    };
    const nodeRef = useRef(null);
    useEffect(() => {
        const logoImage = document.querySelector('.metavelive-logo-box img') as HTMLImageElement | null;
        if (logoImage) {
            if (isSafari()) {
              logoImage.src = '/metavelive-logo.png';
            }
        }
        const logoImage02 = document.querySelector('.logo-box img') as HTMLImageElement | null;
        if (logoImage02) {
            if (isSafari()) {
                logoImage02.src = '/logo.png';
            }
        }
    }, []); 
    return (
        <>
            <header>
                <div className='header-container'>
                    <div className='menu-box'>
                        <button onClick={toggleMenu}>
                        {isMenuOpen ? 
                            <Image
                                src="/close.svg"
                                alt="Close"
                                className="close"
                                width={35}
                                height={36}
                            />
                        :
                            <Image
                                src="/menu.svg"
                                alt="Menu Logo"
                                className="menu-logo"
                                width={35}
                                height={24}
                            />
                        }
                        </button>
                        <nav>
                            <ul className='main'>
                                <li>
                                    <Link href="#" >
                                        ABOUT
                                    </Link>
                                    <ul className='sub'>
                                        <li>
                                            <Link href="/metavelive" >
                                                NINJAメタバライブについて
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/metabatch" >
                                                めたばっちについて
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/rium" >
                                                Rium (提携先) について
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/guidelines" >
                                        GUIDELINES
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/members" >
                                        MEMBERS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" >
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='logo-area'>
                        <div className='metavelive-logo-box'>
                            <Link href="/" >
                                <Image
                                    src="/metavelive-logo.svg"
                                    alt="Metavelive Logo"
                                    className="metavelive-logo"
                                    width={142}
                                    height={56}
                                />
                            </Link>
                        </div>
                        <div className='logo-box'>
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                className="logo"
                                width={121}
                                height={56}
                            />
                        </div>
                    </div>
                </div>
                <CSSTransition
                    nodeRef={nodeRef}
                    in={isMenuOpen}
                    timeout={500}
                    classNames={{
                        enter:"enter",
                        enterActive: "enterActive",
                        exit: "exit",
                        exitActive: "exitActive",
                    }}
                    unmountOnExit
                >
                <div ref={nodeRef} className="menu-content">
                    <nav>
                        <ul className='main'>
                            <li>
                                <Link href="#" onClick={closeMenu} >
                                    ABOUT
                                </Link>
                                <ul className='sub'>
                                    <li>
                                        <Link href="/metavelive" onClick={closeMenu} >
                                            NINJAメタバライブについて
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/metabatch" onClick={closeMenu} >
                                            めたばっちについて
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rium" onClick={closeMenu} >
                                            Rium (提携先) について
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/guidelines" onClick={closeMenu} >
                                    GUIDELINES
                                </Link>
                            </li>
                            <li>
                                <Link href="/members" onClick={closeMenu} >
                                    MEMBERS
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={closeMenu} >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='header-sns'>
                        <div className='box'>
                            <div className='icon'>
                                <Link href="https://twitter.com/ninjametavelive" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/twitter.svg"
                                        alt="twitter"
                                        className="twitter"
                                        width={28}
                                        height={23}
                                    />
                                </Link>
                            </div>
                            <div className='icon'>
                                <Link href="https://www.instagram.com/ninjametavelive/" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/Instagram.svg"
                                        alt="Instagram"
                                        className="Instagram"
                                        width={28}
                                        height={28}
                                    />
                                 </Link>
                            </div>
                            <div className='icon'>
                                <Link href="https://discord.com/invite/SSwQwfUn3h" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/discod.svg"
                                        alt="discod"
                                        className="discod"
                                        width={28}
                                        height={22}
                                    />
                                </Link>
                            </div>
                            <div className='icon'>
                                <Link href="https://opensea.io/collection/metabatch" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/opensea.svg"
                                        alt="opensea"
                                        className="opensea"
                                        width={29}
                                        height={26}
                                    />
                                </Link>
                            </div>
                            <div className='icon'>
                                <Link href="https://www.tiktok.com/@metabatch_?lang=ja-JP" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/tiktok.svg"
                                        alt="tiktok"
                                        className="tiktok"
                                        width={26}
                                        height={29}
                                    />
                                </Link>
                            </div>
                            <div className='icon'>
                                <Link href="https://line.me/R/ti/p/@366ctfwh" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/line.svg"
                                        alt="line"
                                        className="line"
                                        width={34}
                                        height={34}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </CSSTransition>
            </header>
        </>
    )
}
export default Header;