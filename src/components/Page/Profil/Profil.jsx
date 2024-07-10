import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Example from "../../modal/Example";
import { useState } from "react";
import Success from "../../modal/Success";
import Delete from "../../modal/Delete";

export default function Profil() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [utama, setUtama] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const openModal2 = () => {
    setModal(true)
  }
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
          <form action="" method="">
            <div className="flex justify-between">
              <div className="profil basis-[550px]">
                <div className="mt-4 mb-5">
                  <h1 className="text-2xl font-semibold">
                    Profile <span className="text-orange-400">Saya</span>
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Kelola informasi profile anda untuk mengontrol, melindungi
                    dan mengamankan akun
                  </p>
                </div>
                <label htmlFor="username">
                  <span className="block mt-7 mb-2 ">Username</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Masukan Username"
                    className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                  />
                </label>
                <label htmlFor="tgl">
                  <span className="block mt-7 mb-2">Tanggal Lahir</span>
                  <input
                    type="date"
                    name="tgl"
                    id="tgl"
                    className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                  />
                </label>
                <label htmlFor="sex">
                  <span className="block mt-7 mb-2">Jenis Kelamin</span>
                  <div className="relative">
                    <select
                      name="sex"
                      id="sex"
                      className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                    >
                      <option value="Pria">Pria</option>
                      <option value="Wanita">Wanita</option>
                    </select>
                    <FontAwesomeIcon
                      icon="fa-solid fa-chevron-right"
                      className="text-gray-500 absolute right-[20px] top-[30%]"
                    />
                  </div>
                </label>
                <label htmlFor="email">
                  <span className="block mt-7 mb-2">Email</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan Email"
                    className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                  />
                </label>
                <label htmlFor="notelp">
                  <span className="block mt-7 mb-2">No. Telepon</span>
                  <input
                    type="text"
                    name="notelp"
                    id="notelp"
                    placeholder="Masukkan Nomor Telepon"
                    className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                  />
                </label>
              </div>
              <div id="alamat" className="basis-[630px]">
                <div className="mt-2 mb-5 flex justify-between items-center border-b border-gray-400 pb-4">
                  <h1 className="text-2xl font-semibold">
                    Alamat <span className="text-orange-400">Saya</span>
                  </h1>
                  <a
                    onClick={openModal}
                    className="text-sm text-white bg-orange-400 py-3 px-5 flex items-center gap-4 hover:bg-orange-600 cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-plus"
                      className="text-lg"
                    />{" "}
                    Tambah Alamat Baru
                  </a>
                </div>
                <div className="flex justify-between">
                  <div className="w-[50%]">
                    <p className="text-lg">
                      Giorno |{" "}
                      <span className="text-sm">(+62) 838-9292-838</span>{" "}
                      <span className={`${utama === true ? "" : "hidden"} px-2 mx-3 text-sm py-[2px] text-red-500 border border-red-500`}>
                        Utama
                      </span>
                    </p>
                    <p className="text-xs mt-3">
                      Gang Pancitan, RT.3/RW.2, Ds. Gembung Kec. Pagu Kab.
                      Nganjuk Jawa Timur Indonesia, 64461
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex text-sm gap-4">
                      <a
                        onClick={openModal}
                        className="text-blue-500 cursor-pointer"
                      >
                        Ubah
                      </a>
                      <a onClick={openModal2} className="text-red-500 cursor-pointer">Hapus</a>
                    </div>
                    <a onClick={() => setUtama(!utama)} className="cursor-pointer py-2 px-6 border text-sm border-gray-500 hover:text-white hover:bg-gray-500 hover:transition-all hover:duration-200">
                      Atur Sebagai Utama
                    </a>
                  </div>
                </div>

                <Delete isModal={modal} onModal={() => setModal(false)} />
                <Example isOpen={isOpen} onClose={closeModal} />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-orange-400 py-3 px-20 rounded-md my-10"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer page="any" />
    </div>
  );
}
