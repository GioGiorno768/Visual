import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function Hero({slide, picSlide}) {
  
  return (
    <section id="hero" className="grid grid-cols-4 gap-5">
      <div className="col-span-3 h-[550px] hero-left flex px-[55px] justify-between items-center">
        <div className="desc">
          <p className="text-orange-500  leading-8">Wide Screen 4K . . . . .</p>
          <h1 className="lg:text-[30px] font-semibold">
            JAM DIGITAL HIGH DEFINITION
          </h1>
          <p className="text-gray-500 leading-9">Mewah Dan Estetik</p>
          <div className="flex h-[60px] mt-6 items-start text-orange-500">
            <p className="mr-2">Diskon </p>
            <h1 className="text-[30px] font-semibold"> 70</h1> <span>%</span>
            <h1 className="ml-5 text-[20px] font-semibold"> Rp 200.000</h1>
          </div>
        </div>
        <div className="hero-image w-[50%]">
          <Slider id="slide" {...slide}>
            {picSlide.map((e, i) => (
              <div key={i}>
                <img src={e} alt="jam" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="hero-right col-span-1 h-[550px] p-6">
        <span className="inline-block px-4 py-1 rounded-sm text-sm bg-orange-400 text-white">
          Baru
        </span>
        <h1 className="font-semibold text-[22px] mt-3">Nokia C21 Plus</h1>
        <div className="flex h-[60px] mt-2 items-start text-orange-500">
          <p className="mr-2">Diskon </p>
          <h1 className="text-[30px] font-semibold"> 60</h1> <span>%</span>
        </div>
        <NavLink
          to="/Cart"
          className="hover:bg-orange-400 hover:text-white hover:transition-all hover:duration-200 px-6 py-2 border text-orange-400 border-orange-400 rounded-full"
        >
          Beli Sekarang &rarr;
        </NavLink>
        <img src="/img/img_57 1.svg" alt="Hp" className="m-auto mt-5" />
      </div>
    </section>
  );
}
