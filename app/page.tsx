import Hero from "@/components/Hero/Hero";
import Story from "@/components/Story/Story";
import Trainings from "@/components/Trainings/Trainings";
import Team from "@/components/Team/Team";
import Sponsors from "@/components/Sponsors/Sponsors";
import BackToTop from "@/components/BackToTop/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Trainings />
      <Team />
      <Sponsors />
      <BackToTop />
    </main>
  );
}
