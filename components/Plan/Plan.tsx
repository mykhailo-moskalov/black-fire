import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Plan.module.css";

const Plan = () => {
  return (
    <Section className={css.sponsors}>
      <Container className={css.container}>
        <h2 className={css.heading}>Unser Trainingsplan</h2>
      </Container>
    </Section>
  );
};

export default Plan;
