import "./Service.scss";

export default function Service() {
  return (
    <div className="service">
      <div className="header">
        <h3 className="mainheader">Layanan Kami</h3>
      </div>
      <div className="box-container">
        <div className="box">
          <div className="title">Academic Support</div>
          <div className="text">
            <div className="explain">
              Fasilitas berupa drive berisi kumpulan soal dan materi perkuliahan
            </div>
            <div className="more">Selengkapnya</div>
          </div>
        </div>
        <div className="box">
          <div className="title">Evaluasi BOP</div>
          <div className="text">
            <div className="explain">
              Pengajuan keringanan BOP untuk mahasiswa Kimia UI
            </div>
            <div className="more">Selengkapnya</div>
          </div>
        </div>
        <div className="box">
          <div className="title">Chemistry Aspiration Center</div>
          <div className="text">
            <div className="explain">
              Wadah aspirasi warga Kimia UI untuk menyampaikan saran dan
              masukkan
            </div>
            <div className="more">Selengkapnya</div>
          </div>
        </div>
        <div className="box">
          <div className="title">Informasi Beasiswa</div>
          <div className="text">
            <div className="explain">
              Informasi program beasiswa yang tersedia untuk mahasiswa Kimia UI
            </div>
            <div className="more">Selengkapnya</div>
          </div>
        </div>
      </div>
    </div>
  );
}
