import "./About.scss";
import Japan from "../assets/japan.jpg";

export default function About(props) {
  return (
    <div id="tentang" className="about">
      <div className="slider">
        <div className="container">
          <img src={Japan} alt="" srcset="" />
        </div>
      </div>
      <div className="text">
        <div className="header">Tentang Kami</div>
        <div className="explain">
          Himpunan Mahasiswa Departemen Kimia (HMDK) FMIPA UI adalah sebuah
          organisasi mahasiswa di lingkup Departemen Kimia yang memiliki
          peran mengembangkan keterampilan, skill, minat dan bakat
          mahasiswa Departemen Kimia FMIPA UI.
        </div>
      </div>
    </div>
  );
}
