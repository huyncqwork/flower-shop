import React, { useEffect } from "react";
import Slider from "./Slider/Slider";
import SliderGallery from "./gallery/index";
import "./Body.css";

function BodyContent() {

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector('.header').classList.add('scroll');
            } else {
                document.querySelector('.header').classList.remove('scroll');
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, []);

return (
<div className="body-content">
    <Slider />
    <section className="card-event">
    <div className="card-event-body">
        <div className="card-event-inner">
        <div className="card-event-img">
            <img src="/images/header/event.png"></img>
        </div>
        <h4 className="mt-3.5 uppercase ">Events</h4>
        <p className="content mt-3.5 text-slate-400 text-center leading-5">
            Flowers can be a great addition and a decoration to an event of
            any scale or occasion.
        </p>
        </div>
        <a className="" href="#">
        Read More
        </a>
    </div>
    <div className="card-event-body background-color-event">
        <div className="card-event-inner">
        <div className="card-event-img">
            <img src="/images/header/delivery.png"></img>
        </div>
        <h4 className="mt-3.5 uppercase ">Delivery</h4>
        <p className="content mt-3.5 text-slate-400 text-center leading-5">
            We provide easy & quick delivery of any bouquet you order at our
            flower shop to your doorstep.
        </p>
        </div>
        <a href="#">Read More</a>
    </div>
    <div className="card-event-body">
        <div className="card-event-inner">
        <div className="card-event-img">
            <img src="/images/header/florist.png"></img>
        </div>
        <h4 className="mt-3.5 uppercase ">Interior florist</h4>
        <p className="content mt-3.5 text-slate-400 text-center leading-5">
            Just try our team of decorators and florists with a task of making
            your indoors look more lovely!
        </p>
        </div>
        <a href="#">Read More</a>
    </div>
    <div className="card-event-body background-color-event">
        <div className="card-event-inner">
        <div className="card-event-img">
            <img src="/images/header/flower.png"></img>
        </div>
        <h4 className="mt-3.5 uppercase ">Exterior florist</h4>
        <p className="content mt-3.5 text-slate-400 text-center leading-5">
            With years of experience we will bring a blooming experience to
            your garden or a house!
        </p>
        </div>
        <a href="#">Read More</a>
    </div>
    </section>
    <section className="about-us section">
    <div className="container max-w-screen-xl m-auto flex items-center flex-col">
        <h2 className="section-title">About Us</h2>
        <div className="header-about-us">
        <p
            className="content m-6 text-slate-400 text-center leading-5"
            style={{ maxWidth: "420px" }}
        >
            We are an online flower shop providing clients all over the world
            with high-quality and affordable teas of our own production.
        </p>
        </div>
        <div className="content-about-us flex">
        <div className="video-about-us relative">
            <img
            src="./images/header/about-thumbnail.jpg"
            alt="description"
            width="569"
            height="488"
            />
            <a href="https://www.youtube.com/watch?v=hhF-oZbI0lk">
            <i class="fa-solid fa-circle-play"></i>
            </a>
        </div>
        <div className="content-about-us-inner">
            <ul className="list-modern">
            <li>
                <div className="background-about-us">
                <div className="arrow-left triangle"></div>
                <div className="list-index-counter"></div>
                <h4>Our Mission</h4>
                <p className="content mt-3.5 text-white leading-5">
                    Our shop’s purpose is to provide our customers with
                    quality floral arrangements.
                </p>
                </div>
            </li>
            <li>
                <div className="background-about-us">
                <div className="arrow-left triangle"></div>
                <div className="list-index-counter"></div>
                <h4>Professional Team</h4>
                <p className="content mt-3.5 text-white leading-5">
                    At Florie, we have gathered a dedicated team of
                    professional florists.
                </p>
                </div>
            </li>
            <li>
                <div className="background-about-us">
                <div className="arrow-left triangle"></div>
                <div className="list-index-counter"></div>
                <h4>Our Product Range</h4>
                <p className="content mt-3.5 text-white leading-5">
                    We provide a wide range of bouquets and floral decorations
                    for our clients.
                </p>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </section>
    <section className="gallery section">
    <div className="container max-w-screen-xl m-auto flex items-center flex-col">
        <h2 className="section-title">Gallery</h2>
    </div>
    <div className="swiper-container">
        <SliderGallery />
    </div>
    </section>
    <section className="parallax section">
        <div className="container max-w-screen-xl m-auto flex items-center flex-col">
            <div className="parallax-inner">
                <img src="/images/parallax/parallax.jpg" alt="parallax" />
            </div>
            <div className="parallax-content"></div>
        </div>
    </section>
</div>
);
}

export default BodyContent;
