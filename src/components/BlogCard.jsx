import "./BlogCard.scss";
import Arrow from "../assets/right-arrow.png";

export default function BlogCard(props) {
  return (
    <div style={props.style} className="service-card">
      <div className="picture"></div>
      <div className="text">
        <div className="mainheader">Lorem, ipsum.</div>
        <div className="explain">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, corrupti.
        </div>
        <div className="button">
          Baca
          <div className="container">
            <img className="arrow" src={Arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}
