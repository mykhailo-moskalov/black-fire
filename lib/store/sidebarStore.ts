import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarStore = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      isOpen: false,
      setIsOpen: (value: boolean) => set({ isOpen: value }),
    }),
    {
      name: "sidebar-storage",
      partialize: (state) => ({ isOpen: state.isOpen }),
    },
  ),
);
