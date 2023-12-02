import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./Left";
import CarouselRightNavigation from "./Right";
import styles from "./happyClients.module.css";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ data, component }) => {
  return (
    <Swiper
      initialSlide={0}
      modules={{ Navigation }}
      slidesPerView={"auto"}
      spaceBetween={"30px"}
      allowTouchMove
    >
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
      {data?.map((item, ind) => (
        <SwiperSlide className={styles.swiperSlide} key={item?.id}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {component(item, ind)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
