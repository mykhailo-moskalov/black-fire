"use client";

import Link from "next/link";
import Container from "../Container/Container";
import css from "./Hero.module.css";
import Section from "../Section/Section";
import { useEffect, useRef } from "react";
import { smoothScrollTo } from "@/lib/utils/smoothScroll";

const Hero = () => {
  const bottomDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (bottomDivRef.current) {
        document.documentElement.style.setProperty(
          "--bottom-div-height",
          `${Math.ceil(bottomDivRef.current.offsetHeight)}px`,
        );
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Section id="hero" className={css.hero}>
      <Container className={css.container}>
        <h1 className={css.heading}>No Limits</h1>
        <p className={css.subHeading}>
          kein Weg ist unmöglich mit einer Familie
        </p>

        <Link
          href="#trainings"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("trainings");
          }}
          className={css.link}
        >
          Unsere Trainings
        </Link>
      </Container>
      <div ref={bottomDivRef} className={css.bottomDiv}></div>
    </Section>
  );
};

export default Hero;
