"use client";

import { ReactNode, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useWidthStore } from "@/lib/store/widthStore";
import { useSidebarStore } from "@/lib/store/sidebarStore";
import ScreenWidthWatcher from "../ScreenWidthWatcher/ScreenWidthWatcher";
import { Toaster } from "react-hot-toast";

export default function MobileLayout({ children }: { children: ReactNode }) {
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const isMobile = useWidthStore((state) => state.isMobile);

  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isMobile) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (diff > 100) setIsOpen(true); // swipe left
      if (diff < -100) setIsOpen(false); // swipe right
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, setIsOpen]);

  return (
    <>
      <div>
        <ScreenWidthWatcher />
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
