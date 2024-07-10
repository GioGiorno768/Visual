import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Star from "../../Star/Star";
import { useState } from "react";
import { Beli } from "../../modal/Beli";
import Deskripsi from "./Deskripsi";

export function Detail() {
  const [jumlah, setJumlah] = useState(1);
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("Laptop/img_103 1 (1).svg");
  const detail = [
    ["/img/Laptop/img_103 1 (1).svg", "model1"],
    ["/img/Laptop/pngwing.com (5) 1.png", "model2"],
    ["/img/produk/img_126 1 (9).svg", "model3"],
    ["/img/Laptop/img_103 1 (1).svg", "modal4"],
  ];
  const model = ["Slim 7", "Y-50", "P50", "P11", "Y-60"];
  const [isActive, setActive] = useState(0);
  
  return (
    <div className="flex justify-start gap-16">
      <div className="flex gap-5">
        <div className="w-[470px] h-[470px] flex justify-center items-center border border-gray-500 rounded-md ">
          <img
            src={"/img/" + type}
            alt="Detail"
            className="w-[75%]"
          />
        </div>
        
        <div className="flex flex-col gap-3">
          <button
            className={type === "Laptop/img_103 1 (1).svg" ? "border-orange-500 p-2 border rounded-md w-[100px] h-[100px]" : "p-2 border border-gray-500 rounded-md w-[100px] h-[100px]" }
            onClick={() => setType("Laptop/img_103 1 (1).svg")}
          >
            <img
              src="/img/Laptop/img_103 1 (1).svg"
              alt="Detail"
              className="w-full h-full"
            /> 
          </button>
          <button
            className={type === "Laptop/pngwing.com (5) 1.svg" ? "border-orange-500 p-2 border rounded-md w-[100px] h-[100px]" : "p-2 border border-gray-500 rounded-md w-[100px] h-[100px]"}
            onClick={() => setType("Laptop/pngwing.com (5) 1.svg")}
          >
            <img
              src="/img/Laptop/pngwing.com (5) 1.svg"
              alt="Detail"
              className="w-full h-full"
            />
          </button>
          <button
            className={type === "produk/img_126 1 (9).svg" ? "border-orange-500 p-2 border rounded-md w-[100px] h-[100px]" : "p-2 border border-gray-500 rounded-md w-[100px] h-[100px]"}
            onClick={() => setType("produk/img_126 1 (9).svg")}
          >
            <img
              src="/img/produk/img_126 1 (9).svg"
              alt="Detail"
              className="w-full h-full"
            />
          </button>
          <button
            className={type === "Laptop/pngwing.com (5) 1 (1).svg" ? "border-orange-500 p-2 border rounded-md w-[100px] h-[100px]" : "p-2 border border-gray-500 rounded-md w-[100px] h-[100px]"}
            onClick={() => setType("Laptop/pngwing.com (5) 1 (1).svg")}
          >
            <img
              src="/img/Laptop/pngwing.com (5) 1 (1).svg"
              alt="Detail"
              className="w-full h-full"
            />
          </button>
        </div>
        <div className="ms-7 leading-[45px] basis-[650px]">
          <h1 className="font-semibold text-2xl">Lenovo - YOGA Slim 7</h1>
          <Star count={8} nilai={90} />
          <div className="text-lg">
            <p className="inline-block font-semibold">5.000.000</p>
            <p className="inline-block text-gray-500 mx-3">
              <s>6.800.000</s>
            </p>
          </div>
          <div className="text-sm my-3">
            <p>
              Mau beli laptop? Lenovo YOGA slim 7 Bisa jadi pilihannya. Laptop
              berat 2.4 kg ini memiliki layar 15.6” dan resolusi 1920 x 1080
              pixels. Performanya juga tergolong mumpuni untuk mendukung
              pemakaian sehari-hari. yuk, langsung saja dapatkan harga Lenovo
              Lenovo YOGA slim 7 yang termurah mulai dari 5.000.000 - 10.000.000
              Rupiah
            </p>
          </div>
          <div className="model leading-normal mt-6 mb-4">
            <span className="text-md font-semibold">Model : </span>
            {model.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-20 ${isActive === i ? "bg-orange-400 text-white" : undefined}  px-3 rounded-md py-2 text-xs `}
              >
                {e}
              </button>
            ))}
          </div>
          <p className="font-semibold">
            Kategory :{" "}
            <span className="font-normal text-sm">Lenovo, YOGA, ThinkPad</span>
          </p>
          <p className="font-semibold">
            Tag :{" "}
            <span className="font-normal text-sm">Laptop, Murah, Terbaru</span>
          </p>
          <div className="font-semibold flex gap-3 items-center">
            <span>Share : </span>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="__blank">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </a>
              <a href="https://facebook.com" target="__blank">
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
              </a>
              <a href="https://facebook.com" target="__blank">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
              <a href="https://facebook.com" target="__blank">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
              <a href="https://facebook.com" target="__blank">
                <FontAwesomeIcon icon="fa-brands fa-pinterest" />
              </a>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-5 leading-normal">
            <div className="leading-normal w-fit p-2 px-4 flex font-semibold gap-4 border rounded-md border-gray-500">
              <button
                onClick={() =>
                  jumlah === 1 ? setJumlah(jumlah) : setJumlah(jumlah - 1)
                }
              >
                -
              </button>
              <span>{jumlah}</span>
              <button onClick={() => setJumlah(jumlah + 1)}>+</button>
            </div>
            <button
              onClick={() => setModal(true)}
              className="hover:bg-orange-600 bg-orange-400 text-white px-8 py-3 rounded-full"
            >
              Beli Sekarang
            </button>
            <Beli isModal={modal} onModal={() => setModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
