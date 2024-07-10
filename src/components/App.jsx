import { Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home/Home";
import Belanja from "./Page/Belanja/Belanja";
import Navbar from "./nav/Navbar";
import Riwayat from "./Page/Riwayat/Riwayat";
import Kontak from "./Page/Kontak/Kontak";
import Profil from "./Page/Profil/Profil";
import Cart from "./Page/Cart/Cart";
import LoginRegis from "./Page/LoginRegis/LoginRegis";
import SmoothScrolling from "../assets/lib/SmoothScrolling";
import DetailBarang from "./Page/DetailBarang/DetailBarang";
import { useEffect } from "react";
import Transaksi from "./Page/Transaksi/Transaksi";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App overflow-hidden">
      <SmoothScrolling>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Belanja" element={<Belanja />} />
          <Route path="/Riwayat" element={<Riwayat />} />
          <Route path="/Kontak" element={<Kontak />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/LoginRegis" element={<LoginRegis />} />
        </Routes>
        <Routes>
          <Route path="/DetailBarang" element={<DetailBarang />} />
          <Route path="/Transaksi" element={<Transaksi />} />
        </Routes>
      </SmoothScrolling>
    </div>
  );
}

export default App;
