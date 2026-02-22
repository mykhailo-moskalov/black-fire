"use client";

import Link from "next/link";
import css from "./Navigation.module.css";

import * as Accordion from "@radix-ui/react-accordion";

import { useWidthStore } from "@/lib/store/widthStore";
import { IoChevronDown } from "react-icons/io5";

const Navigation = () => {
  const isMobile = useWidthStore((state) => state.isMobile);

  return (
    <nav className={css.nav} aria-label="Main Navigation">
      <ul className={css.navigation}>
        {/* Startseite */}
        <li className={css.navigationItem}>
          <Link className={css.navigationLink} href="#hero">
            {isMobile ? (
              <h4 className={css.navigationTitle}>Startseite</h4>
            ) : (
              <h5 className={css.navigationTitle}>Startseite</h5>
            )}
          </Link>
        </li>
        {/* Über uns */}
        <li className={css.navigationItem}>
          <Link className={css.navigationLink} href="#about">
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
                    Unsere Teams <IoChevronDown className={css.chevronBtn} />
                  </h4>
                ) : (
                  <h5 className={css.navigationTitle}>
                    Unsere Teams <IoChevronDown className={css.chevronBtn} />
                  </h5>
                )}
              </Accordion.Trigger>

              <Accordion.Content className={css.accordionContent}>
                <ul className={css.subNavigation}>
                  <li className={css.subNavigationItem}>
                    <Link href="#team-kids" className={css.subLink}>
                      <h6>Kids Team</h6>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link href="#team-junior" className={css.subLink}>
                      <h6>Junior Team</h6>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link href="#team-senior" className={css.subLink}>
                      <h6>Senior Team</h6>
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
