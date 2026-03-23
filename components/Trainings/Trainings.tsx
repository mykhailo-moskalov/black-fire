"use client";

import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Trainings.module.css";
import { useTrainingsStore } from "@/lib/store/trainingsStore";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const Trainings = () => {
  const setSwiper = useTrainingsStore((state) => state.setSwiper);

  return (
    <Section id="trainings" className={css.trainings}>
      <Container className={css.container}>
        <h2 className={css.heading}>
          Unsere
          <br />
          <span className="pad">Trainings</span>
        </h2>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          centeredSlides={true}
          autoHeight={false}
          grabCursor={true}
          className={css.swiper}
        >
          <SwiperSlide id="miniFlames" className={css.swiperSlide}>
            <h4>Mini Flames</h4>
            <h6>Plannung:</h6>
            <p>
              Dienstag 16:30 bis 17:30 Uhr,
              <br />
              1100 Wien
            </p>
            <h6>Alter:</h6>
            <p>3 Jahre bis 7 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="fairies" className={css.swiperSlide}>
            <h4>Fairies</h4>
            <h6>Plannung:</h6>
            <p>
              Montag 16:30 bis 18 Uhr,
              <br />
              1100 Wien
            </p>
            <p>
              Freitag 16:00 bis 17 Uhr,
              <br />
              Brunn am Gebirge
            </p>
            <h6>Alter:</h6>
            <p>6 Jahre bis 8 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="fireflies" className={css.swiperSlide}>
            <h4>Fireflies</h4>
            <h6>Plannung:</h6>
            <p>
              Dienstag 17:00 bis 18:30 Uhr,
              <br />
              1100 Wien
            </p>
            <p>
              Donnerstag 17:00 bis 19 Uhr,
              <br />
              1100 Wien
            </p>
            <p>
              Freitag 17:00 bis 19 Uhr,
              <br />
              Brunn am Gebirge
            </p>
            <h6>Alter:</h6>
            <p>8 Jahre bis 12 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="firebirds" className={css.swiperSlide}>
            <h4>Firebirds</h4>
            <h6>Plannung:</h6>
            <p>
              Montag 18:00 bis 19:30 Uhr,
              <br />
              1100 Wien
            </p>
            <p>
              Dienstag 18:00 bis 20:09 Uhr,
              <br />
              1100 Wien
            </p>
            <p>
              Freitag 19:00 bis 21 Uhr,
              <br />
              Brunn am Gebirge
            </p>
            <h6>Alter:</h6>
            <p>12 Jahre bis 15 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="forces" className={css.swiperSlide}>
            <h4>Forces</h4>
            <h6>Alter:</h6>
            <p>14 Jahre bis 18 Jahre</p>
          </SwiperSlide>
          <SwiperSlide id="firestorm" className={css.swiperSlide}>
            <h4>Firestorm</h4>
            <h6>Alter:</h6>
            <p>Ab 16 Jahre</p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default Trainings;
