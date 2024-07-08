import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import barang from "../../../assets/Json/Barang.json";
import { Barang2 } from "../../Barang/Barang";
import Pagination from "../../Pagination/Pagination";
import { Transition } from "@headlessui/react";

export default function Belanja() {
  const kategori = [
    "Alat Rumah Tangga",
    "Smartphone",
    "Laptop",
    "Kebutuhan Kantor",
    "Perlengkapan Komputer",
    "SetUp Ruangan",
    "Elektronik Dapur",
  ];
  const brands = [
    "Samsung",
    "Cosmos",
    "Polytron",
    "Apple",
    "Lenovo",
    "Panasonic",
    "Sharp",
  ];
  const tags = [
    "Sharp",
    "Nokia",
    "Laptop",
    "Tranding",
    "Oppo",
    "Brandid",
    "Termurah",
    "Terbaik",
    "Iphone 12 Pro",
    "Realme",
  ];
  const urut = [
    "Default",
    "Terbaru",
    "Termahal",
    "Termurah",
    "Terkait",
    "Terlaris",
  ];
  const [urutan, setUrutan] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3; // Sesuaikan dengan jumlah halaman yang ada

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div id="Belanja">
      <main className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="my-2">
          <NavLink to="/" className={"text-gray-500 hover:text-orange-400"}>
            Beranda
          </NavLink>
          <span className="mx-2">&gt;</span>
          <span className="text-orange-400">Belanja</span>
        </div>
        <div className="flex justify-between my-6 ">
          <aside className="side-content basis-[230px]">
            <div className="text-sm text-gray-500">
              <h1 className="text-xl font-semibold text-black">Kategori</h1>
              <div className="w-full h-1 bg-gray-300 mt-2 relative">
                <span className="inline-block absolute h-full top-0 left-0 w-[40%] bg-orange-400"></span>
              </div>
              <div className="mb-4 mt-2">
                {kategori.map((e, i) => (
                  <button key={i} className="block leading-9">
                    {e}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <h1 className="text-xl font-semibold text-black">Brands</h1>
              <div className="w-full h-1 bg-gray-300 mt-2 relative">
                <span className="inline-block absolute h-full top-0 left-0 w-[40%] bg-orange-400"></span>
              </div>
              <div className="mb-4 mt-2">
                {brands.map((e, i) => (
                  <label htmlFor={e} key={i} className="block leading-9">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl accent-orange-400 "
                      name={e}
                      id={e}
                    />
                    <span className="mx-2">{e}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <h1 className="text-xl font-semibold text-black">Tags</h1>
              <div className="w-full h-1 bg-gray-300 mt-2 relative">
                <span className="inline-block absolute h-full top-0 left-0 w-[40%] bg-orange-400"></span>
              </div>
              <div className="mn-4 mt-2">
                {tags.map((e, i) => (
                  <button
                    key={i}
                    className="px-5 py-2 bg-gray-200 text-gray-700 text-sm rounded-md me-2 my-2"
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          <section className="basis-[1000px]">
            <div className="w-full border border-gray-400 px-5 py-2 text-sm text-gray-400 flex justify-between items-center">
              <span>Menampilkan 1 - 12 dari 120 produk</span>
              <label htmlFor="urutan">
                <span className="inline-block">urutan : </span>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={() => setUrutan(!urutan)}
                      type="button"
                      className="flex w-full justify-center items-center gap-10 rounded-md bg-white ps-3 text-sm "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Options
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>
                  <Transition
                    className={`absolute right-0 transition-opacity duration-500 z-10 mt-4 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    show={urutan}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="py-1" role="none">
                      {urut.map((e, i) => (
                        <a
                          key={i}
                          className="block px-4 py-2 text-xs hover:bg-gray-200 text-gray-700"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          {e}
                        </a>
                      ))}
                    </div>
                  </Transition>
                </div>
              </label>
            </div>
            <div className="my-5">
              <div>
                <Barang2 barang={barang[currentPage]} />
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer page="any" />
    </div>
  );
}
