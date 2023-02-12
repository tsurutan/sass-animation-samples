import React from "react";
import styles from "WelcomeCard.module.scss";

export const WelcomeCard: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <p>EXPLORE</p>
      <p>YOUR</p>
      <div className={styles.message}>
        <p>PO</p>
        <div>
          <div className={styles.messageSuffix}>
            <p className={styles.firstMessage}>SITION</p>
            <p className={styles.secondMessage}>SSIBILITY</p>
            <p className={styles.thirdMessage}>TENSIAL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
