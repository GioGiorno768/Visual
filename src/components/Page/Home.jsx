import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import { NavLink, Route, Routes } from "react-router-dom";
import DetailBarang from "./DetailBarang";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    focusOnSelect: false,
  };
  const settings2 = {
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Menampilkan 3 item sekaligus
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const picClock = [
    "/public/img/img_56 1.svg",
    "/public/img/img_56 1 (1).svg",
    "/public/img/img_56 1 (2).svg",
  ];
  const picRecomend = [
    "/public/img/phone/img_122 1.svg",
    "/public/img/watch/img_122 1 (1).svg",
    "/public/img/phone/img_122 1 (2).svg",
  ];
  const descRecomend = [
    ["Diskon 60%", "IPHONE 11 PRO", "Rp 9.000.000"],
    ["Diskon 30%", "MONTBALNC WATCH", "Rp 3.000.000"],
    ["Diskon 60%", "IPHONE 7", "Rp 5.000.000"],
  ];
  return (
    <main className="mt-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div id="hero" className="grid grid-cols-4 gap-5">
          <div className="col-span-3 h-[550px] hero-left flex px-[55px] justify-between items-center">
            <div className="desc">
              <p className="text-orange-500 leading-8">
                Wide Screen 4K . . . . .
              </p>
              <h1 className="lg:text-[30px] font-semibold">
                JAM DIGITAL HIGH DEFINITION
              </h1>
              <p className="text-gray-500 leading-9">Mewah Dan Estetik</p>
              <div className="flex h-[60px] mt-6 items-start text-orange-500">
                <p className="mr-2">Diskon </p>
                <h1 className="text-[30px] font-semibold"> 70</h1>{" "}
                <span>%</span>
                <h1 className="ml-5 text-[20px] font-semibold"> Rp 200.000</h1>
              </div>
            </div>
            <div className="hero-image w-[50%]">
              <Slider id="slide" {...settings}>
                {picClock.map((e, i) => (
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
              to="/DetailBarang"
              className="hover:bg-orange-400 hover:text-white hover:transition-all hover:duration-200 px-6 py-2 border text-orange-400 border-orange-400 rounded-full"
            >
              Beli Sekarang &rarr;
            </NavLink>
            <img
              src="/public/img/img_57 1.svg"
              alt="Hp"
              className="m-auto mt-5"
            />
          </div>
        </div>
        <div id="rekomendasi" className="my-11">
          <Slider id="slide" {...settings2}>
            {picRecomend.map((e, i) => (
              <div className="rekomend me-10 h-[230px] rounded-md">
                <div className="flex w-[inherit] h-[inherit] p-5 pt-7 gap-5 items-center">
                  <img src={e} className="w-[150px]" alt="phone" />
                  <div>
                    <p className="text-orange-400">{descRecomend[i][0]}</p>
                    <h1 className="text-[20px] text-black font-semibold">
                      {descRecomend[i][1]}
                    </h1>
                    <p className="text-orange-400 mb-5">{descRecomend[i][2]}</p>
                    <NavLink
                      to="/DetailBarang"
                      className="px-7 py-1 border border-black rounded-full"
                    >
                      Beli
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer page="Home" />
    </main>
  );
}

export default Home;
