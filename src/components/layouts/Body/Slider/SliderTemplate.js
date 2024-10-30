import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Navigation } from "swiper/modules";

const SliderTemplate = (autoplay = {}, numberSlides = 1, isLoop = true) => {

    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
                ...autoplay
            }}
            loop={isLoop}
            slidesPerView={numberSlides}
            navigation
            pagination={{
                clickable: true,
            }}
            className="mySwiperTemplate"
        >
        </Swiper>
    )
}

export default SliderTemplate;
