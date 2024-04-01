import { useEffect, useState } from "react";
import Arrow from "../assets/arrow.png";
import Logo from "../assets/logo-hmdk.png";
import "./Nav.scss";

export default function Nav(props) {
  const [scroll, setScroll] = useState(window.scrollY);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClick, setIsClick] = useState(false);
  const scrollLimit = 60; // Detect scroll when pass the limit

  const handleNavigation = (e) => {
    //? navigation
    const window = e.currentTarget;
    const document = e.target;
    const diff = window.scrollY - scroll;
    if (diff > scrollLimit) {
      setIsVisible(false);
      setIsClick(false);
    }

    if (diff <= 0 && diff < -scrollLimit) {
      setIsVisible(true);
    }
    setScroll(window.scrollY);

    //? progress-bar
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it will run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [scroll]);

  return (
    <>
      <div
        style={{
          height: `${scrollLimit}px`,
          transform: isVisible ? `translateY(0%)` : `translateY(-100%)`,
        }}
        className="nav"
      >
        <div className="logo-container">
          <img className="logo" src={Logo} />
          <h1 className="logo-text">HMD Kimia UI 2024</h1>
        </div>
        <ul className="menu-list">
          <li>
            <a href="#">Beranda</a>
          </li>
          <li className="tentang-kami">
            <div className="dropdown">
              <a
                onClick={() => setIsClick(!isClick)}
                className={"main-nav " + (isClick && "active")}
                href="javascript:void(null)"
              >
                Tentang Kami
                <img className="arrow" src={Arrow} />
              </a>
              <a
                className={"dropdown-nav " + (isClick && "drop")}
                href="javascript:void(null)"
              >
                Tim Kami
              </a>
              <a
                className={"dropdown-nav " + (isClick && "drop")}
                href="javascript:void(null)"
              >
                Biro-Departemen
              </a>
            </div>
          </li>
          <li>
            <a href="#">Dokumentasi</a>
          </li>
          <li>
            <a href="#">Kontak</a>
          </li>
        </ul>
      </div>
      <div
        style={{
          top: `${scrollLimit}px`,
          transform: isVisible
            ? `translateY(0px)`
            : `translateY(-${scrollLimit}px)`,
        }}
        className="progress-bar"
      >
        <div style={{ width: `${progress}%` }} className="progress"></div>
      </div>
    </>
  );
}
