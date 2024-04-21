import "./About.scss";
import Japan from "../assets/japan.jpg";
import Arrow from "../assets/right-arrow.png";

export default function About(props) {
  return (
    <div id="tentang" className="about">
      <div className="header">Tentang HMDK 2024</div>
      <div className="slider">
        <div className="container">
          <img src={Japan} alt="" srcset="" />
        </div>
      </div>
      <div className="text">
        <div className="subheader">
          <h4>
            Apa <i>sih</i> HMDK itu?
          </h4>
        </div>
        <div className="explain">
          Himpunan Mahasiswa Departemen Kimia (HMDK) FMIPA UI adalah sebuah
          organisasi mahasiswa di lingkup Departemen Kimia yang memiliki peran
          mengembangkan keterampilan, skill, minat dan bakat mahasiswa
          Departemen Kimia FMIPA UI.
        </div>
        <div className="button">
          Pelajari
          <div className="container">
            <img className="arrow" src={Arrow} />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="staff box">
          <div className="number">130+</div>
          <h5 className="subheader">Fungsionaris</h5>
        </div>
        <div className="birdep box">
          <div className="number">11+</div>
          <h5 className="subheader">Biro dan Departemen</h5>
        </div>
        <div className="proker box">
          <div className="number">87+</div>
          <h5 className="subheader">Program Kerja</h5>
        </div>
        <div className="proker box">
          <div className="number">6+</div>
          <h5 className="subheader">Program Kerja Unggulan</h5>
        </div>
      </div>
    </div>
  );
}
