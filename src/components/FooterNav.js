import Logo from "../images/Logo.svg";
import FooterStyles from "./styles/FooterNav.module.css";

function FooterNav() {
  return (
    <footer>
    <nav className={FooterStyles.nav}>Doormat Navigation Placeholder
      <img src={Logo} alt="Logo" />
      <ul className={FooterStyles.navlinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#menu">Menu</a>
        </li>
        <li>
            <a href="#reservations">Reservations</a>
        </li>
        <li>
            <a href="#orderonline">Order Online</a>
        </li>
        <li>
            <a href="#login">Login</a>
        </li>
      </ul>
      </nav>
      <ul className={FooterStyles.contactlist}>Contacts Placeholder
        <li>Email: info@example.com</li>
        <li>Phone: +1 555 555-5555</li>
        <li>Address: 123 Main St, Anytown, USA</li>
      </ul>
      <ul className={FooterStyles.sociallist}> Social Links Placeholder
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default FooterNav;