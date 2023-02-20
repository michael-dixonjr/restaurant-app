import Logo2 from "../images/Logo2.png";
import FooterStyles from "./styles/FooterNav.module.css";

function FooterNav() {
  return (
    <footer className={FooterStyles.footercontainer}>
      <nav className={FooterStyles.nav}>
        <img className={FooterStyles.footerimg} src={Logo2} alt="Logo" />

        <ul className={FooterStyles.navlist}>
          <li className={FooterStyles.listtitle}>Navigation</li>
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
        <ul className={FooterStyles.contactlist}>
          <li className={FooterStyles.listtitle}>Contact Us</li>
          <li>Email: info@example.com</li>
          <li>Phone: +1 555 555-5555</li>
          <li>Address: 123 Main St, Anytown, USA</li>
        </ul>
        <ul className={FooterStyles.sociallist}>
          <li className={FooterStyles.listtitle}>Socials</li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterNav;
