import "./Card.scss";
import Japan from "../assets/japan.jpg";

export default function Card({ name, job, year, ketua}) {
  return (
    <div className="card">
      <div className="job">{job}</div>
      <div className="photo">
        <img src={Japan} alt="" srcset="" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="year">Kimia {year}</div>
      </div>
    </div>
  );
}
