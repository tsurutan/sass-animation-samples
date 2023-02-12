import React, { useState } from "react";
import styles from "SwiperPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { WelcomeCard } from "WelcomeCard";
import { TutorialCard } from "TutorialCard";

export const SwiperPage: React.FC = () => {
  const [borderStyle, setBorderStyle] = useState<React.CSSProperties>({
    width: "100%",
    transition: "0ms",
  });
  const [toggleOpacity, setToggleOpacity] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <p>EX</p>
            <div className={styles.border} style={borderStyle} />
            <div className={styles.borderHead} />
            <p>PO</p>
          </div>
          <p className={styles.page}>1-45</p>
          <div
            className={styles.toggle}
            style={{
              opacity: toggleOpacity,
            }}
          >
            <p className={styles.toggleSelected}>ALL</p>
            <p>FAVORITES</p>
          </div>
        </div>
        <Swiper
          className={styles.swiperContainer}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex !== 0) {
              setBorderStyle({
                transition: "500ms",
                width: 0,
                opacity: 0,
              });
              setToggleOpacity(1);
            } else {
              setBorderStyle({
                transition: "500ms",
                width: "100%",
                opacity: 1,
              });
              setToggleOpacity(0);
            }
          }}
          onSliderMove={(swiper, event) => {
            if (swiper.activeIndex === 0) {
              if (swiper.touches.diff > 0) return;
              const rate = 1 - (-1 * swiper.touches.diff) / swiper.width;
              setBorderStyle({
                transition: "0ms",
                width: `${rate * 100}%`,
                opacity: rate,
              });
            }
            if (swiper.activeIndex === 1) {
              if (swiper.touches.diff < 0) return;
              const rate = 1 - swiper.touches.diff / swiper.width;
              setToggleOpacity(rate);
            }
          }}
          onTouchEnd={(swiper) => {
            if (swiper.activeIndex !== 0) {
              setBorderStyle((style) => ({
                ...style,
                opacity: 0,
                width: 0,
              }));
              setToggleOpacity(1);
            } else {
              setBorderStyle((style) => ({
                ...style,
                opacity: 1,
                width: "100%",
              }));
              setToggleOpacity(0);
            }
          }}
        >
          <SwiperSlide className={styles.swiper}>
            <WelcomeCard />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper}>
            <TutorialCard />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper}>
            <div className={styles.card}>
              <p>Slide 3</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
