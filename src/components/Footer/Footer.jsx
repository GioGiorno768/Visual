import { Button } from "../Button/Button";
import logo from "../../../public/img/logo-2 1.png";
import playstore from "../../../public/img/google_play 1.svg";
import appstore from "../../../public/img/app_store 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const alamat = ["64470 Jl Ayani Nganjuk", "64474 Jl Subanjir Sawahan"];
  const kontak = ["techshop@gmail.com", "1-800-654-3210"];
  const kontaklogo = ["fa-regular fa-envelope", "fa-solid fa-phone"];
  const linkfooter = [
    "Temukan dengan cepat",
    "Tautan Langsung",
    "Layanan Kami",
  ];
  const sosmed = [
    ["fa-brands fa-facebook-f", "https://facebook.com"],
    ["fa-brands fa-x-twitter", "https://twitter.com"],
    ["fa-brands fa-instagram", "https://instagram.com"],
    ["fa-brands fa-youtube", "https://youtub.com"],
    ["fa-brands fa-pinterest", "https://pinterest.com"],
  ];
  const childfooter = [
    [
      "Laptop & Komputer",
      "Kamera & Fotografi",
      "HP & Tablet",
      "Video Game & Console",
      "TV & Audio",
      "Gadget",
    ],
    [
      "Akun Anda",
      "Pengembalian",
      "Pusat Pengembalian",
      "Unduhan Aplikasi ",
      "Blog Berita Terbaru",
      "Pengiriman",
    ],
    [
      "Pusat Layanan",
      "Syarat & Ketentuan",
      "Kebijakan Privasi",
      "Bantuan",
      "Pengembalian Produk",
      "FAQ",
    ],
  ];
  return (
    <footer className="w-full text-white">
      <div className="max-w-7xl mx-auto px-2 pt-10 sm:px-6 lg:px-8">
        <div className="flex justify-between align-middle">
          <div>
            <h1 className="font-semibold text-2xl">
              Kami Siap <span className="text-orange-400">Membantu!</span>
            </h1>
            <p className="mt-1 text-gray-400 text-sm">
              Untuk Informasi Konsultasikan dengan anggota kami
            </p>
          </div>
          <form action="" className="flex align-middle justify-center h-11">
            <input
              type="email"
              className="text-black px-3 w-64 focus:outline-orange-500"
              name="Email"
              id="langganan"
              placeholder="Masukan Email Anda"
            />
            <Button text="Langganan" />
          </form>
        </div>
        <div className="py-32 flex justify-between">
          <div>
            <img src={logo} alt="Logo" className="w-36" />
            <div className="py-7">
              {alamat.map((e, i) => (
                <p className="text-gray-400 text-xs leading-6" key={i}>
                  {e}
                </p>
              ))}
            </div>
            <div className="pb-10">
              {kontak.map((e, i) => (
                <div className="mt-2 flex items-center gap-3" key={i}>
                  <FontAwesomeIcon
                    icon={kontaklogo[i]}
                    className="bg-orange-400 p-3 rounded-full"
                  />
                  <span className="inline-block text-sm">{e}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playstore} alt="playstore" />
              </a>
              <a
                href="https://www.apple.com/id/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appstore} alt="appstore" />
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-14 flex-wrap">
            {linkfooter.map((e, i) => (
              <div key={i} className="w-56 flex flex-col justify-between">
                <h1 className="text-xl font-semibold">{e}</h1>
                <div className="pt-5 flex flex-col justify-end">
                  {childfooter[i].map((j, k) => (
                    <p
                      className="text-xs my-3 cursor-pointer text-gray-400 hover:text-white"
                      key={k}
                    >
                      {j}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white">
        <div className="max-w-7xl flex justify-between mx-auto px-2 py-8 sm:px-6 lg:px-8">
          <p className="text-sm">
            &copy; 2024
            <span className="text-orange-400"> Kelompok 8 Visual</span>, Seluruh
            Hak Cipta
          </p>
          <div className="flex gap-10">
            {
              sosmed.map((e, i) => (
                <a href={e[1]} key={i} target="__blank"><FontAwesomeIcon icon={e[0]} /></a>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
