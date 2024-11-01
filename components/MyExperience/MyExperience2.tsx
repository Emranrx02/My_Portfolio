"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
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
  const [isClicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => setClicked(true)}
      onMouseEnter={() => setClicked(true)}
      onMouseLeave={() => setClicked(false)}
      className=" cursor-pointer exp  w-full border-2 rounded-md border-black"
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
    </div>
  );
}
