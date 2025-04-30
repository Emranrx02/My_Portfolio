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
            {"My journey in the blockchain space began with a deep passion for building online communities and making decentralized technologies more approachable. Over the years, I've worked with projects like CoinEx, Oracle Free Dollar, and Dexify — helping to grow engaged communities and lead impactful campaigns. Previously, I served as a community builder at ViaBTC, where I helped drive social presence and public engagement. Though I've moved on, the experience shaped my foundation in Web3. Currently, I'm focusing on blending my technical education at Daffodil International University with real-world blockchain projects, empowering communities through strategic marketing, content, and growth initiatives."}
          </p>
          <Link
            href={"https://bento.me/emranrx"}
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
