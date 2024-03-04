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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vero atque minus eius reprehenderit iure molestias sed nobis.
          Aspernatur, itaque id. Sunt, praesentium nam?
        </div>
      </div>
    </div>
  );
}
