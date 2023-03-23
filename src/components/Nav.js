import Logo from "../images/Logo.svg";
import NavStyles from "./styles/Nav.module.css";
import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={NavStyles.header}>
      <div className={NavStyles.container}>
        <nav className={NavStyles.nav}>
          <img src={Logo} alt="Logo" />
          <button
            className={`${NavStyles.hamburger} ${menuOpen ? NavStyles.open : ''}`}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`${NavStyles.menu} ${menuOpen ? NavStyles.active : ''}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="https://www.picca.com/pdf/picca-menu.pdf" target="_blank" rel="noopener noreferrer">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/orderonline">Order Online</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
