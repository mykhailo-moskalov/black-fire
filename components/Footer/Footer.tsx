import Link from "next/link";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import css from "./Footer.module.css";
import { IoLocation, IoLogoInstagram, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className={css.footer}>
      <Container className={css.container}>
        <ul className={css.columnsList}>
          <li className={css.columnsItem}>
            <Logo width={60} height={95} />
          </li>
          <li className={css.columnsItem}>
            <ul className={css.socialsList}>
              <li className={css.socialsItem}>
                <Link
                  href="https://www.instagram.com/blackfirecheer/"
                  target="_blank"
                  className={css.socialsLink}
                >
                  <IoLogoInstagram />
                  blackfirecheer
                </Link>
              </li>
              <li className={css.socialsItem}>
                <Link
                  href="tel:+4366442330063"
                  target="_blank"
                  className={css.socialsLink}
                >
                  <FaPhoneAlt />
                  +4366442330063
                </Link>
              </li>
              <li className={css.socialsItem}>
                <Link
                  href="https://maps.app.goo.gl/LHXVDDkNTqQy34UD6"
                  target="_blank"
                  className={css.socialsLink}
                >
                  <IoLocation />
                  Kindbergstraße 14 2331 VÖSENDORF
                </Link>
              </li>
              <li className={css.socialsItem}>
                <Link
                  href="mailto:office@blackfirecheer.at"
                  target="_blank"
                  className={css.socialsLink}
                >
                  <IoMail />
                  office@blackfirecheer.at
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <p className={css.copyright}>
          &copy; {new Date().getFullYear()} Verein BlackFire Cheer&Dance
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
