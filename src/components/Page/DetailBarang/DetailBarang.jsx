import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { Detail } from "./Detail";
import Deskripsi from "./Deskripsi";
import Barang from "../../Barang/Barang";
import produk from "../../../assets/Json/produkBarang.json";

export default function DetailBarang() {
  const produk2 = produk.slice(0, 4);
  return (
    <main id="DetailBarang">
      <div className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="my-2">
          <NavLink to="/" className={"text-gray-500 hover:text-orange-400"}>
            Beranda
          </NavLink>
          <span className="mx-2">&gt;</span>
          <span className="text-orange-400">Detail Barang</span>
        </div>
        <section className="my-6">
          <Detail />
        </section>
        <section className="my-6 mt-14">
          <Deskripsi />
        </section>
        <section className="my-6">
          <div className="flex justify-between font-semibold text-2xl border-b-2 border-gray-400 relative">
            <h1>
              Produk <span className="text-orange-400">Kami</span>
              <hr className="border-2 w-[170px] border-orange-400 absolute -bottom-[3px]" />
            </h1>
          </div>
          <Barang barang={produk2} />
        </section>
      </div>
      <Footer page="any" />
    </main>
  );
}
