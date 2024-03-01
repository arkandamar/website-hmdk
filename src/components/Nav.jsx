import "./Nav.scss"

export default function Nav(props) {
    return (
        <div className="nav">
            <div className="menu-list">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Tentang</a></li>
                <li><a href="#">Kepengurusan</a></li>
                <li><a href="#">Dokumentasi</a></li>
            </div>
        </div>
    )
}