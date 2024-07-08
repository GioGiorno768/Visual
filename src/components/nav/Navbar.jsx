// src/nav/Navbar.jsx
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
          className="border border-gray-300 w-80 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 bottom-0 mr-5 text-gray-300 hover:text-orange-400"
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="bg-white" />
        </button>
      </form>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="py-3 fixed top-0 w-full m-auto bg-white z-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <div className=" font-bold">
              <img className="w-28" src={logo} alt="logo" />
            </div>
          </div>
          <ul
            id="navbar-list"
            className="nav flex items-center justify-around w-96 text-sm"
          >
            <li className="poppins-medium font-semibold hover:text-orange-600 transition-all">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Beranda
              </NavLink>
            </li>
            <li className="font-semibold hover:text-orange-600 transition-all">
              <NavLink
                to="/Belanja"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Belanja
              </NavLink>
            </li>
            <li className="font-semibold hover:text-orange-600 transition-all">
              <NavLink
                to="/Riwayat"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Riwayat
              </NavLink>
            </li>
            <li className="font-semibold hover:text-orange-600 transition-all">
              <NavLink
                to="/Kontak"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Kontak
              </NavLink>
            </li>
          </ul>
          <SearchInput placeholder="Search..." />
          <ul id="navbar-side2" className="w-16 flex justify-between text-lg">
            <li className="hover:text-orange-400">
              <NavLink
                to="/Profil"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <FontAwesomeIcon icon="fa-regular fa-user" />
              </NavLink>
            </li>
            <li className="hover:text-orange-400 relative">
              <span className="animate-ping right-0 absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
              <span className="right-0 absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
              <NavLink
                to="/Cart"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
          <ButtLink
            text="Masuk / Daftar"
            to="/LoginRegis"
            type="NavLink"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
