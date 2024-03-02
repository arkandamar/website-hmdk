import "./Hero.scss"

export default function Hero(props) {
    return (
        <div className="hero">
            <div className="header">
                <div>
                    <div className="name">HMD KIMIA UI 2024</div>
                    <div className="tagline">Salurkan asa, selaraskan makna</div>
                    <div className="buttons">
                    <a href="#tentang"><div className="button about-us">Tentang Kami</div></a>
                    <a href="#"><div className="button contact">Kontak</div></a>
                    </div>
                </div>
            </div>
            <div className="hero-photo">
            </div>
        </div>
    )
}