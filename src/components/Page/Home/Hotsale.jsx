import { NavLink } from "react-router-dom";
import { CountdownTimer } from "./Home";
import Star from "../../Star/Star";

export default function Hotsale({sale}) {
  return (
    <section
      id="Hot-Deals"
      className="h-[590px] flex justify-between gap-5 mb-16"
    >
      <div className="hot-deals basis-[480px] border-2 border-orange-400 rounded-lg p-6 pt-4">
        <div className="border-b border-black relative pb-2">
          <h1 className="text-black text-lg font-semibold ">Hot Deals</h1>
          <hr className="mt-2 border-2 w-[90px] border-orange-400 absolute -bottom-0.5" />
        </div>
        <div className="mt-10">
          <img
            className="m-auto w-[150px]"
            src="/img/kamera/img_27 1.svg"
            alt="kamera"
          />
          <h1 className="font-bold text-center mt-7">
            Amazon Cloud Cam Security
          </h1>
          <div className="star text-center my-3 flex flex-col justify-center items-center gap-5 text-orange-400">
            <div>
              <Star count={8} nilai={140} />
            </div>
            <CountdownTimer duration={2 * 24 * 60 * 60 * 1000} />
            <div className="text-sm text-gray-500">
              <p className="inline-block text-red-600 font-semibold">
                1.300.000
              </p>
              <p className="inline-block mx-3">
                <s>2.500.000</s>
              </p>
            </div>
            <NavLink
              to="/Cart"
              className="px-10 py-[10px] rounded-full bg-orange-400 text-white mt-4 hover:bg-orange-600 hover:text-white hover:transition-all duration-100"
            >
              Beli Sekarang
            </NavLink>
          </div>
        </div>
      </div>
      <div className="promotion basis-full p-7">
        <div className="grid grid-cols-8 mb-14">
          <div className="promo-side col-span-4">
            <Star count={8} nilai={90} />
            <NavLink
              to="/DetailBarang"
              className="block my-6 text-[26px] font-semibold"
            >
              Lenovo MW-2B3 THINKPAD
            </NavLink>
            <div className="text-sm text-gray-500 flex items-center mb-6 ">
              <p className="inline-block text-[17px] text-orange-400 font-semibold">
                2.000.000
              </p>
              <p className="inline-block text-[17px] mx-4">
                <s>2.800.000</s>
              </p> 
              <span className="inline-block px-4 py-1 rounded-sm text-sm bg-orange-400 text-white">
                -45%
              </span>
            </div>
            <p className="text-[13px] text-justify text-gray-500">
              Lenovo ThinkPad adalah serangkaian laptop yang dirancang untuk
              kebutuhan bisnis dan profesional. ThinkPad dikenal karena
              kombinasi daya tahan, kinerja tinggi, dan desain yang ergonomis.
            </p>
            <div className="mt-8 mb-10">
              <div className="flex mb-2 justify-between text-sm text-gray-500">
                <p>
                  Terjual : <span className="font-semibold">200</span>
                </p>
                <p>
                  Sold Out : <span className="font-semibold">20</span>
                </p>
              </div>
              <div className="h-[7px] w-full bg-gray-300 relative">
                <span className="inline-block absolute top-0 h-full w-[80%] bg-orange-400"></span>
              </div>
            </div>
            <NavLink
              to="/Cart"
              className="px-8 py-[10px] border hover:bg-orange-400 hover:transition-all hover:duration-200 hover:text-white text-orange-400 rounded-full border-orange-400"
            >
              Beli Sekarang
            </NavLink>
          </div>
          <div className="col-span-4 flex justify-end items-end">
            <NavLink to="/DetailBarang" className="w-[85%] inline-block">
              <img
                className=""
                src="/img/Laptop/img_103 1 (1).svg"
                alt="laptop"
              />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          {sale.map((e, i) => (
            <div
              className="h-[100px] w-[100px] border flex justify-center items-center border-gray-500 rounded-full"
              key={i}
            >
              <img className="w-[60%] mt-2" src={e} alt="phone" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
