import logo from "../../../public/img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtLink } from "../Button/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SearchInput = ({ placeholder }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-center sticky">
      <form action="" method="post" className="relative">
        <input
          type="search"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="border border-gray-300 w-60 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 bottom-0 mr-5 text-gray-300 hover:text-orange-400"
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="py-3 fixed top-0 w-full m-auto bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <div className=" font-bold">
              <img className="w-28" src={logo} alt="logo" />
            </div>
          </div>
          <ul
            id="navbar-list"
            className="nav flex w-12 items-center justify-around w-96 text-sm  "
          >
            <li className="poppins-medium font-semibold hover:text-orange-600 transition-all">
              <NavLink to="/">Beranda</NavLink>
            </li>
            <li className="font-semibold hover:text-orange-600 transition-all ">
              <NavLink to="/Belanja">Belanja</NavLink>
            </li>
            <li className="font-semibold hover:text-orange-600 transition-all">
              <NavLink to="/Riwayat">Riwayat</NavLink>
            </li>
            <li className="font-semibold hover:text-orange-600 transition-all">
              <NavLink to="/Kontak">Kontak</NavLink>
            </li>
          </ul>
          <SearchInput placeholder="Search..." />
          <ul id="navbar-side2" className="w-16 flex justify-between text-lg">
            <li className="hover:text-orange-400">
              <NavLink to="/Profil" className="hover:text-orange-400">
                <FontAwesomeIcon icon="fa-regular fa-user" />
              </NavLink>
            </li>
            <li className="hover:text-orange-400">
              <NavLink to="/Cart">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </NavLink>
            </li>
          </ul>
          <ButtLink text="Masuk / Daftar" to="/LoginRegis" type="NavLink" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
