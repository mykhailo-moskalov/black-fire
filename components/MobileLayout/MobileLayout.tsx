"use client";

import { ReactNode, useEffect, useRef } from "react";
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

  const sidebarRef = useRef<HTMLDivElement>(null); // pass this to your Sidebar

  useEffect(() => {
    let startX = 0;
    let currentX = 0;
    const THRESHOLD = 100;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile) return;
      currentX = e.touches[0].clientX;
      const diff = currentX - startX;

      if (sidebarRef.current) {
        // sidebar opens from right, so clamp between 0 and sidebar width
        const offset = Math.max(-300, Math.min(0, diff));
        sidebarRef.current.style.transform = `translateX(${offset}px)`;
        sidebarRef.current.style.transition = "none"; // disable transition while dragging
      }
    };

    const handleTouchEnd = () => {
      if (!isMobile) return;
      const diff = currentX - startX;

      if (sidebarRef.current) {
        sidebarRef.current.style.transition = "transform 0.3s ease"; // re-enable transition on release
        if (diff < -THRESHOLD) {
          setIsOpen(true);
          sidebarRef.current.style.transform = "translateX(0)";
        } else {
          setIsOpen(false);
          sidebarRef.current.style.transform = "translateX(100%)";
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, setIsOpen]);

  return (
    <>
      <div>
        <ScreenWidthWatcher />
        <Header />
        <Sidebar ref={sidebarRef} />
        {children}
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
