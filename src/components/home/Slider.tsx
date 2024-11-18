import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroSlide from "./HeroSlide";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
