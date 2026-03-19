import { IoRibbon } from "react-icons/io5";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Story.module.css";

const Story = () => {
  return (
    <Section className={css.story}>
      <Container className={css.container}>
        <h2 className={css.heading}>Unsere Geschichte</h2>
        <p className={css.storyText}>
          Black Fire Cheer and Dance wurde im Jänner 2025 von Anna (Gründerin,
          Headcoach & sportliche Leitung) gemeinsam mit Bettina ins Leben
          gerufen.
        </p>
        <IoRibbon className={css.icon} />
        <p className={css.storyText}>
          Schon wenige Wochen nach der Gründung nahmen wir im März an unserer
          ersten Meisterschaft teil - und holten auf Anhieb den
          Landesmeistertitel in den Kategorien Pom und HipHop.
        </p>
        <IoRibbon className={css.icon} />
        <p className={css.storyText}>
          Kurz darauf folgte unsere erste Auslandsmeisterschaft, die wir mit
          großem Erfolg absolvierten: 1. Platz in Pom und 1. Platz in HipHop!
        </p>
        <IoRibbon className={css.icon} />
        <p className={css.storyText}>
          Wir sind stolz auf unsere Athlet:innen, unseren Teamgeist und die
          Energie, die Black Fire Cheer and Dance ausmacht.
        </p>
        <IoRibbon className={css.icon} />
        <p className={css.storyText}>
          Willst du auch Teil unseres Teams werden? Dann melde dich bei uns -
          wir freuen uns auf dich!
        </p>
      </Container>
    </Section>
  );
};

export default Story;
