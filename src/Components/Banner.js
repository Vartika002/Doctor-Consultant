import React from "react";
import baneerOneImg from "../Assests/Banner1.png";
import baneerTwoImg from "../Assests/Banner2.png";
import baneerThreeImg from "../Assests/Banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView="auto"
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: false }}
      breakpoints={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mdtablet: {
          breakpoint: { max: 991, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 3,
        },
        smmobile: {
          breakpoint: { max: 640, min: 0 },
          items: 2,
        },
        xsmobile: {
          breakpoint: { max: 440, min: 0 },
          items: 1,
        },
      }}
    >
      <SwiperSlide>
        <img src={baneerOneImg} alt="Image1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={baneerTwoImg} alt="Image2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={baneerThreeImg} alt="Image3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
