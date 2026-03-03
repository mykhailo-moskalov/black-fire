import Link from "next/link";
import Container from "../Container/Container";
("web-app-manifest-192x192.png");
import css from "./Hero.module.css";
import Section from "../Section/Section";

const Hero = () => {
  return (
    <Section className={css.hero}>
      <Container>
        <h1 className={css.heading}>No Limits</h1>
        <h3 className={css.subHeading}>
          kein Weg ist unmöglich mit einer Familie
        </h3>
        <Link href="#history" className={css.link}>
          Unsere Geschichte
        </Link>
      </Container>
    </Section>
  );
};

export default Hero;
