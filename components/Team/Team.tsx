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
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={300}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/hero/hero-min.webp"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={60}
              height={20}
              alt=""
              src="/sponsors/LOGO-GCClean.png"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default Team;
