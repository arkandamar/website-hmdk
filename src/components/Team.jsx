import "./Team.scss";
import Card from "./Card";

let ketua = {
  name: "Ramiro Indratma Putra",
  job: "Ketua Himpunan",
  year: "2022",
};

let sekre = {
  name: "Duval Nassar Thalib",
  job: "Sekretaris",
  year: "2022",
};

let bentre = {
  name: "Azraa",
  job: "Bendahara Collector",
  year: "2022",
};

let bencol = {
  name: "Utami Nur Hayati",
  job: "Bendahara Tresurer",
  year: "2022",
};

export default function Team(props) {
  return (
    <div id="team" className="team">
      <div className="header">Tim HMD Kimia UI</div>
      <div className="inti">
        <div className="header-inti">Pengurus Inti</div>
        <div className="kahim">
          <Card {...ketua} />
        </div>
        <div className="pi">
          <Card {...sekre} />
          <Card {...bentre} />
          <Card {...bencol} />
        </div>
      </div>
      <div className="birdep">
        <div className="header-birdep">Multimedia</div>
        <div className="cards-birdep">
          <Card {...sekre} />
          <Card {...bentre} />
          <Card {...bencol} />
        </div>
      </div>
      <div className="birdep">
        <div className="header-birdep">Humas</div>
        <div className="cards-birdep">
          <Card {...sekre} />
          <Card {...bentre} />
          <Card {...bencol} />
        </div>
      </div>
      <div className="birdep">
        <div className="header-birdep">Kestari</div>
        <div className="cards-birdep">
          <Card {...sekre} />
          <Card {...bentre} />
          <Card {...bencol} />
        </div>
      </div>
    </div>
  );
}
