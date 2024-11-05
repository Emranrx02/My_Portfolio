"use client";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useRef } from "react";
import useInviewHooks from "@/hooks/useInviewHooks";
export default function SocialBox({
  label,
  icon,
  url,
}: {
  label: string;
  icon: JSX.Element;
  url: string;
}) {
  const ref = useRef(null);
  const controllers = useInviewHooks(ref);
  return (
    <Tilt>
      <Link href={url} target="_blank">
        <motion.div
          animate={controllers}
          ref={ref}
          initial={{ x: -200, opacity: 0.5, scale: 0.5 }}
          variants={{ visible: { x: 0, opacity: 1, scale: 1 } }}
          transition={{ duration: 0.5 }}
          className=" w-full px-7 rounded-lg py-5 space-y-7 border-[#9C9C9C] border"
        >
          <div className="flex gap-5 items-center ">
            {icon}
            <p className="font-bold">{label}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Follow me</p>
            <IoArrowForwardCircleOutline size={23} />
          </div>
        </motion.div>
      </Link>
    </Tilt>
  );
}
