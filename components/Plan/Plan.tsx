"use client";

import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Plan.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const Plan = () => {
  return (
    <Section id="plan" className={css.plan}>
      <Container className={css.container}>
        <h2 className={css.heading}>Unser Trainingsplan</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          centeredSlides={true}
          autoHeight={false}
          className={css.swiper}
        >
          <SwiperSlide id="miniFlames" className={css.swiperSlide}>
            <h4>Mini Flames</h4>
            <p>Dienstag 16:30 bis 17:30 Uhr in 1100 Wien</p>
            <h5>Alter:</h5>
            <p>3 Jahre bis 7 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="fairies" className={css.swiperSlide}>
            <h4>Fairies</h4>
            <p>Montag 16:30 bis 18 Uhr 1100 Wien</p>
            <p>Freitag 16:00 bis 17 Uhr Brunn am Gebirge</p>
            <h5>Alter:</h5>
            <p>6 Jahre bis 8 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="fireflies" className={css.swiperSlide}>
            <h4>Fireflies</h4>
            <p>Dienstag 17:00 bis 18:30 Uhr 1100 Wien</p>
            <p>Donnerstag 17:00 bis 19 Uhr 1100 Wien</p>
            <p>Freitag 17:00 bis 19 Uhr Brunn am Gebirge</p>
            <h5>Alter:</h5>
            <p>8 Jahre bis 12 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="firebirds" className={css.swiperSlide}>
            <h4>Firebirds</h4>
            <p>Montag 18:00 bis 19:30 Uhr 1100 Wien</p>
            <p>Dienstag 18:00 bis 20:09 Uhr 1100 Wien</p>
            <p>Freitag 19:00 bis 21 Uhr Brunn am Gebirge</p>
            <h5>Alter:</h5>
            <p>12 Jahre bis 15 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="forces" className={css.swiperSlide}>
            <h4>Forces</h4>
            <p>14 Jahre bis 18 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="firestorm" className={css.swiperSlide}>
            <h4>Firestorm</h4>
            <p>Ab 16 Jahre</p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default Plan;
