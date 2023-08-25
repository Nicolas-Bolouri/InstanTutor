import React from "react";
import Link from "next/link";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.content}>
      <Link href="/student/center">
        <button type="button" className={styles.button}>
          STUDENT
        </button>
      </Link>

      <Link href="/tutor/center">
        <button type="button" className={styles.button}>
          TUTOR
        </button>
      </Link>
    </div>
  );
};

export default Home;
