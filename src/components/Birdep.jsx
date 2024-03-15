import "./Birdep.scss";

export default function Birdep(props) {
  return (
    <div id="birdep" className="biro-departemen">
      <div className="header">Biro</div>
      <div className="biros">
        <div className="multimedia">Multimedia</div>
        <div className="humas">Humas</div>
        <div className="kestari">Kestari</div>
        <div className="wirus">Wirus</div>
        <div className="litbang">Litbang</div>
      </div>
      <div className="header">Departemen</div>
      <div className="departemens">
        <div className="depor">Depor</div>
        <div className="arture">Arture</div>
        <div className="keil">Keil</div>
        <div className="psdm">PSDM</div>
        <div className="sosmaling">Sosmaling</div>
        <div className="siar">Siar 03</div>
        <div className="kesma">Kesma</div>
      </div>
    </div>
  );
}
