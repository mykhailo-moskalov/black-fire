import { ReactNode } from "react";
import css from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`${css.section} ${className}`}>{children}</section>
  );
}
