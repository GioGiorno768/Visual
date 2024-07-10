import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// const CustomArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         backgroundColor: "orange",
//         borderRadius: "50%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "40px",
//         height: "40px"
//       }}
//       onClick={onClick}
//     />
//   );
// };

export default function Riwayat() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
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
            <span className="text-orange-400">Riwayat</span>
          </div>
          <div className="my-5">
            <h1 className="text-xl font-semibold">
              Barang Yang <span className="text-orange-400">Dibeli</span>
            </h1>
            <div className="flex justify-between gap-4 mt-3 ">
              <div className="basis-[680px] border-t border-s border-e h-fit border-gray-400">
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
                    <div className="w-full">
                      <h1 className="text-lg font-semibold">{e.nama}</h1>
                      <div className="text-sm text-gray-500 w-full flex items-center my-2 ">
                        <div className="basis-[200px]">
                          <p className="inline-block text-[17px] text-orange-400 font-semibold">
                            {e.hargaDiskon}
                          </p>
                        </div>
                        <p className="inline-block text-[17px] me">
                          <s>{e.hargaAwal}</s>
                        </p>
                      </div>
                      <div className="flex ">
                        <p className="text-sm font-semibold basis-[200px] text-gray-500">
                          {e.jumlah} Produk
                        </p>
                        <p className="text-sm font-semibold text-gray-500">
                          Total :{" "}
                          <span className="text-gray-500 font-normal">
                            {e.total}
                          </span>
                        </p>
                      </div>
                      <div className="flex mt-4 items-center">
                        <h2 className="text-xs text-orange-400 basis-[200px]">
                          Detail{" "}
                          <span className="text-gray-400">Transaksi</span>
                        </h2>
                        <NavLink
                          to={"/Belanja"}
                          className="px-5 py-2 bg-orange-400 text-white text-sm"
                        >
                          Beli Lagi
                        </NavLink>
                      </div>
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
                <div className="px-16 pt-4 pb-6 flex border-gray-400 rounded-b-md"></div>
              </div>
            </div>
          </div>
          <div className="my-5 mt-14">
            <h1 className="text-xl font-semibold">
              Pengiriman & <span className="text-orange-400">Pembayaran</span>
            </h1>
            <div className="w-full rounded-xl px-20 py-5 mt-4 shadow-xl">
              <Slider {...settings}>
                <div>
                  <img src="/img/riwayat/Group 96 (1).svg" alt="" />
                  
                </div>
                <div>
                  <img src="/img/riwayat/Group 97.svg" alt="" />
                </div>
                <div>
                <img src="/img/riwayat/Group 143.svg" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </main>
      <Footer page={"any"} />
    </div>
  );
}
