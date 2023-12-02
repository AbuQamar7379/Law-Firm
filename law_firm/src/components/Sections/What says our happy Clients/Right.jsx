import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import styles from "./happyClients.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () => {
        setIsEnd(swiper.isEnd);
      };

      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {/* {swiper && !isEnd && <RightArrow onClick={() => swiper.slideNext()} />} */}
      <RightArrow
        onClick={() => swiper.slideNext()}
        className={styles.rightArrow}
      />
    </div>
  );
};

export default CarouselRightNavigation;
