import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "../Carousel Left Navigation/CarouselLeftNavigation";
import CarouselRightNavigation from "../Carousel Right Navigation/CarouselRightNavigation";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";

const Carousel = ({ data, component }) => {
  return (
    <>
      <div className="sucessWrapper">
        <Swiper
          initialSlide={0}
          modules={{ Navigation }}
          slidesPerView={"auto"}
          spaceBetween={10}
          allowTouchMove
        >
          {/* <CarouselLeftNavigation />
          <CarouselRightNavigation /> */}
          {data?.map((item, ind) => (
            <SwiperSlide key={item + ind}>{component(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
