import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>InstanTutor</h2>
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
