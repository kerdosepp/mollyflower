import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import swiper1 from "../assets/images/Swiper1.png";
import swiper2 from "../assets/images/Swiper2.png";
import swiper3 from "../assets/images/Swiper3.png";
import swiper4 from "../assets/images/Swiper4.png";
import swiper5 from "../assets/images/Swiper5.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  swiper1,
  swiper2,
  swiper3,
  swiper4,
  swiper5,
  swiper1,
  swiper2,
  swiper3,
  swiper4,
  swiper5,
  swiper1,
  swiper2,
  swiper3,
  swiper4,
  swiper5,
];

import styles from "./SwiperShowcase.module.css";

export default function ImageSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={16}
      slidesPerView="auto"
      centeredSlides={true}
      initialSlide={2}
      navigation
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className={styles.swiper}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className={styles.swiperImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
