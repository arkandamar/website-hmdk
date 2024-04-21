import "./Event.scss";
import BlogCard from "./BlogCard";

export default function Event(props) {
  return (
    <div className="event">
      <div className="header">
        <h3 className="mainheader">Warta Terkini</h3>
      </div>
      <div className="card-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="container-selengkapnya">
        <div className="selengkapnya">Selengkapnya</div>
      </div>
    </div>
  );
}
