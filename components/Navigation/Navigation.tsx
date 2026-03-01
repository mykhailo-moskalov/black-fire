"use client";

import Link from "next/link";
import css from "./Navigation.module.css";

import * as Accordion from "@radix-ui/react-accordion";

import { useWidthStore } from "@/lib/store/widthStore";
import { IoChevronDown } from "react-icons/io5";

interface NavigationProps {
  className?: string;
  chevronClassName?: string;
  onLinkClick?: () => void;
}

const Navigation = ({
  className,
  chevronClassName,
  onLinkClick,
}: NavigationProps) => {
  const isMobile = useWidthStore((state) => state.isMobile);

  return (
    <nav className={`${css.nav} ${className}`} aria-label="Main Navigation">
      <ul className={css.navigation}>
        {/* Startseite */}
        <li className={css.navigationItem}>
          <Link
            onClick={onLinkClick}
            className={css.navigationLink}
            href="#hero"
          >
            {isMobile ? (
              <h4 className={css.navigationTitle}>Startseite</h4>
            ) : (
              <h5 className={css.navigationTitle}>Startseite</h5>
            )}
          </Link>
        </li>
        {/* Über uns */}
        <li className={css.navigationItem}>
          <Link
            onClick={onLinkClick}
            className={css.navigationLink}
            href="#about"
          >
            {isMobile ? (
              <h4 className={css.navigationTitle}>Über uns</h4>
            ) : (
              <h5 className={css.navigationTitle}>Über uns</h5>
            )}
          </Link>
        </li>
        {/* Unsere Teams */}
        <li className={css.navigationItem}>
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="teams">
              <Accordion.Trigger className={css.accordionTrigger}>
                {isMobile ? (
                  <h4 className={css.navigationTitle}>
                    Unsere Teams{" "}
                    <IoChevronDown
                      className={`${css.chevronBtn} ${chevronClassName}`}
                    />
                  </h4>
                ) : (
                  <h5 className={css.navigationTitle}>
                    Unsere Teams{" "}
                    <IoChevronDown
                      className={`${css.chevronBtn} ${chevronClassName}`}
                    />
                  </h5>
                )}
              </Accordion.Trigger>

              <Accordion.Content className={css.accordionContent}>
                <ul className={css.subNavigation}>
                  {/* Mini Flames */}
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#miniFlames"
                      onClick={onLinkClick}
                      className={css.subLink}
                    >
                      <h6>Mini Flames</h6>
                    </Link>
                  </li>
                  {/* Fairies */}
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#fairies"
                      onClick={onLinkClick}
                      className={css.subLink}
                    >
                      <h6>Fairies</h6>
                    </Link>
                  </li>
                  {/* Fireflies */}
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#fireflies"
                      onClick={onLinkClick}
                      className={css.subLink}
                    >
                      <h6>Fireflies</h6>
                    </Link>
                  </li>
                  {/* Firebirds */}
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#firebirds"
                      onClick={onLinkClick}
                      className={css.subLink}
                    >
                      <h6>Firebirds</h6>
                    </Link>
                  </li>
                  {/* Forces */}
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#forces"
                      onClick={onLinkClick}
                      className={css.subLink}
                    >
                      <h6>Forces</h6>
                    </Link>
                  </li>
                  {/* Firestorm */}
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#firestorm"
                      onClick={onLinkClick}
                      className={css.subLink}
                    >
                      <h6>Firestorm</h6>
                    </Link>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
