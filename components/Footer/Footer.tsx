import Link from "next/link";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={css.footer}>
      <Container className={css.container}>
        <Logo width={60} height={95} />
        <ul className={css.socialsList}>
          <li className={css.socialsItem}>
            <Link
              href="https://www.instagram.com/blackfirecheer/"
              target="_blank"
              className={css.socialsLink}
            >
              &#64;blackfirecheer
            </Link>
          </li>
          <li className={css.socialsItem}>
            <Link
              href="tel:+4366442330063"
              target="_blank"
              className={css.socialsLink}
            >
              +4366442330063
            </Link>
          </li>
          <li className={css.socialsItem}>
            <Link
              href="https://maps.app.goo.gl/LHXVDDkNTqQy34UD6"
              target="_blank"
              className={css.socialsLink}
            >
              Kindbergstraße 14 2331 VÖSENDORF
            </Link>
          </li>
          <li className={css.socialsItem}>
            <Link
              href="mailto:office@blackfirecheer.at"
              target="_blank"
              className={css.socialsLink}
            >
              office@blackfirecheer.at
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
