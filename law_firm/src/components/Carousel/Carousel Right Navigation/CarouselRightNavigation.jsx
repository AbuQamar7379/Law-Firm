import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
// import styles from "../carousel.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        background: "white",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        position: "relative",
        top: "-220px",
        right: "-350px",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      {/* {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />} */}
      <RightArrow
        onClick={() => swiper.slideNext()}
        style={{
          position: "absolute",
          top: "25%",
          right: "25%",
          width: "25px",
          height: "25px",
        }}
      />
    </div>
  );
};

export default CarouselRightNavigation;
