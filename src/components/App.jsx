import { Route, Router, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Belanja from "./Page/Belanja";
import Navbar from "./nav/Navbar";
import Riwayat from "./Page/Riwayat";
import Kontak from "./Page/Kontak";
import Profil from "./Page/Profil";
import Cart from "./Page/Cart";
import LoginRegis from "./Page/LoginRegis";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="max-w-7xl mx-auto sm:px-6 md:px-7 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Belanja" element={<Belanja />} />
          <Route path="/Riwayat" element={<Riwayat />} />
          <Route path="/Kontak" element={<Kontak />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/LoginRegis" element={<LoginRegis />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
