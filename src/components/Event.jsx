import "./Event.scss";
import Japan from "../assets/japan.jpg";

export default function Event(props) {
  return (
    <div className="event">
      <div className="header">
        <h3 className="mainheader">Warta Terkini</h3>
      </div>
      <div className="container">
        <div className="text">
          <h3>Graduation Ceremony</h3>
          <p>
            Graduation Ceremony semester ganjil 2024 telah berhasil diadakan
            pada tanggal 8 Maret 2024 di Departemen Kimia UI. Para wisudawan
            hadir dalam acara terlihat berbincang-bincang santai ketika acara
            akan dimulai.
          </p>
        </div>
        <div className="slider">
          <img src={Japan} />
        </div>
      </div>
    </div>
  );
}
