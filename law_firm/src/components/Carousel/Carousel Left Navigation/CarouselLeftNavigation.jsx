import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  const [isBegin, setIsBegin] = useState(true); // Initialize isBegin to true.

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning); // Update isBegin when slideChange event occurs.
    });
  }, [swiper]); // Include swiper in the dependencies array.

  return (
    <div
      style={{
        background: "white",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        position: "relative",
        top: "-170px",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      {/* {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />} */}
      <LeftArrow
        onClick={() => swiper.slidePrev()}
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "25px",
          height: "25px",
        }}
      />
    </div>
  );
};

export default CarouselLeftNavigation;
