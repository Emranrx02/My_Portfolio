"use client";
import Image from "next/image";
import ContentLayout from "../Layouts/ContentLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import WorkedWith from "../WorkedWith/WorkedWith";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
export default function HeaderSection() {
  return (
    <section id="home" className=" py-[9.1rem] ">
      <ContentLayout>
        <div className="flex relative md:flex-row  flex-col-reverse w-full md:mt-16 justify-center items-center">
          <div className="w-full ">
            <h1 className=" font-bold mb-5 text-2xl md:text-4xl">
              Hello! My name is Emran haque.
            </h1>
            <p className="text-sm">
              I have over four years of experience in marketing and managing
              social media platforms, including Telegram, Twitter, Discord,
              Facebook, and Shopify. With a strong skill set in team leadership,
              target management, graphic design, and video editing, I
              consistently drive results while inspiring teams to achieve their
              goals.
            </p>
            <Link
              href={"https://x.com/Emranhaque9"}
              target="_blank"
              className="bg-[#2B79D3] flex gap-2.5 max-w-fit items-center border border-[#205CA0] text-white px-14 py-4  font-semibold tracking-wider  mt-7 rounded-md"
            >
              <span> {"Let's"} get started</span>
              <MdOutlineKeyboardArrowRight size={27} />
            </Link>
          </div>
          <div className="w-full ">
            <Tilt>
              <div className="rounded-full flex justify-center  md:mb-0 mb-16  md:flex-row-reverse">
                <Image
                  src={"/hero.jpeg"}
                  className="max-w-[18rem] max-h-[18rem] object-cover rounded-full"
                  width={1920}
                  height={1080}
                  alt="emran"
                />
              </div>
            </Tilt>
          </div>
        </div>
        <WorkedWith />
      </ContentLayout>
    </section>
  );
}
