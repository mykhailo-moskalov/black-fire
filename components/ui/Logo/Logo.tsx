import Link from "next/link";
import css from "./Logo.module.css";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo = ({ width, height }: LogoProps) => (
  <Link href="/" className={css.logo}>
    <Image
      alt="Black Fire Logo"
      src="/logo-transparent.png"
      width={width}
      height={height}
      className={css.img}
    />
  </Link>
);

export default Logo;
