"use client";

import Link from "next/link";
import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import css from "./Sponsors.module.css";
import Image from "next/image";
import { useWidthStore } from "@/lib/store/widthStore";

const Sponsors = () => {
  const isMobile = useWidthStore((state) => state.isMobile);

  return (
    <Section id="sponsors" className={css.sponsors}>
      <Container className={css.container}>
        <h2 className={css.heading}>
          Unser
          <br />
          <span className="pad">Sponsor</span>
        </h2>
        <Link
          href="https://renault-schwechat.at/"
          target="_blank"
          className={css.sponsorsLink}
        >
          <Image
            width={isMobile ? 190 : 380}
            height={isMobile ? 80 : 160}
            alt="Renauld Zidek Logo"
            src="/sponsors/LOGO-RZS.webp"
            className={css.gclean}
          />
        </Link>
      </Container>
    </Section>
  );
};

export default Sponsors;
