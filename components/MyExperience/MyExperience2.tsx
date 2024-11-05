"use client";
import { useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import useInviewHooks from "@/hooks/useInviewHooks";
import { motion } from "framer-motion";
export default function ExperienceBox2({
  icons,
  Headline,
  Text,
  title,
}: {
  icons: JSX.Element;
  Headline: string;
  Text: string;
  title: string;
}) {
  const ref = useRef(null);
  const controllers = useInviewHooks(ref);
  const [isClicked, setClicked] = useState(false);
  return (
    <Tilt>
      <motion.div
        animate={controllers}
        ref={ref}
        initial={{ y: 200, opacity: 0.5, scale: 0.5 }}
        variants={{ visible: { y: 0, opacity: 1, scale: 1 } }}
        transition={{ duration: 0.5 }}
        onClick={() => setClicked(true)}
        onMouseEnter={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        className=" cursor-pointer exp  w-full border rounded-md border-[#9C9C9C]"
      >
        <div
          className={classNames(
            " pb-10   flex-col items-center",
            !isClicked ? "flex" : "hidden"
          )}
        >
          {icons}
          <h1 className="text-4xl font-medium">{title}</h1>
        </div>
        <div
          className={classNames(
            "p-4  flex-col items-center",
            isClicked ? "flex" : "hidden"
          )}
        >
          <h1 className="text-xl font-bold mb-3">{Headline}</h1>
          <p className="text-sm">{Text}</p>
          <Link
            href={"#"}
            target="_blank"
            className="bg-[#2B79D3] text-white text-sm font-bold px-5 py-2.5 rounded-full mt-7"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </Tilt>
  );
}
