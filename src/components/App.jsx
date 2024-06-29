import { Route, Router, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Belanja from "./Page/Belanja";
import Navbar from "./nav/Navbar";
import Riwayat from "./Page/Riwayat";
import Kontak from "./Page/Kontak";
import Profil from "./Page/Profil";
import Cart from "./Page/Cart";
import LoginRegis from "./Page/LoginRegis";
import SmoothScrolling from "../assets/lib/SmoothScrolling";
import DetailBarang from "./Page/DetailBarang";

function App() {
  return (
    <div className="App">
      <SmoothScrolling>
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
        </Routes>
      </SmoothScrolling>
    </div>
  );
}

export default App;
