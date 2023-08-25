"use client";

import React from "react";
import styles from "./Subjects.module.css";
import { usePathname, useRouter } from "next/navigation";

const Subjects = ({ description }) => {
  const router = useRouter();
  const pathname = usePathname();
  const basePath = pathname.startsWith("/student")
    ? "/student/waitroom"
    : "/tutor/waitroom";

  const handleAlgebra = () => {
    router.push(`${basePath}?subject=algebra`);
  };

  const handleChemistry = () => {
    router.push(`${basePath}?subject=chemistry`);
  };

  const handleBiology = () => {
    router.push(`${basePath}?subject=biology`);
  };

  const handleMechanics = () => {
    router.push(`${basePath}?subject=mechanics`);
  };

  const handleCalculus1 = () => {
    router.push(`${basePath}?subject=calculus1`);
  };

  const handleCalculus2 = () => {
    router.push(`${basePath}?subject=calculus2`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.message}>{description}</h2>
      <section className={styles.courseSelection}>
        <div className={styles.courseRow}>
          <button
            onClick={handleAlgebra}
            className={styles.button}
            id="algebraS"
          >
            Algebra
          </button>
          <button
            onClick={handleChemistry}
            className={styles.button}
            id="chemistryS"
          >
            Chemistry
          </button>
          <button
            onClick={handleBiology}
            className={styles.button}
            id="biologyS"
          >
            Biology
          </button>
        </div>
        <div className={styles.courseRow}>
          <button
            onClick={handleMechanics}
            className={styles.button}
            id="mechanicsS"
          >
            Mechanics
          </button>
          <button
            onClick={handleCalculus1}
            className={styles.button}
            id="calculus_IS"
          >
            Calculus I
          </button>
          <button
            onClick={handleCalculus2}
            className={styles.button}
            id="calculus_IIS"
          >
            Calculus II
          </button>
        </div>
      </section>
    </div>
  );
};

export default Subjects;
