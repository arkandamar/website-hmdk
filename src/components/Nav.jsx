import "./Nav.scss";

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="menu-list">
        <li>
          <a href="#">Beranda</a>
        </li>
        <li>
          <a href="#tentang">Tentang</a>
        </li>
        <li>
          <a href="#team">Tim</a>
        </li>
        <li>
          <a href="#birdep">Biro-Departemen</a>
        </li>
        <li>
          <a href="#">Dokumentasi</a>
        </li>
        <li>
          <a href="#">Kontak</a>
        </li>
      </div>
    </div>
  );
}
