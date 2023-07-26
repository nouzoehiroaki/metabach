import React from 'react';
import Image from 'next/image'
import modalstyle from '@/styles/Home/Modal.module.scss'
import Link from 'next/link';

interface ModalProps {
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    
    return (
        <>
            <div className={modalstyle.modal}>
                <div className={modalstyle.btnPosi}>
                    <button onClick={onClose}>
                        <Image
                            src="/ModalClose.svg"
                            alt="ModalClose"
                            className="close"
                            width={35}
                            height={35}
                        />
                    </button>
                    <span>CLOSE</span>
                </div>
                <main className={modalstyle.topPosi}>
                    <div className={modalstyle.head}>
                        <h2>
                            <span className={modalstyle.spanColor}>めたばっち</span>ホルダーの皆様へ<br className='spOnly'/>
                            新体制についてのお知らせ
                        </h2>
                    </div>
                    <p className={modalstyle.p}>
                        2022年6月20日NINJAメタバライブと「Rium」の提携にともない、めたばっちは、今後「Riumの営業隊長」として活動し、「軽くて良い音」が特徴である「Rium」の魅力を拡げていきます。<br /><br />

                        「Rium」に関わる他IPとめたばっちとのコラボも募集中です!<br /><br />

                        また、このたびNINJAメタバライブファウンダーのDJシュンが卒業し、個人のアーティスト、ライブクリエイターとして独立することになりました。NINJAメタバライブの「顔」でもあったDJシュンの卒業は、インパクトも大きいかと思います。<br /><br />

                        ただ、「終わらない文化祭」というスローガンを掲げたメタバライブ。そう簡単には終わらせません！<br /><br />

                        ファウンダーの卒業により体制や環境は変わりますが、ピンチをチャンスに、一緒にこの荒波を乗り切っていきましょう！<br /><br />

                        新しいコミュニティ「めたばDAO」を立ち上げました!
                        メタバースにワクワクする人、ぜひ遊びに来てください！
                    </p>
                    <Link href="/test">
                        <picture>
                            <source srcSet="/metaveDAO.webp" type="image/webp" />
                            <Image
                                src="/metaveDAO.png"
                                alt="メタバースにワクワクする人が一緒にワクワクできる仲間を作れるコミュニティー"
                                width={316}
                                height={316}
                                className={modalstyle.img}
                            />
                        </picture>
                    </Link>
                    <Link href="/test" className='discordLink top'>
                        Discordサーバーへ
                    </Link>
                </main>
            </div>
        </>
    )
};
export default Modal;