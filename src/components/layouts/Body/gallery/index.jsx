import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const SliderGallery = () => {
    const settings = {
        dots: false, // Enable dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, // Scroll one slide at a time for smoother navigation
        arrows: true
        // autoplay: true, // Enable autoplay
        // autoplaySpeed: 3000, // Set autoplay speed
    };

    return (
        <Slider {...settings} className="mySwiper">
            {/* Slide 1 */}
            <div className="swiper-gallery-slide1 carousel-item">
                <figure>
                    <img src="images/gallery/flower01.jpg" alt="Slide 1" />
                </figure>
                <div className="slider-gallery-box">
                    <h4 className="animated fadeGel animation-delay">Blush Roses</h4>
                    <p className="content mt-3.5 text-white leading-5">Our shop offers a wide range of flowers from all over the world.</p>
                </div>
            </div>
            {/* Slide 2 */}
            <div className="swiper-gallery-slide2 carousel-item">
                <figure>
                    <img src="images/gallery/flower02.jpg" alt="Slide 2" />
                </figure>
                <div className="slider-gallery-box">
                    <h4 className="animated fadeGel animation-delay">Floribunda Roses</h4>
                    <p className="content mt-3.5 text-white leading-5">Our shop offers a wide range of flowers from all over the world.</p>
                </div>
            </div>
            {/* Slide 3 */}
            <div className="swiper-gallery-slide3 carousel-item">
                <figure>
                    <img src="images/gallery/flower03.jpg" alt="Slide 3" />
                </figure>
                <div className="slider-gallery-box">
                    <h4 className="animated fadeGel animation-delay">The team of experienced florists</h4>
                    <p className="content mt-3.5 text-white leading-5">Our team of qualified florists can create reasonably priced bouquets of any complexity for your event.</p>
                </div>
            </div>
            {/* Slide 4 */}
            <div className="swiper-gallery-slide4 carousel-item">
                <figure>
                    <img src="images/gallery/flower04.jpg" alt="Slide 4" />
                </figure>
                <div className="slider-gallery-box">
                    <h4 className="animated fadeGel animation-delay">The team of experienced florists</h4>
                    <p className="content mt-3.5 text-white leading-5">Our team of qualified florists can create reasonably priced bouquets of any complexity for your event.</p>
                </div>
            </div>
            {/* Slide 5 */}
            <div className="swiper-gallery-slide5 carousel-item">
                <figure>
                    <img src="images/gallery/flower05.jpg" alt="Slide 5" />
                </figure>
                <div className="slider-gallery-box">
                    <h4 className="animated fadeGel animation-delay">The team of experienced florists</h4>
                    <p className="content mt-3.5 text-white leading-5">Our team of qualified florists can create reasonably priced bouquets of any complexity for your event.</p>
                </div>
            </div>
            {/* Slide 6 */}
            <div className="swiper-gallery-slide6 carousel-item">
                <figure>
                    <img src="images/gallery/flower06.jpg" alt="Slide 6" />
                </figure>
                <div className="slider-gallery-box">
                    <h4 className="animated fadeGel animation-delay">The team of experienced florists</h4>
                    <p className="content mt-3.5 text-white leading-5">Our team of qualified florists can create reasonably priced bouquets of any complexity for your event.</p>
                </div>
            </div>
        </Slider>
    );
};

export default SliderGallery;
