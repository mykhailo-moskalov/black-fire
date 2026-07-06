"use client";

import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
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
import { useWidthStore } from "@/lib/store/widthStore";

const Team = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const swiperRef = useRef<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const isMobile = useWidthStore((state) => state.isMobile);
  const isTablet = useWidthStore((state) => state.isTablet);

  const imgWidth = isMobile || isTablet ? 335 : 468;
  const imgHeight = isMobile || isTablet ? 502.5 : 702;
  const imgWidthHorizontal = imgHeight * 1.5;

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
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.src}
              className={css.swiperSlide}
              onClick={() => {
                setLightboxIndex(swiperRef.current?.realIndex ?? 0);
                setLightboxOpen(true);
              }}
            >
              <Image
                width={slide.horizontal ? imgWidthHorizontal : imgWidth}
                height={imgHeight}
                alt={slide.description ?? ""}
                src={slide.thumbnail}
                loading="lazy"
              />
              {slide.description && (
                <p className={css.slideDesc}>{slide.description}</p>
              )}
            </SwiperSlide>
          ))}
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
          {slides.map((slide) => (
            <SwiperSlide key={slide.mini} className={css.swiperSlide}>
              <Image
                width={60}
                height={slide.horizontal ? 40 : 90}
                alt={slide.description ?? ""}
                src={slide.mini}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides.map((s) => ({ src: s.src, description: s.description }))}
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
