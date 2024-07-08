import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Count from "../../Button/Count";

export default function Cart() {
  const [data, setData] = useState([
    {
      id: 1,
      pict: "/public/img/mouse/pngwing 4.svg",
      name: "Mouse Gaming",
      harga: 300000,
      count: 2,
      total: 600000,
    },
    {
      id: 2,
      pict: "/public/img/Laptop/pngwing.com (5) 1 (1).svg",
      name: "Lenovo YOGA Slim 7",
      harga: 8000000,
      count: 1,
      total: 8000000,
    },
    {
      id: 3,
      pict: "/public/img/phone/img_122 1.svg",
      name: "SAMSUNG S20 ULTRA",
      harga: 13000000,
      count: 2,
      total: 26000000,
    },
  ]);

  // Fungsi untuk menghapus baris
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <div id="Cart">
      <main className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="my-2">
          <NavLink to="/" className={"text-gray-500 hover:text-orange-400"}>
            Beranda
          </NavLink>
          <span className="mx-2">&gt;</span>
          <span className="text-orange-400">Cart</span>
        </div>
        <section class="flex flex-col my-6">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="border rounded-lg overflow-hidden dark:border-neutral-700">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold uppercase "
                      ></th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold uppercase "
                      ></th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold uppercase "
                      >
                        PRODUK
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold uppercase "
                      >
                        HARGA
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold uppercase "
                      >
                        JUMLAH
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold uppercase "
                      >
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative ">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500 text-white w-4 h-4 flex absolute top-1 left-1 justify-center items-center rounded-full hover:bg-red-600"
                          >
                            <FontAwesomeIcon
                              className="text-[8px]"
                              icon="fa-solid fa-x"
                            />
                          </button>
                          <input
                            type="checkbox"
                            className="ms-5"
                            name={item.name}
                            id="barangCart"
                          />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          <img
                            src={item.pict}
                            className="w-[70px] h-[70px]"
                            alt="pict"
                          />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          {item.name}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          {item.harga}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          <Count count={item.count} />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          {item.total}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td
                        colSpan={2}
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 "
                      >
                        <input
                          type="text"
                          name="cupon"
                          id="cupon"
                          placeholder="Masukan Cupon"
                          className="w-full outline-2 outline-orange-400 border border-gray-500 py-3 px-4 rounded-md"
                        />
                      </td>
                      <td>
                        <button className="py-3 px-10 hover:bg-orange-600  bg-orange-400 text-white">
                          Ambil Cupon
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="">
                        <button className="py-3 px-5 hover:bg-orange-600  bg-orange-400 text-white">
                          Perbarui Keranjang
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section id="rincian">
          <div className="text-2xl font-semibold mb-8 mt-14">
            <h1>
              Rincian <span className="text-orange-400">Pembayaran</span>
            </h1>
          </div>
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg overflow-hidden dark:border-neutral-700">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 w-[500px] py-3 text-start text-md font-semibold  uppercase "
                      >
                        SUBTOTAL
                      </th>
                      <td class="px-6 py-4 whitespace-nowrap text-md font-semibold ">
                        Rp34.000.000
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold  uppercase "
                      >
                        Pengiriman
                      </th>
                      <td class="px-6 py-4 whitespace-nowrap text-md font-semibold ">
                        Rp100.000
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-md font-semibold  uppercase "
                      >
                        Total Pembayaran
                      </th>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-500">
                        Rp34.100.000
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end py-5">
              <NavLink to={"/"} className="py-3 px-5 me-20 hover:bg-orange-600  bg-orange-400 text-white">
                Proses Pembayaran
              </NavLink>
            </div>
          </div>
        </section>
      </main>
      <Footer page="any" />
    </div>
  );
}
