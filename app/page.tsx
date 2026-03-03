import css from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Story from "@/components/Story/Story";
import Plan from "@/components/Plan/Plan";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
  return (
    <div className={css.page}>
      <Hero />
      <Story />
      <Plan />
      <Sponsors />
    </div>
  );
}
