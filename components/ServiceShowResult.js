import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bathroom1 from "../public/bathroom/bathroom1.jpg";
import bathroom2 from "../public/bathroom/bathroom2.jpg";
import bathroom3 from "../public/bathroom/bathroom3.jpg";
import kitchen1 from "../public/bathroom/kitchen1.jpg";
import kitchen2 from "../public/bathroom/kitchen2.jpg";

import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";

const ServiceShowResult = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={bathroom1} width="640x" height="426px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bathroom2} width="640x" height="426px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bathroom3} width="640x" height="426px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={kitchen1} width="640x" height="426px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={kitchen2} width="640x" height="426px" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceShowResult;
