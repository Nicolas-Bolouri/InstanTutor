import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutUsSection}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
      </header>

      <article className={styles.article}>
        <h2 className={styles.subTitle}>What is InstanTutor?</h2>
        <p className={styles.text}>
          InstanTutor is a fast-paced tutoring platform that INSTANTLY connects
          you with a tutor within seconds! Our company connects you with an
          expert in the subject you choose for 'in-and-out' help. It is designed
          for quick, specific questions in any STEM subject targeted for
          high-school and university students. At any hour, any minute of the
          day, you can ask difficult questions to make better decisions at and
          away from the screen.
        </p>

        <h2 className={styles.subTitle}>Why InstanTutor?</h2>
        <p className={styles.text}>
          Have you ever been up late studying for an exam the night before, and
          you are struggling to grasp a concept or simply struggling to solve a
          particular problem? InstanTutor provides the solution to that problem!
          Here, we connect you instantaneously to an expert tutor in the STEM
          subject you are looking for. Unlike video and chat platforms, these
          connections are personalized towards YOUR needs and works around YOUR
          schedule, to have an instant tutor anytime, anywhere.
        </p>

        <h2 className={styles.subTitle}>Our Goal</h2>
        <p className={styles.text}>
          Our Goal is to provide our students with immediate access to a tutor.
          The connection is catered to YOU, where the tutor will answer the
          specific problem YOU need!
        </p>
      </article>
    </section>
  );
};

export default About;
