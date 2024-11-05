"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useRef } from "react";
import useInviewHooks from "@/hooks/useInviewHooks";
export default function SkillBox({
  Title,
  Descriptions,
  Icon,
}: {
  Title: string;
  Descriptions: string;
  Icon: JSX.Element;
}) {
  const ref = useRef(null);
  const controllers = useInviewHooks(ref);
  return (
    <Tilt>
      <motion.div
        animate={controllers}
        ref={ref}
        initial={{ top: 200, opacity: 0.5, scale: 0.5 }}
        variants={{ visible: { top: 0, opacity: 1, scale: 1 } }}
        transition={{ duration: 0.5 }}
        className="text-black flex flex-col items-center text-center   p-7 rounded-md border relative border-[#9C9C9C]"
      >
        {Icon}
        <h1 className="text-2xl font-bold my-5">{Title}</h1>
        <p>{Descriptions}</p>
      </motion.div>
    </Tilt>
  );
}
