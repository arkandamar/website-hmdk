import "./Hero.scss";
import Arrow from "../assets/right-arrow.png";
import HeroImage from "../assets/hero.png";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="header">
        <div>
          <div className="name">Selamat Datang di HMD Kimia FMIPA UI</div>
          <div className="tagline">Salurkan asa, selaraskan makna</div>
          <div className="buttons">
            <div className="button about-us">
              Tentang
              <div className="container">
                <img className="arrow" src={Arrow} />
              </div>
            </div>
            <div className="button contact-us">Kontak</div>
          </div>
        </div>
      </div>
      <div className="hero-photo">
        <img src={HeroImage} />
      </div>
    </div>
  );
}
