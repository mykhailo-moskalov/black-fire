"use client";

import { useEffect } from "react";
import { useWidthStore } from "@/lib/store/widthStore";

export default function ScreenWidthWatcher() {
  const setIsMobile = useWidthStore((state) => state.setIsMobile);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [setIsMobile]);

  return null;
}
