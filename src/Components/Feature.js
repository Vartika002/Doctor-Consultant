import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";

const Feature = () => {
  const specialties = [
    "Orthopedic",
    "Urology",
    "Cardiologist",
    "Neurologist",
    "Dentist",
    "Laboratry",
    "MRI Scans",
    "Primary Checkup",
    "Testing",
    "Pediatrics",
    "Orthopedic",
    "Urology",
  ];

  return (
    <div className="swiper-container" style={{ paddingLeft: "20px" }}>
      <h2 className="heading">Find Doctor By Speciality</h2>
      <h6>Online Appointment with verified doctors in all the specialists</h6>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
          },
          tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 3,
          },
        }}
      >
        {specialties.map((specialty, index) => {
          const imageName = `icon${index + 1}`;
          const imageUrl = `${process.env.PUBLIC_URL}/Assests/Img/${imageName}.png`;

          return (
            <SwiperSlide key={imageName}>
              <img
                src={imageUrl}
                alt={`FeatureImage${index + 1}`}
                style={{ maxWidth: "60%", height: "auto" }}
              />
              <div className="caption">{specialty}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Feature;
