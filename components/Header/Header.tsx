import Image from "next/image";
import ContentLayout from "../Layouts/ContentLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import WorkedWith from "../WorkedWith/WorkedWith";

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
            <button className="bg-[#2B79D3] flex gap-2.5 items-center border border-[#205CA0] text-white px-14 py-4  font-semibold tracking-wider  mt-7 rounded-md">
              <span> {"Let's"} get started</span>
              <MdOutlineKeyboardArrowRight size={27} />
            </button>
          </div>
          <div className="w-full ">
            <div className="rounded-full flex justify-center  md:mb-0 mb-16  md:flex-row-reverse">
              <Image
                src={"/hero.jpeg"}
                className="max-w-[22rem] max-h-[22rem] object-cover rounded-full"
                width={1920}
                height={1080}
                alt="emran"
              />
            </div>
          </div>
        </div>
        <WorkedWith />
      </ContentLayout>
    </section>
  );
}
