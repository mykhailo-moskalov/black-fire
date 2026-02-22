import { create } from "zustand";
import { persist } from "zustand/middleware";

type WidthStore = {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
};

export const useWidthStore = create<WidthStore>()(
  persist(
    (set) => ({
      isMobile: true,
      setIsMobile: (value: boolean) => set({ isMobile: value }),
    }),
    {
      name: "width-storage",
      partialize: (state) => ({ isMobile: state.isMobile }),
    },
  ),
);
