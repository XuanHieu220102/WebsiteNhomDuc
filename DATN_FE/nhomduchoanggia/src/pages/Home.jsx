import React, { useEffect } from 'react'
import { Header } from '../layouts/Header'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Home.css'
import { Footer } from '../layouts/Footer';
import { Section } from '../layouts/Section';
import FixedIcons from '../components/FixedIcons';

const images = [
    {
        img: 'src\\assets\\1.png',
    },
    {
        img: 'src\\assets\\2.png',
    },
];
export const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };
    const imageSlides = images.map((path, index) => (
        <div className='slider-images' key={index}>
            <img className="slider-image" src={path.img} alt={`Slide ${index + 1}`} />
        </div>
    ));
    return (
        <>
            <Header />
            <Slider {...settings}>
                {imageSlides}
            </Slider>
            <Section/>
            <FixedIcons/>
            <Footer />
        </>
    );
};