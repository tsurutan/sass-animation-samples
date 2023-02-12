import React from "react";
import styles from "TutorialCard.module.scss";

export const TutorialCard: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.ball} />
    <div className={styles.hand} />
  </div>
);
