"use client";

import classes from "./nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const path = usePathname();

  const customLink = classes.link;
  const activeCustomLink = ` ${classes.link} + ${classes.active}`;

  return (
    <li>
      <Link
        href={href}
        className={path === href ? activeCustomLink : customLink}
      >
        {children}
      </Link>
    </li>
  );
}
