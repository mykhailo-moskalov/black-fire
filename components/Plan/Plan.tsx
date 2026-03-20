"use client";

import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Plan.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Plan = () => {
  return (
    <Section id="plan" className={css.plan}>
      <Container className={css.container}>
        <h2 className={css.heading}>Unser Trainingsplan</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true }}
          loop={true}
          centeredSlides={true}
          className={css.swiper}
        >
          <SwiperSlide className={css.swiperSlided}>
            <p>Slide 1</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlided}>
            <p>Slide 2</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlided}>
            <p>Slide 3</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlided}>
            <p>Slide 4</p>
          </SwiperSlide>
          ...
        </Swiper>
      </Container>
    </Section>
  );
};

export default Plan;
