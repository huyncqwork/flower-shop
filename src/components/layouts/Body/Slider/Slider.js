import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            <SwiperSlide className="swiper-slide-header swiper-slide1">
                <div className="container swiper-content text-left">
                    <h2 className="animated fadeGel font-bold text-5xl">Floral pros</h2>
                    <h4 className="animated fadeGel animation-delay">The team of experienced florists</h4>
                    <p className="animated fadeGel animation-delay">Our team of qualified florists can create reasonably priced bouquets of any complexity for your event.</p>
                    <a href="#" className="button animated fadeGelUp animation-delay">Read more</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-header swiper-slide2">
                <div className="container swiper-content">
                    <h4 className="animated fadeGel text-5xl">Hand-crafted</h4>
                    <h2 className="animated fadeGel animation-delay text-8xl">Bouquets</h2>
                    <h4 className="animated fadeGel animation-delay text-5xl">& Flowers</h4>
                    <a href="#" className="button animated fadeGelUp animation-delay">Read more</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-header swiper-slide3">
                <div className="container swiper-content text-left">
                    <h2 className="animated fadeGel font-bold text-5xl max-w-lg whitespace-normal">Best floral arrangements</h2>
                    <h4 className="animated fadeGel animation-delay">Custom-made bouquets & decorations</h4>
                    <p className="animated fadeGel animation-delay">At Florie, we offer very personalized floral arrangements for all kinds of events and occasions.</p>
                    <a href="#" className="button animated fadeGelUp animation-delay">Read more</a>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
