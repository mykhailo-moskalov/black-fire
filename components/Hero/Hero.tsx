import Link from "next/link";
import Container from "../Container/Container";
import css from "./Hero.module.css";
import Section from "../Section/Section";

const Hero = () => {
  return (
    <Section className={css.hero}>
      <Container className={css.container}>
        <h1 className={css.heading}>No Limits</h1>
        <h3 className={css.subHeading}>
          kein Weg ist unmöglich mit einer Familie
        </h3>
        <Link href="#plan" className={css.link}>
          Unser Trainingsplan
        </Link>
      </Container>
    </Section>
  );
};

export default Hero;
