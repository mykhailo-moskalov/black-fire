"use client";

import { IoArrowBack, IoMenu } from "react-icons/io5";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import { useSidebarStore } from "@/lib/store/sidebarStore";
import { useWidthStore } from "@/lib/store/widthStore";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const isMobile = useWidthStore((state) => state.isMobile);
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const isLegal = pathname === "/legal";

  const [scrolled, setScrolled] = useState(isLegal);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${Math.ceil(headerRef.current.offsetHeight)}px`,
        );
      }
    };

    if (isLegal) return;

    const handleScroll = () => {
      console.log("scrollY", window.scrollY);
      setScrolled(window.scrollY >= 300);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLegal]);

  return (
    <header
      id="header"
      className={`${css.header} ${scrolled ? css.scrolled : ""}`}
      ref={headerRef}
    >
      <Container className={css.headerContainer}>
        <Logo width={40} height={(95 / 3) * 2} />

        {isMobile ? (
          isLegal ? (
            <button onClick={router.back} className={css.btn}>
              <IoArrowBack />
              Zurück zur Startseite
            </button>
          ) : (
            <button
              aria-label="Menü öffnen"
              className={css.burger}
              onClick={() => setIsOpen(true)}
            >
              <IoMenu />
            </button>
          )
        ) : (
          <Navigation className={css.nav} />
        )}
      </Container>
    </header>
  );
};

export default Header;
