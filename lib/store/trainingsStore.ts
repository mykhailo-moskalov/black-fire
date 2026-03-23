import { create } from "zustand";
import type { Swiper as SwiperType } from "swiper";

type TrainingsStore = {
  swiper: SwiperType | null;
  setSwiper: (swiper: SwiperType) => void;
};

export const useTrainingsStore = create<TrainingsStore>()((set) => ({
  swiper: null,
  setSwiper: (swiper) => set({ swiper }),
}));
