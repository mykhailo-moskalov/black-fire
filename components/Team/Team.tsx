"use client";

import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Team.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css/bundle";

const Team = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section id="team" className={css.team}>
      <Container className={css.container}>
        <h2 className={css.heading}>
          Unser
          <br />
          <span className="pad">Team</span>
        </h2>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          spaceBetween={16}
          grabCursor={true}
          modules={[Navigation, FreeMode, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className={css.swiper}
        >
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Gründerinnen Anna Ableidinger & Bettina Beneda"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>
              Gründerinnen Anna Ableidinger & Bettina Beneda
            </p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Unsere Trainerinnen"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>Unsere Trainerinnen</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image width={250} height={375} alt="Alle" src="/" loading="lazy" />
            <p className={css.slideDesc}>Alle</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Fairies"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>Fairies</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Fireflies"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>Fireflies</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Firebirds"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>Firebirds</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Forces"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>Forces</p>
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={250}
              height={375}
              alt="Firestorm"
              src="/"
              loading="lazy"
            />
            <p className={css.slideDesc}>Firestorm</p>
          </SwiperSlide>

          <div className={css.navBox}>
            <button
              className={css.navBtn}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IoChevronBack />
            </button>
            <button
              className={css.navBtn}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IoChevronForward />
            </button>
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={css.swiperBottom}
        >
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={60}
              height={90}
              alt="Gründerinnen Anna Ableidinger & Bettina Beneda"
              src="/"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={60}
              height={90}
              alt="Unsere Trainerinnen"
              src="/"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image width={60} height={90} alt="Alle" src="/" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={60}
              height={90}
              alt="Fairies"
              src="/"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={60}
              height={90}
              alt="Fireflies"
              src="/"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={60}
              height={90}
              alt="Firebirds"
              src="/"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image width={60} height={90} alt="Forces" src="/" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide className={css.swiperSlide}>
            <Image
              width={60}
              height={90}
              alt="Firestorm"
              src="/"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default Team;
