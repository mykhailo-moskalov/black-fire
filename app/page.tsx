import Hero from "@/components/Hero/Hero";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.page}>
      <Hero />
    </div>
  );
}
