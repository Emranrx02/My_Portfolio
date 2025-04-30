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
            <p className="text-sm">
            I’m a blockchain community manager and digital marketing specialist with over five years of experience building and managing thriving online communities. I’ve worked in the Web3, cryptocurrency, and fintech industries, leading community engagement strategies, moderating discussions, and helping communities grow organically on platforms like Telegram, Discord, Twitter, and more.

          I’ve successfully organized AMAs, managed KOL partnerships, created engagement campaigns, and handled large-scale community activations. I know how to moderate discussions, resolve conflicts, manage FUD, and provide user support to create a positive and interactive environment.

            Before this, I’ve contributed to projects like CoinEx, Oracle Free Dollar, and several blockchain-based initiatives, helping to grow communities and increase brand awareness. My goal is to make blockchain technology more accessible and user-friendly so communities can be more engaged, informed, and empowered.
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
