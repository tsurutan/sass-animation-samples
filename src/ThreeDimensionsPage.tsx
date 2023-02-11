import React from "react";
import styles from "ThreeDimensionsPage.module.scss";
import classNames from "classnames";

export const ThreeDimensionsPage: React.FC = () => (
  <div className={styles.container}>
    <div>
      <div className={styles.messageContainer}>
        <p>P</p>
        <div className={styles.dice}>
          <p className={classNames(styles.side, styles.one)}>assion</p>
          <p className={classNames(styles.side, styles.two)}>ossible</p>
          <p className={classNames(styles.side, styles.three)}>oint</p>
          <p className={classNames(styles.side, styles.four)}>osession</p>
        </div>
      </div>
    </div>
  </div>
);
