import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useState } from "react";
import Star, { StarRiview } from "../../Star/Star";
import Info from "../../modal/Information";

export default function Deskripsi() {
  const sliderRef = useRef(null);
  const [but, setBut] = useState(0);
  const [open, setOpen] = useState(false)
  function closed() {
    setOpen(false)
  }
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    fade: true,
  };
  const settings2 = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    arrows: false,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setBut(index);
  };



  const laptopSpecs = [
    {
      key: "Prosesor",
      value:
        "10th Gen Intel® Core™ i7-1065G7 processor atau 10th Gen Intel® Core™ i5-1035G1 processor",
    },
    { key: "Sistem Operasi", value: "Windows 10 Home" },
    {
      key: "Display",
      value:
        '14" FHD (1920 x 1080) IPS, 300 nits (model layar sentuh penutup logam dan penutup kain)',
    },
    { key: "Memori", value: "8GB" },
    { key: "Storage", value: "512GB M.2 NVME SSD" },
    { key: "Kartu Grafik", value: "NVIDIA® GeForce® MX350 2GB" },
    { key: "Baterai", value: "Hingga 14 jam (FHD)" },
    { key: "Kamera", value: "Kamera IR" },
    {
      key: "Konektivitas",
      value:
        "WiFi 5 (802.11 ac 2x2), opsional: WiFi 6 (802.11 ax 2x2), Bluetooth®",
    },
    {
      key: "Keamanan",
      value:
        "Kamera IR. Fingerprint dikombinasikan dengan tombol power (opsional, hanya tersedia pada model Slate Grey)",
    },
    { key: "Audio", value: "2 x 2W front-facing Dolby Atmos® Speaker System" },
    {
      key: "Dimensi",
      value:
        '320.6mm x 208mm x 14.9mm / 12.62" x 8.18" x 0.58" (metal-cover models) dan 321.6mm x 208mm x 15.4mm / 12.66" x 8.181" x 0.60" (fabric-cover models)',
    },
  ];
  return (
    <div>
      <div className="navigation-buttons my-3">
        <button
          onClick={() => goToSlide(0)}
          className={`px-6 py-2 ${
            but === 0 ? "bg-orange-400 text-white" : ""
          } me-2 text-gray-500 rounded-sm`}
        >
          Rincian Produk
        </button>
        <button
          onClick={() => goToSlide(1)}
          className={`px-6 py-2 ${
            but === 1 ? "bg-orange-400 text-white" : ""
          } me-2  text-gray-500 rounded-sm`}
        >
          Informasi Tambahan
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`px-6 py-2 ${
            but === 2 ? "bg-orange-400 text-white" : ""
          } me-2  text-gray-500 rounded-sm`}
        >
          Ulasan
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="mt-5">
          <ul className="list-disc list-inside text-sm">
            {laptopSpecs.map((e) => (
              <li key={e.key}>
                {e.key} : {e.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 text-sm">
          <p className="indent-6 text-justify">
            laptop ini menawarkan kinerja yang cukup kuat untuk menangani
            berbagai tugas sehari-hari seperti browsing, pengolahan dokumen, dan
            streaming video.Dengan RAM 8GB, Acer Aspire 3 Slim mampu menangani
            multitasking dengan lancar, memastikan pengalaman pengguna yang
            mulus tanpa hambatan. Penyimpanan SSD 512GB memberikan kecepatan
            baca dan tulis yang tinggi, memungkinkan waktu booting yang cepat
            dan akses data yang efisien.
          </p>
          <p className="indent-6 text-justify my-5">
            {" "}
            Layar 14 inci dengan resolusi Full HD menghadirkan visual yang tajam
            dan jernih, ideal untuk menonton video, mengedit dokumen, dan
            bekerja dalam jangka waktu yang lama. Desain SILVER yang elegan
            memberikan tampilan yang stylish dan profesional, cocok untuk
            pelajar, pekerja kantoran, dan pengguna sehari-hari. Laptop ini juga
            dilengkapi dengan berbagai fitur tambahan seperti port yang lengkap
            dan daya tahan baterai yang baik, menjadikannya pilihan yang andal
            untuk kebutuhan komputasi sehari-hari. Acer Aspire 3 Slim adalah
            kombinasi sempurna antara performa, kapasitas, dan gaya yang
            menarik.
          </p>
          <p className="text-justify">
            memiliki prosesor Intel Core i3 - 1115G4 dengan kartu Intel UHD
            Graphics yang terintegrasi untuk membantu Anda menyelesaikan tugas
            belajar dan kantor dengan lancar.
          </p>
        </div>
        <div>
          <div className="mt-5 w-full text-sm grid gap-4 grid-cols-8">
            <div className="col-span-4 pe-1" data-lenis-prevent>
              <div>
                <Slider {...settings2}>
                  <div>
                    <div className="flex gap-6 mb-2">
                      <img
                        src="/img/profil/artworks-000123105989-jla8r5-t500x500.jpg"
                        alt="pict"
                        className="w-[45px] h-[45px] rounded-full"
                      />
                      <div className="text-sm text-gray-500 flex flex-col gap-1">
                        <h1 className="text-black text-base font-semibold">
                          Don't tall
                        </h1>
                        <span>12-5-12 12:39</span>
                        <Star count={8} />
                        <p>
                          Saya sangat puas dengan pembelian laptop di toko ini.
                          Seller sangat ramah dan membantu saya memilih laptop
                          yang sesuai dengan kebutuhan saya. Proses pembelian
                          sangat cepat dan mudah.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <img
                        src="/img/profil/Mask group.svg"
                        alt="pict"
                        className="w-[45px] h-[45px] rounded-full"
                      />
                      <div className="text-sm text-gray-500 flex flex-col gap-1">
                        <h1 className="text-black text-base font-semibold">
                          Sigma
                        </h1>
                        <span>12-5-12 12:39</span>
                        <Star count={8} />
                        <p>
                          Saya sangat kecewa dengan layanan toko ini. Saya
                          membeli laptop dan setelah beberapa hari pemakaian,
                          laptop tersebut mengalami masalah. Saya mencoba
                          menghubungi layanan pelanggan, tetapi responsnya
                          sangat lambat.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-6 mb-2">
                      <img
                        src="/img/profil/dito.jpg"
                        alt="pict"
                        className="w-[45px] h-[45px] rounded-full"
                      />
                      <div className="text-sm text-gray-500 flex flex-col gap-1">
                        <h1 className="text-black text-base font-semibold">
                          Nur Ahmadi Thobroni
                        </h1>
                        <span>12-5-12 12:39</span>
                        <Star count={8} />
                        <p>
                          Saya sangat puas dengan pengalaman pembelian laptop di
                          TechStore. Proses pembelian sangat mudah dan cepat,
                          dimulai dari pemesanan online hingga pengiriman yang
                          hanya memakan waktu dua hari.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <img
                        src="/img/profil/gojo.jfif"
                        alt="pict"
                        className="w-[45px] h-[45px] rounded-full"
                      />
                      <div className="text-sm text-gray-500 flex flex-col gap-1">
                        <h1 className="text-black text-base font-semibold">
                          Pak Vincent
                        </h1>
                        <span>12-5-12 12:39</span>
                        <Star count={6} />
                        <p>
                          kecewa ama seller, order 2 dikirim 1, padahal kan sama
                          console satu{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-stretch gap-5 mb-5">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Masukan Username"
                  className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Masukan email"
                  className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                />
              </div>
              <textarea
                className="w-full h-[160px] outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                name="Komentar"
                id=""
              ></textarea>
              <div className="mt-3 flex items-start justify-between">
                <StarRiview />
                <button onClick={() => setOpen(true)} className="px-12 py-3 rounded-md text-white hover:bg-orange-600 bg-orange-400">Kirim Ulasan</button>
              </div>
              <Info isModal={open} onModal={closed} text={"Berhasil Menambahkan Komentar"} textLink={"Kembali"} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
