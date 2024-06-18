import logo from "./logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { useState } from "react";

const SearchInput = ({ placeholder }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
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

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full gap-5 rounded-sm items-center text-center shadow-sm px-4 py-2 bg-orange-400 text-sm font-medium text-white text hover:bg-orange-600 focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon="fa-solid fa-list" />
          {selected ? selected : "Cari Kategori"}
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
      {open && (
        <div className="origin-top-left absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectedChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ menu, sosmed }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <nav className="my-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <div className=" font-bold">
              <img className="w-28" src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex items-center">
            {sosmed.map((e, i) => (
              <a href="" className="m-1 p-2">
                <FontAwesomeIcon icon={e} key={i} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Dropdown
            options={options}
            selected={selectedOption}
            onSelectedChange={setSelectedOption}
          />
          <ul
            id="navbar-list"
            className="flex w-12 items-center justify-around w-80"
          >
            {menu.map((e, i) => (
              <li className="font-semibold" key={i}>
                <a href="">{e}</a>
              </li>
            ))}
          </ul>
          <SearchInput placeholder="Search..." />
          <div className="w-16 flex justify-between text-lg">
            <a href="">
              <FontAwesomeIcon icon="fa-regular fa-user" />
            </a>
            <a href="">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </a>
          </div>
          <Button text="Masuk / Daftar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
