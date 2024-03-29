import Logo2 from "../images/Logo2.png";
import FooterStyles from "./styles/FooterNav.module.css";
import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <footer className={FooterStyles.footercontainer}>
      <nav className={FooterStyles.nav}>
        <img className={FooterStyles.footerimg} src={Logo2} alt="Logo" />

        <ul className={FooterStyles.navlist}>
          <li className={FooterStyles.listtitle}>Navigation</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://www.picca.com/pdf/picca-menu.pdf" target="_blank" rel="noopener noreferrer">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/orderonline">Order Online</Link>
          </li>
        </ul>
        <ul className={FooterStyles.contactlist}>
          <li className={FooterStyles.listtitle}>Contact Us</li>
          <li>Email: info@example.com</li>
          <li>Phone: +1 555 555-5555</li>
          <li>Address: 123 Main St, Anytown, USA</li>
        </ul>
        <ul className={FooterStyles.sociallist}>
          <li className={FooterStyles.listtitle}>Socials</li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterNav;
