import { useState } from "react";
import produkBarang from "../../../assets/Json/produkBarang.json";
import Barang from "../../Barang/Barang";

export default function Produk() {
  const [clicked, setClicked] = useState("top");

  return (
    <section id="produk-kami" className="p-5">
      <div className="py-3 flex justify-between font-semibold text-2xl border-b-2 border-gray-400 relative">
        <h1>
          Produk <span className="text-orange-400">Kami</span>
          <hr className="border-2 w-[170px] border-orange-400 absolute -bottom-[3px]" />
        </h1>
        <div className="flex justify-around items-center gap-8 me-16">
          <button
            onClick={() => setClicked("top")}
            className="inline-block text-sm relative"
          >
            Top Rating
            <span
              className={
                clicked === "top"
                  ? "inline-block border-b-[10px] border-orange-400 triangle absolute -bottom-[20px] left-7"
                  : "hidden"
              }
            ></span>
            <hr
              className={
                clicked === "top"
                  ? "border-2 w-full border-orange-400 absolute -bottom-[21px]"
                  : "hidden"
              }
            />
          </button>
          <button
            onClick={() => setClicked("newproduk")}
            className="inline-block text-sm relative"
          >
            Produk Baru{" "}
            <span
              className={
                clicked === "newproduk"
                  ? "inline-block border-b-[10px] border-orange-400 triangle absolute -bottom-[20px] left-9"
                  : "hidden"
              }
            ></span>
            <hr
              className={
                clicked === "newproduk"
                  ? "border-2 w-full border-orange-400 absolute -bottom-[21px]"
                  : "hidden"
              }
            />
          </button>
          <button
            onClick={() => setClicked("terlaris")}
            className="inline-block text-sm relative"
          >
            Terlaris
            <span
              className={
                clicked === "terlaris"
                  ? "inline-block border-b-[10px] border-orange-400 triangle absolute -bottom-[20px] left-4"
                  : "hidden"
              }
            ></span>
            <hr
              className={
                clicked === "terlaris"
                  ? "border-2 w-full border-orange-400 absolute -bottom-[21px]"
                  : "hidden"
              }
            />
          </button>
          <button
            onClick={() => setClicked("topriview")}
            className="inline-block text-sm relative"
          >
            Top Riview
            <span
              className={
                clicked === "topriview"
                  ? "inline-block border-b-[10px] border-orange-400 triangle absolute -bottom-[20px] left-7 first-line:transition-all duration-150"
                  : "hidden"
              }
            ></span>
            <hr
              className={
                clicked === "topriview"
                  ? "border-2 w-full border-orange-400 absolute -bottom-[21px] transition-all duration-150"
                  : "hidden"
              }
            />
          </button>
        </div>
      </div>
      <Barang barang={produkBarang}/>
      <div className="my-8">
        <img src="/public/img/Brand.svg" alt="brand" />
      </div>
    </section>
  );
}
