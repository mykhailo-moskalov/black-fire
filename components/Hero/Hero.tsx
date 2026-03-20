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
        <h3 className={css.subHeading}>
          kein Weg ist unmöglich mit einer Familie
        </h3>

        <Link
          href="#plan"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("plan");
          }}
          className={css.link}
        >
          Unser Trainingsplan
        </Link>
      </Container>
      <div ref={bottomDivRef} className={css.bottomDiv}></div>
    </Section>
  );
};

export default Hero;
