"use client";

import { ReactNode, useRef } from "react";
import { useGesture } from "@use-gesture/react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useGesture(
    {
      onDrag: ({ down, movement: [mx] }) => {
        if (!isMobile) return;

        if (!down && mx < -100) setIsOpen(true); // swipe left to open
        if (!down && mx > 100) setIsOpen(false); // swipe right to close
      },
    },
    {
      target: containerRef,
    },
  );

  return (
    <>
      <div ref={containerRef}>
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
