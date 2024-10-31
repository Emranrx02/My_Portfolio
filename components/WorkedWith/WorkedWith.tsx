"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WorkedWith() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="my-20">
      <h2 className="my-10 font-medium text-2xl">Worked with</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="max-w-[5rem] sm:max-w-[7rem]">
            <Image src={`/exp-4.jpg`} width={1920} height={1080} alt="" />
          </div>
          <div className="max-w-[5rem] sm:max-w-[7rem]">
            <Image src={`/exp-10.jpeg`} width={1920} height={1080} alt="" />
          </div>
          <div className="max-w-[5rem] sm:max-w-[7rem]">
            <Image src={`/exp-11.jpeg`} width={1920} height={1080} alt="" />
          </div>
          <div className="max-w-[5rem] sm:max-w-[7rem]">
            <Image src={`/exp-12.jpg`} width={1920} height={1080} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
