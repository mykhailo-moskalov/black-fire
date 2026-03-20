import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Team.module.css";

const Team = () => {
  return (
    <Section id="team" className={css.team}>
      <Container className={css.container}>
        <h2 className={css.heading}>
          Unser
          <br />
          <span className="pad">Team</span>
        </h2>
      </Container>
    </Section>
  );
};

export default Team;
