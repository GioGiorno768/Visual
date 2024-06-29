import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Rekomendasi from "./Rekomendasi";
import Hotsale from "./Hotsale";
import Produk from "./Produk";

export function CountdownTimer({ duration }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const endTime = Date.now() + duration;

    const timerID = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = endTime - currentTime;
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(timerID);
      }
    }, 1000);

    // Membersihkan interval ketika komponen di-unmount
    return () => {
      clearInterval(timerID);
    };
  }, [duration]);

  if (timeLeft <= 0) return "Waktu Habis";

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const dura = [
    [days, "Hari"],
    [hours, "Jam"],
    [minutes, "Menit"],
    [seconds, "Detik"],
  ];

  return (
    <div className="flex gap-3 m-auto text-gray-500">
      {dura.map((e, i) => (
        <div key={i}>
          <span className="p-2 w-10 flex items-center justify-center mb-3 rounded-full bg-orange-400 text-white">
            {e[0]}
          </span>
          <p className="text-sm">{e[1]}</p>
        </div>
      ))}
    </div>
  );
}

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
  const hotsale = [
    "/public/img/phone/img_126 1.svg",
    "/public/img/phone/pngwing 3.svg",
    "/public/img/mouse/pngwing 4.svg",
    "/public/img/phone/pngwing 5.svg",
  ];
  return (
    <div id="Beranda">
      <main className="pt-20 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <Hero slide={settings} picSlide={picClock}/>
        <Rekomendasi slide={settings2} picSlide1={picRecomend} picSlide2={descRecomend}  />
        <Hotsale sale={hotsale}/>
        
        <Produk />
      </main>
      <Footer page="Home" />
    </div>
  );
}

export default Home;
