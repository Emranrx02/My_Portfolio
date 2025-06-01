"use client";
import Image from "next/image";
import ContentLayout from "../Layouts/ContentLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import WorkedWith from "../WorkedWith/WorkedWith";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HeaderSection() {
  return (
    <section id="home" className=" py-[9.1rem] ">
      <ContentLayout>
        <div className="flex relative md:flex-row  flex-col-reverse w-full md:mt-16 justify-center items-center">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full "
          >
            <h1 className=" font-bold mb-5 text-2xl md:text-4xl">
              Hello! My name is Emran haque.
            </h1>
            <p>
  {"I'm a blockchain community manager and digital marketing specialist with 5+ years of experience in Web3, crypto, and fintech. I build and grow active communities on Telegram, Discord, and Twitter through AMAs, KOL partnerships, and organic engagement. I've contributed to projects like CoinEx and Oracle Free Dollar, helping boost brand presence and user trust. My mission is to make blockchain more accessible, supportive, and engaging for everyone."}
</p>
            <Link
              href={"https://t.me/emranrx"}
              target="_blank"
              className="bg-[#2B79D3] flex gap-2.5 max-w-fit items-center border border-[#205CA0] text-white px-14 py-4  font-semibold tracking-wider  mt-7 rounded-md"
            >
              <span> {"Let's"} get started</span>
              <MdOutlineKeyboardArrowRight size={27} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full "
          >
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
          </motion.div>
        </div>
        <WorkedWith />
      </ContentLayout>
    </section>
  );
}
