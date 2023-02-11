import React, { useState } from "react";
import styles from "CardPage.module.scss";
import classNames from "classnames";

export const CardPage: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={classNames(styles.container)}>
      <div
        className={classNames(styles.innerContainer, {
          [styles.flipped]: isClicked,
        })}
      >
        <div className={styles.cardFront}>
          <button className={styles.button} onClick={() => setIsClicked(true)}>
            Flip
          </button>
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            autoPlay
            muted
            className={styles.video}
          />
        </div>
        <div className={styles.cardBack}>
          <p>Back</p>
          <button className={styles.button} onClick={() => setIsClicked(false)}>
            Flip
          </button>
        </div>
      </div>
    </div>
  );
};
