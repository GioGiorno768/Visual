import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function LoginRegis() {
  return (
    <div id="LoginRegis">
      <main className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="my-2">
          <NavLink to="/" className={"text-gray-500 hover:text-orange-400"}>
            Beranda
          </NavLink>
          <span className="mx-2">&gt;</span>
          <span className="text-orange-400">Masuk/Daftar</span>
        </div>
        <div className="flex justify-between mt-6 gap-4">
          <div className="basis-[600px]">
            <h1 className="text-2xl font-medium">Daftar</h1>
            <label htmlFor="username">
              <span className="block mt-3 mb-2 font-semibold ">Username</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukan Username"
                className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
              />
            </label>
            <label htmlFor="email">
              <span className="block mt-7 mb-2 font-semibold ">
                Alamat Email
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukan email"
                className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
              />
            </label>
            <label htmlFor="Sandi">
              <span className="block mt-7 mb-2 font-semibold ">Kata Sandi</span>
              <input
                type="password"
                name="Sandi"
                id="Sandi"
                placeholder="Buat Kata Sandi"
                className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
              />
            </label>
            <label htmlFor="verif">
              <span className="block mt-7 mb-2 font-semibold ">
                Verifikasi Sandi
              </span>
              <input
                type="password"
                name="verif"
                id="verif"
                placeholder="Masukan Sandi Lagi"
                className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
              />
            </label>
            <label htmlFor="syarat" className="block text-sm my-3">
              <input type="checkbox" name="syarat" id="syarat" className="me-3 " />
              Saya menyetujui semua <span className="text-orange-400">Syarat</span> & <span className="text-orange-400">Ketentuan</span> Dan Feed
            </label>
            <button className="px-8 py-3 rounded-full bg-orange-400 text-white">Register</button>
          </div>
          <div className="basis-[500px]">
          <h1 className="text-2xl font-medium">Masuk</h1>
            <label htmlFor="username">
              <span className="block mt-3 mb-2 font-semibold ">Alamat email / Username</span>
              <input
                type="text/email"
                name="username"
                id="username"
                placeholder="Masukan Nama Anda"
                className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
              />
            </label>
            <label htmlFor="username">
              <span className="block mt-7 mb-2 font-semibold ">Kata Sandi</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukan Kata Sandi"
                className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
              />
            </label>
            <button className="px-8 py-3 mt-5 rounded-full bg-orange-400 text-white">Login</button>
          </div>
        </div>
      </main>
      <Footer page="any" />
    </div>
  );
}
