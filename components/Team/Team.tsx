"use client";

import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Team.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { slides } from "@/lib/constants/slides";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css/bundle";

import Lightbox from "yet-another-react-lightbox";
import { Captions, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Team = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const swiperRef = useRef<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="Gründerinnen Bettina Beneda & Anna Ableidinger"
              src="/team/founders.jpg"
              loading="lazy"
            />
            <p className={css.slideDesc}>
              Gründerinnen Bettina Beneda &amp; Anna Ableidinger
            </p>
          </SwiperSlide>

          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="Fairies"
              src="/team/fairies.jpg"
              loading="lazy"
            />
            <p className={css.slideDesc}>Fairies</p>
          </SwiperSlide>
          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="Fireflies"
              src="/team/fireflies.jpg"
              loading="lazy"
            />
            <p className={css.slideDesc}>Fireflies</p>
          </SwiperSlide>
          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="Firebirds"
              src="/team/firebirds.jpg"
              loading="lazy"
            />
            <p className={css.slideDesc}>Firebirds</p>
          </SwiperSlide>

          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="Meisterschaft 'All-Level'"
              src="/team/all-level.jpg"
              loading="lazy"
            />
            <p className={css.slideDesc}>Meisterschaft &quot;All-Level&quot;</p>
          </SwiperSlide>
          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="United Cheer Cup '25"
              src="/team/united-cheer-cup.jpg"
              loading="lazy"
            />
            <p className={css.slideDesc}>United Cheer Cup &apos;25</p>
          </SwiperSlide>

          <SwiperSlide
            className={css.swiperSlide}
            onClick={() => {
              setLightboxIndex(swiperRef.current?.realIndex ?? 0);
              setLightboxOpen(true);
            }}
          >
            <Image
              width={335}
              height={502.5}
              alt="Die schreiende Anna"
              src="/team/screaming-anna.jpg"
              loading="lazy"
            />
          </SwiperSlide>

          <div className={css.navBox}>
            <button
              aria-label="Vorheriges Foto"
              className={css.navBtn}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IoChevronBack />
            </button>
            <button
              aria-label="Nächstes Foto"
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
          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={90}
              alt="Gründerinnen Bettina Beneda & Anna Ableidinger"
              src="/team/min/founders.jpg"
              loading="lazy"
            />
          </SwiperSlide>

          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={90}
              alt="Fairies"
              src="/team/min/fairies.jpg"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={40}
              alt="Fireflies"
              src="/team/min/fireflies.jpg"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={40}
              alt="Firebirds"
              src="/team/min/firebirds.jpg"
              loading="lazy"
            />
          </SwiperSlide>

          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={90}
              alt="Meisterschaft 'All-Level'"
              src="/team/min/all-level.jpg"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={40}
              alt="United Cheer Cup '25"
              src="/team/min/united-cheer-cup.jpg"
              loading="lazy"
            />
          </SwiperSlide>

          <SwiperSlide
            className={css.swiperSlide}
            onClick={setLightboxIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <Image
              width={60}
              height={40}
              alt="Die schreiende Anna"
              src="/team/min/screaming-anna.jpg"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </Container>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Captions, Zoom]}
        on={{
          view: ({ index }) => swiperRef.current?.slideToLoop(index),
        }}
      />
    </Section>
  );
};

export default Team;
