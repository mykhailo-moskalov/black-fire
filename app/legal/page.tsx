"use client";

import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import css from "./Impressum.module.css";
import BackToTop from "@/components/BackToTop/BackToTop";

export default function Impressum() {
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container className={css.container}>
          <h1>Impressum</h1>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>Angaben gemäß § 5 ECG</h2>
          <ul className={css.list}>
            <li>
              <p>Verein BlackFire Cheer&Dance</p>
            </li>
            <li>
              <p>Ortsstraße 214/3/26</p>
            </li>
            <li>
              <p>2331 Vösendorf</p>
            </li>
            <li>
              <p>Österreich</p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>Kontakt</h2>
          <ul className={css.list}>
            <li>
              <p>Telefon: +4366442330063</p>
            </li>
            <li>
              <p>E-Mail: office@blackfirecheer.at</p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>Vereinsregister</h2>
          <p>Vereinsregisternummer: 1092922401</p>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>Datenschutz</h2>
          <p>
            Die Nutzung unserer Website ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten erhoben werden, erfolgt dies auf freiwilliger
            Basis.
          </p>
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
