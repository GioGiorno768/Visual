import { useState } from "react";
import Navbar from "./nav/Navbar";

function App() {
  const menu = ["Home", "Belanja", "Bantuan", "Kontak"];
  const sosmed = [
    "fa-brands fa-facebook-f",
    "fa-brands fa-x-twitter",
    "fa-brands fa-instagram",
    "fa-brands fa-youtube",
  ];
  return (
    <>
      <Navbar menu={menu} sosmed={sosmed} />
    </>
  );
}

export default App;
