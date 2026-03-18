import Link from "next/link";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Sponsors.module.css";
import Image from "next/image";

const Sponsors = () => {
  return (
    <Section className={css.sponsors}>
      <Container className={css.container}>
        <h2 className={css.heading}>Unsere Sponsoren</h2>
        <ul className={css.sponsorsList}>
          <li className={css.sponsorsItem}>
            <Link
              href="https://gcclean.at/"
              target="_blank"
              className={css.sponsorsLink}
            >
              <Image
                width={120}
                height={60}
                alt="GCClean Logo"
                src="/sponsors/LOGO-GCClean.png"
                className={css.gclean}
              />
            </Link>
          </li>
          <li className={css.sponsorsItem}>
            <Link
              href="https://renault-schwechat.at/"
              target="_blank"
              className={css.sponsorsLink}
            >
              <Image
                width={190}
                height={80}
                alt="Renauld Zidek Logo"
                src="/sponsors/LOGO-RZS.webp"
                className={css.gclean}
              />
            </Link>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Sponsors;
