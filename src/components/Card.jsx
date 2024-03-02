import "./Card.scss";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Japan from "../assets/japan.jpg";

export default function Card({ name, job, year, ketua }) {
  return (
    <div className="card">
      <div className="job">{job}</div>
      <div className="photo">
        <div className="overlay">
          <img className="icon" src={Instagram} alt="" srcset="" />
          <img className="icon" src={Linkedin} alt="" srcset="" />
        </div>
        <img src={Japan} alt="" srcset="" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="year">Kimia {year}</div>
      </div>
    </div>
  );
}
