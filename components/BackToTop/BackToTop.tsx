"use client";

import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import { smoothScrollTo } from "@/lib/utils/smoothScroll";
import css from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`${css.btn} ${visible ? css.visible : ""}`}
      onClick={() => smoothScrollTo("hero")}
    >
      <IoChevronUp />
    </button>
  );
}
