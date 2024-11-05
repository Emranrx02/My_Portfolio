"use client";
import Image from "next/image";
import { useRef } from "react";
import ContentLayout from "../Layouts/ContentLayout";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import useInviewHooks from "@/hooks/useInviewHooks";
export default function AboutMe() {
  const ref = useRef(null);
  const controls = useInviewHooks(ref);
  return (
    <ContentLayout>
      <section className="flex  md:px-0 md:flex-row flex-col w-full h-full gap-10 mb-48">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{
            x: -200,
            opacity: 0,
          }}
          variants={{
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="img-part  flex justify-center md:justify-end w-full"
        >
          <Tilt>
            <Image
              src={"/hero2.jpeg"}
              alt="hero jpg"
              width={1920}
              height={1080}
              className="max-w-[25rem]  shadow-xl rounded-2xl"
            />
          </Tilt>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          className="text-part h-full mt-auto mb-auto w-full"
        >
          <h2 className="text-3xl font-bold mb-10">A peek into my journey.</h2>
          <p>
            At Viabtc Technology Limited, our team leverages my expertise in
            blockchain and public relations to enhance our digital presence. By
            utilizing platforms such as Telegram, Twitter, and Instagram,
            {"we've"}
            invigorated our online interactions and cultivated vibrant
            communities. My ongoing education in Computer Science at Daffodil
            International University supports my role, blending academic
            knowledge with real-world applications. At Dexify, we are at the
            forefront of Web 3 social investing, where my strategic marketing
            skills play a crucial role in shaping the future of decentralized
            finance.
          </p>
          <Link
            href={"#"}
            target="_blank"
            className="bg-[#2B79D3] flex gap-2.5 max-w-fit items-center border border-[#205CA0] text-white px-14 py-4  font-semibold tracking-wider  mt-7 rounded-md"
          >
            <span> Hire me</span>
            <MdOutlineKeyboardArrowRight size={27} />
          </Link>
        </motion.div>
      </section>
    </ContentLayout>
  );
}
