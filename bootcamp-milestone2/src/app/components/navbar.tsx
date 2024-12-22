import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
        <Link id={style["main-title"]} href="/">James&apos; Personal Website</Link>
        <nav className={style["nav-list"]}>
            <Link href="/" >Home</Link>
            {/* <Link href="/blogs">Blogs</Link> */}
            <Link href="/resume" >Resume</Link>
            <Link href="/about" >Contact Me</Link>
      </nav>
    </header>
  );
}
