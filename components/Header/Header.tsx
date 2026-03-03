"use client";

import { IoMenu } from "react-icons/io5";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import { useSidebarStore } from "@/lib/store/sidebarStore";
import { useWidthStore } from "@/lib/store/widthStore";
import { useEffect, useRef } from "react";

const Header = () => {
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const isMobile = useWidthStore((state) => state.isMobile);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${Math.ceil(headerRef.current.offsetHeight)}px`,
        );
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <header id="header" className={css.header} ref={headerRef}>
      <Container className={css.headerContainer}>
        <Logo width={40} height={(95 / 3) * 2} />

        {isMobile ? (
          <button className={css.burger} onClick={() => setIsOpen(true)}>
            <IoMenu />
          </button>
        ) : (
          <Navigation className={css.nav} />
        )}
      </Container>
    </header>
  );
};

export default Header;
