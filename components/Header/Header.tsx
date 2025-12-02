import Link from "next/link";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header id="header" className={css.header}>
      <Container>
        <Logo width={60} height={95} />
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="#hero">
                Home
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="#about">
                About Us
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="#teams">
                Our Teams
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="header__burger btn btn--icon"
          type="button"
          data-mobile-menu-open
        ></button>

        <div
          className="mobile-menu"
          id="mobile-menu"
          data-mobile-menu
          aria-hidden="true"
        >
          <button
            className="mobile-menu-close btn btn--icon"
            type="button"
            data-mobile-menu-close
          ></button>

          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="#hero">
                Home
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="#about">
                About Us
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="#teams">
                Our Teams
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
