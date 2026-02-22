"use client";

import css from "./Sidebar.module.css";

import Navigation from "../Navigation/Navigation";

import { forwardRef, useEffect } from "react";
import { useWidthStore } from "@/lib/store/widthStore";
import { useSidebarStore } from "@/lib/store/sidebarStore";
import { IoClose, IoGlobe } from "react-icons/io5";
import toast from "react-hot-toast";
import Container from "../Container/Container";

const Sidebar = forwardRef<HTMLDivElement, object>((_, ref) => {
  const isMobile = useWidthStore((state) => state.isMobile);
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  if (!isMobile) return null;

  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.show : css.hide}`}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div
        ref={ref}
        className={css.sidebar}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <Container className={css.sidebarContainer}>
          <button className={css.btnClose} onClick={() => setIsOpen(false)}>
            <IoClose />
          </button>
          <Navigation />
          <button
            className={css.btnLang}
            onClick={() =>
              toast.success("Language has been successfully changed!")
            }
          >
            <IoGlobe />
          </button>
        </Container>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
