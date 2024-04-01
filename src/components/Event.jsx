import "./Event.scss";
import Japan from "../assets/japan.jpg";
import ServiceCard from "./ServiceCard";

export default function Event(props) {
  return (
    <div className="event">
      <div className="header">
        <h3 className="mainheader">Warta Terkini</h3>
      </div>
      <div className="card-container">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="container-selengkapnya">
        <div className="selengkapnya">Selengkapnya</div>
      </div>
    </div>
  );
}
