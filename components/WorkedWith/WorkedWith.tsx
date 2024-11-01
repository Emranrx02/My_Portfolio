"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkedWithBox from "./WorkedWithBox";
import CoinEx from "../Icons/CoinEx";
import KajLab from "../Icons/KajLab";
import KTune from "../Icons/KTune";
import LBank from "../Icons/Lbank";
import Viabtc from "../Icons/Viabtc";
import Ajax from "../Icons/Ajax";
import AjaxWithColor from "../Icons/Ajaxwithcolor";
import CoinExWithColor from "../Icons/CoinExWithColor";
import KTuneWithColor from "../Icons/KTuneWithColor";
import LBankWithColor from "../Icons/LBankWithColor";
import ViabtcWithColor from "../Icons/ViabtcWithColor";
import KajLabWithColor from "../Icons/KajLabWithColor";

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
    <div className="mt-52 my-20">
      <h2 className="my-10 font-medium text-2xl">Worked with</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <WorkedWithBox Icon={<CoinExWithColor className="w-[7.5rem]" />} />
          <WorkedWithBox Icon={<KajLabWithColor className="w-[7.5rem]" />} />
          <WorkedWithBox Icon={<KTuneWithColor className="w-[7.5rem]" />} />
          <WorkedWithBox Icon={<LBankWithColor className="w-[7.5rem]" />} />
          <WorkedWithBox Icon={<ViabtcWithColor className="w-[7.5rem]" />} />
          <WorkedWithBox Icon={<AjaxWithColor className="w-[7.5rem]" />} />
        </Slider>
      </div>
    </div>
  );
}
