import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Count, { Count2 } from "../../Button/Count";
import Footer from "../../Footer/Footer";
import Accordion from "../../Button/Accordion";
import Confirm from "../../modal/Confirm";

export default function Transaksi() {
  const [open, setOpen] = useState(false);
  const [bayar, setBayar] = useState(false)
  function buka() {
    setBayar(true)
  }
  const cart = [
    {
      no: 1,
      img: "/img/mouse/pngwing 4.svg",
      nama: "Mouse Gaming",
      hargaAwal: "400.000",
      hargaDiskon: "300.000",
      jumlah: 2,
      diskon: "-45%",
      total: "600.000",
    },
    {
      no: 2,
      img: "/img/Laptop/pngwing.com (5) 1 (1).svg",
      nama: "Lenovo YOGA Slim 7",
      hargaAwal: "8.700.000",
      hargaDiskon: "8.000.000",
      jumlah: 1,
      diskon: "30%",
      total: "8.000.000",
    },
    {
      no: 3,
      img: "/img/phone/img_126 1.svg",
      nama: "Samsung S20 Ultra",
      hargaAwal: "13.000.000",
      hargaDiskon: "13.900.000",
      jumlah: 2,
      diskon: "-45%",
      total: "26.000.000",
    },
  ];
  return (
    <div>
      <main id="Transaksi">
        <div className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
          <div className="my-2">
            <NavLink to="/" className={"text-gray-500 hover:text-orange-400"}>
              Beranda
            </NavLink>
            <span className="mx-2">&gt;</span>
            <NavLink
              to="/Cart"
              className={"text-gray-500 hover:text-orange-400"}
            >
              Cart
            </NavLink>
            <span className="mx-2">&gt;</span>
            <span className="text-orange-400">Detail Barang</span>
          </div>
          <div className="my-5">
            <h1 className="text-xl font-semibold">
              Barang Yang <span className="text-orange-400">Dibeli</span>
            </h1>
            <div className="flex justify-between gap-4 mt-3">
              <div className="basis-[680px] border-t border-s border-e  border-gray-400">
                {cart.map((e, i) => (
                  <div
                    key={i}
                    className={`flex w-full py-3 gap-8 px-10 border-b relative border-gray-400`}
                  >
                    <button
                      onClick={() => setHapus(e.no)}
                      className="bg-red-500 text-white w-4 h-4 flex absolute top-1 left-1 justify-center items-center rounded-full hover:bg-red-600"
                    >
                      <FontAwesomeIcon
                        className="text-[8px]"
                        icon="fa-solid fa-x"
                      />
                    </button>
                    <div className="flex items-center">
                      <img
                        src={e.img}
                        alt="barang"
                        className="w-[100px] h-[100px]"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">{e.nama}</h1>
                      <div className="text-sm text-gray-500 flex items-center mb-3 ">
                        <p className="inline-block text-[17px] text-orange-400 font-semibold">
                          {e.hargaDiskon}
                        </p>
                        <p className="inline-block text-[17px] mx-4">
                          <s>{e.hargaAwal}</s>
                        </p>
                        <span className="inline-block px-4 py-1 rounded-sm text-sm bg-orange-400 text-white">
                          {e.diskon}
                        </span>
                      </div>
                      <div className="mb-3">
                        <Count2 count={e.jumlah} />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        Total :{" "}
                        <span className="text-gray-500 font-normal">
                          {e.total}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="basis-[540px] h-fit shadow-xl">
                <div className="p-7 pt-5 pb-3 border-b border-gray-400 rounded-s-md rounded-e-md rounded-b-none">
                  <div className="">
                    <h1 className="font-semibold text-xl">
                      Rincian{" "}
                      <span className="text-orange-400">Pembayaran</span>
                    </h1>
                    <h2 className="font-semibold mt-5">Total Belanja</h2>
                    <div className="flex text-sm mt-2 leading-8">
                      <div className="basis-80">
                        <p>Subtotal</p>
                        <p>Ongkos Kirim</p>
                        <p>Asuransi Pengiriman</p>
                      </div>
                      <div>
                        <p>Rp34.000.000</p>
                        <p>Rp100.000</p>
                        <p>Rp500</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-7 pb-3 pt-4 border-b  border-gray-400">
                  <h2 className="font-semibold">Total Belanja</h2>
                  <div className="flex text-sm mt-2 leading-8">
                    <div className="basis-80">
                      <p>Biaya Layanan</p>
                      <p>Biaya Jasa Aplikasi</p>
                    </div>
                    <div>
                      <p>Rp2.000</p>
                      <p>Rp1.000</p>
                    </div>
                  </div>
                </div>
                <div className="px-7 py-3 pt-4 border-b flex border-gray-400">
                  <h1 className="text-xl font-semibold basis-80">
                    Total Tagihan{" "}
                  </h1>
                  <h1 className="text-xl font-semibold text-red-500">
                    RP34.103.500
                  </h1>
                </div>
                <div className="px-16 pt-4 pb-6 flex border-gray-400 rounded-b-md">
                  <button onClick={buka} className="bg-orange-400 w-full hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md">
                    Bayar
                  </button>
                </div>
                <Confirm isModal={bayar} onModal={() => setBayar(false)} />
              </div>
            </div>
          </div>
          <div className="my-5 mt-14">
            <h1 className="text-xl font-semibold">
              Pengiriman & <span className="text-orange-400">Pembayaran</span>
            </h1>
            <div className="w-[680px] mt-4 shadow-xl">
              <div className=" px-5 py-3 rounded-t-lg border-b border-gray-400 ">
                <h1 className="font-semibold">
                  Alamat -{" "}
                  <span className="text-gray-400 font-normal">Lawliet</span>
                </h1>
                <p className="text-gray-400 text-xs">
                  Ds. Gembung Kec. Pagu Kab. Nganjuk Jawa Timur Indonesia
                </p>
              </div>
              <div className=" px-5 py-3 pb-6 rounded-t-lg flex gap-10 border-b border-gray-400">
                <div>
                  <h1 className="font-semibold">Opsi Pengiriman</h1>
                  <div className="max-w-md mt-3 relative">
                    <button
                      onClick={() => setOpen(!open)}
                      className="ps-8 pe-4 py-1 text-sm border border-gray-400 rounded-md"
                    >
                      <span className="me-10">Reguler (JNE Reguler)</span>{" "}
                      <FontAwesomeIcon
                        className="text-sm font-light "
                        icon="fa-solid fa-chevron-right"
                      />
                    </button>
                    <div className={`${open ? "" : "hidden"} absolute top-10 left-0 w-full rounded-lg text-sm`}>
                      <Accordion title="Instant">
                        <ul className="list-disc list-inside">
                          <li>SPX Instant</li>
                          <li>GoSend Instant</li>
                          <li>GrabExpress Instant</li>
                        </ul>
                      </Accordion>
                      <Accordion title="Same Day">
                        <ul className="list-disc list-inside">
                          <li>SPX Sameday</li>
                          <li>GoSend Sameday</li>
                          <li>GrabExpress Sameday</li>
                          <li>Anteraja Sameday</li>
                        </ul>
                      </Accordion>
                      <Accordion title="Next Day">
                        <ul className="list-disc list-inside">
                          <li>JNE YES</li>
                          <li>SiCepat BEST</li>
                        </ul>
                      </Accordion>
                      <Accordion title="Regular">
                        <ul className="list-disc list-inside">
                          <li>SPX Standart</li>
                          <li>J&T Express</li>
                          <li>Ninja Express</li>
                          <li>ID Express</li>
                          <li>JNE Reguler</li>
                          <li>SiCepat REG</li>
                        </ul>
                      </Accordion>
                      <Accordion title="Kargo">
                        <ul className="list-disc list-inside">
                          <li>JNE Trucking (JTR)</li>
                          <li>J&T Cargo</li>
                          <li>Sentral Cargo</li>
                          <li>Antareja Cargo</li>
                          <li>JNE Cargo</li>
                          <li>SiCepat Gokil</li>
                        </ul>
                      </Accordion>
                      <Accordion title="Ambil Ditempat">
                        <ul className="list-disc list-inside">
                          <li>Indopaket (Ambil di Indomaret)</li>
                          <li>J&T Jemari</li>
                          <li>Agen SPX Express</li>
                          <li>SPX Express Point</li>
                        </ul>
                      </Accordion>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-3">
                    Estimasi Tiba 20 - 30 January
                  </p>
                </div>
                <div className="w-80">
                  <h1 className="font-semibold">Metode Pembayaran</h1>
                  <div className="max-w-md mt-3 relative">
                    <button
                      onClick={() => setOpen(!open)}
                      className="ps-6 pe-4 py-1 text-sm border border-gray-400 rounded-md"
                    >
                      <span className="me-10">Bank Bca</span>{" "}
                      <FontAwesomeIcon
                        className="text-sm font-light "
                        icon="fa-solid fa-chevron-right"
                      />
                    </button>
                    <div className={`${open ? "" : "hidden"} absolute top-10 left-0 w-full bg-white text-sm border border-gray-300 rounded-md`}>
                      <button className="border-b border-gray-300 w-full px-6 py-1 text-start">Bank BCA</button>
                      <button className="border-b border-gray-300 w-full px-6 py-1 text-start">Bank Mandiri</button>
                      <button className="border-b border-gray-300 w-full px-6 py-1 text-start">Bank BNI</button>
                      <button className="border-b border-gray-300 w-full px-6 py-1 text-start">Bank Mandiri</button>
                      <button className="border-b border-gray-300 w-full px-6 py-1 text-start">Bank Syariah Indonesia (BSI)</button>
                      <button className="border-b border-gray-300 w-full px-6 py-1 text-start">Bank lainnya</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-5 py-5 rounded-b rounded-s rounded-e rounded-xl flex gap-10 border-b-gray-400"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer page={"any"} />
    </div>
  );
}
