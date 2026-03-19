import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Crew.module.css";

const Crew = () => {
  return (
    <Section className={css.crew}>
      <Container className={css.container}>
        <h2 className={css.heading}>Unsere Leitung</h2>
      </Container>
    </Section>
  );
};

export default Crew;
