import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Example from "../../modal/Example";
import Delete from "../../modal/Delete";

export default function Kontak() {
  return (
    <div id="Profil">
      <main className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <section id="profil-content">
          <div className="my-2">
            <NavLink to="/" className={"text-gray-500 hover:text-orange-400"}>
              Beranda
            </NavLink>
            <span className="mx-2">&gt;</span>
            <span className="text-orange-400">Profil</span>
          </div>
          <div className="my-10">
            <h1 className="text-2xl font-semibold">
              Hubungi <span className="text-orange-400">Kami</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Kami siap membantu dengan pertanyaan, tanggapan, atau informasi
              tambahan
            </p>
          </div>
          <div className="flex justify-between mb-10">
            <form className=" basis-[700px] ">
              <div className="flex gap-7 justify-between">
                <div className="w-full flex flex-col gap-7">
                  <label htmlFor="username">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Masukan Username"
                      className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                    />
                  </label>
                  <label htmlFor="no">
                    <input
                      type="text"
                      name="no"
                      id="no"
                      placeholder="Masukan Nomor Telepon"
                      className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                    />
                  </label>
                </div>
                <div className="w-full flex flex-col gap-7">
                  <label htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Masukan Alamat Email"
                      className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                    />
                  </label>
                  <label htmlFor="alamat">
                    <input
                      type="text"
                      name="alamat"
                      id="alamat"
                      placeholder="Masukan Alamat"
                      className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                    />
                  </label>
                </div>
              </div>
              <textarea
                className="w-full mt-8 h-[300px] outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                name="Komentar"
                id=""
              ></textarea>
              <div className="text-xs mb-5 text-gray-500">
                <input type="checkbox" name="con" id="con" className="me-3" />
                Ingat username, email, no Tlpn, dan alamat tempat tinggal untuk
                memberikan pesan berikutnya
              </div>
              <button className="px-8 py-2 text-white bg-orange-400">
                Kirim Pesan
              </button>
            </form>
            <div className="basis-[500px]">
              <div className="flex flex-wrap">
                <img
                  src="/img/kontak/Group 121.svg"
                  className="w-[40%]"
                  alt=""
                />
                <img
                  src="/img/kontak/Group 122.svg"
                  className="w-[40%]"
                  alt=""
                />
                <img
                  src="/img/kontak/Group 123.svg"
                  className="w-[40%]"
                  alt=""
                />
                <img
                  src="/img/kontak/Group 124.svg"
                  className="w-[40%]"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2796.5902674789327!2d111.86829022464367!3d-7.577603601289028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzQnMzkuMSJTIDExMcKwNTInMTUuMyJF!5e0!3m2!1sid!2sid!4v1720577076044!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  style={{border: "0"}}
                  allowFullScreen=""
                  className="w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer page="any" />
    </div>
  );
}
