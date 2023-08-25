"use client";

import React from "react";
import styles from "./JoinNow.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const JoinNow = ({ connection }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const subject = searchParams.get("subject");
  const role = pathname.startsWith("/student") ? "student" : "tutor";

  const handleJoin = () => {
    router.push(`/chatroom/${subject}?role=${role}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.message}>
        Click JOIN NOW when you are ready to be connected to a {connection}.
      </h2>
      <div className={styles.buttonContainer}>
        <button onClick={handleJoin} className={styles.button}>
          JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default JoinNow;
