import logoImage from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link
          href="/"
          className={classes.logo}
        >
          <Image
            src={logoImage}
            alt="logo"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals" >Meals</NavLink>
            <NavLink href="/community" >Food community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
