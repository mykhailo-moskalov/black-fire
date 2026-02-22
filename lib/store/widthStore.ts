import { create } from "zustand";

type WidthStore = {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
};

export const useWidthStore = create<WidthStore>()((set) => ({
  isMobile: true,
  setIsMobile: (value: boolean) => set({ isMobile: value }),
}));
