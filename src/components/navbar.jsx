import { useState } from "react";
import "../css/navbar.css";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <>
      <div className="nav">
        <h1 className="nav-head">
          <span className="head-1">MK</span>
          <span className="head-2">Consultancy</span>
        </h1>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <span class="material-symbols-outlined">menu</span>
        </div>
      </div>

      {mobileMenu && (
        <div className="mobile-menu">
          <ul className="moblie-menu-list">
            <li>Home</li>
            <li>About</li>
            <li>Contanct</li>
            <li onClick={toggleMobileMenu}>
              <span class="material-symbols-outlined">close</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
