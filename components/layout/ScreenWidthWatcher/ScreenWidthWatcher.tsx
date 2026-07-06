"use client";

import { useEffect } from "react";
import { useWidthStore } from "@/lib/store/widthStore";

export default function ScreenWidthWatcher() {
  const setIsMobile = useWidthStore((state) => state.setIsMobile);

  useEffect(() => {
    const checkMobileSize = () => setIsMobile(window.innerWidth < 768);
    checkMobileSize();

    window.addEventListener("resize", checkMobileSize);
    return () => {
      window.removeEventListener("resize", checkMobileSize);
    };
  }, [setIsMobile]);

  return null;
}
