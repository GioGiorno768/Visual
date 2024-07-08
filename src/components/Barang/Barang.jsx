import { NavLink, useNavigate } from "react-router-dom";
import Star from "../Star/Star";

export default function Barang({ barang }) {
  return (
    <div className="grid grid-cols-12 gap-8 my-8">
      {barang.map((e, i) => (
        <div
          className="col-span-3 border border-gray-400 rounded-md p-6 relative overflow-hidden h-[480px] justify-between flex flex-col gap-"
          category=""
          category2=""
          category3=""
          category4=""
          key={i}
        >
          <div
            className={`bg-orange-400 text-white text-sm absolute -top-[22px] pb-2 -left-[39px] pt-10 px-9 rotate-[-45deg]`}
          >
            <span>Baru</span>
          </div>
          <div className="flex justify-center m-auto w-[90%]">
            <NavLink to="/DetailBarang">
              <img className="" src={e.img} alt="produk" />
            </NavLink>
          </div>
          <div className="h-[100px]">
            <Star count={e.star} nilai={e["count-star"]} />
            <NavLink
              to="/DetailBarang"
              className="text-xl text-black font-semibold mt-2"
            >
              {e["nama-produk"]}
            </NavLink>
          </div>
          <div className="text-gray-600 text-sm ">
            <p>Stok Terbatas</p>
            <div className="w-full h-[5px] mt-2 bg-gray-300 relative">
              <div
                style={{ width: e.stok + "px" }}
                className="h-full bg-orange-400 absolute top-0 left-0"
              ></div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            <p className="inline-block text-red-600 font-semibold">
              {e.hargaDiskon}
            </p>
            <p className="inline-block mx-3">
              <s>{e.hargaAsli}</s>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Barang2({ barang }) {
  const navigate = useNavigate();
  
  const toDetail = () => {
    navigate('/DetailBarang', { state: { message: 'rawrrrr' } });
  };
  return (
    <div className="grid grid-cols-12 gap-4 my-8">
      {barang.map((e, i) => (
        <div
          className="col-span-3 border border-gray-400 rounded-md p-6 relative overflow-hidden h-[380px] justify-between flex flex-col"
          key={i}
        >
          <div
            className={`bg-orange-400 text-white text-sm absolute -top-[22px] pb-2 -left-[39px] pt-10 px-9 rotate-[-45deg]`}
          >
            <span>Baru</span>
          </div>
          <div className="flex justify-center m-auto w-[70%] h-[165px]">
            <NavLink to="/DetailBarang">
              <img className="h-full w-full" src={e.img} alt="produk" />
            </NavLink>
          </div>
          <div className="h-[100px]">
            <Star count={e.star} nilai={e["count-star"]} />
            <NavLink
              to="/DetailBarang"
              className="text-[14px] text-black font-semibold mt-2"
            >
              {e["nama-produk"]}
            </NavLink>
          </div>
          <div className="text-gray-600 text-[12px] ">
            <p>Stok Terbatas</p>
            <div className="w-full h-[5px] mt-2 bg-gray-300 relative">
              <div
                style={{ width: e.stok + "px" }}
                className="h-full bg-orange-400 absolute top-0 left-0"
              ></div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            <p className="inline-block text-red-600 font-semibold">
              {e.hargaDiskon}
            </p>
            <p className="inline-block mx-3">
              <s>{e.hargaAsli}</s>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
