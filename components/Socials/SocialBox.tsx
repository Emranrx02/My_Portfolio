"use client";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Tilt from "react-parallax-tilt";
export default function SocialBox({
  label,
  icon,
  url,
}: {
  label: string;
  icon: JSX.Element;
  url: string;
}) {
  return (
    <Tilt>
      <Link href={url} target="_blank">
        <div className=" w-full px-7 rounded-lg py-5 space-y-7 border-[#9C9C9C] border">
          <div className="flex gap-5 items-center ">
            {icon}
            <p className="font-bold">{label}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Follow me</p>
            <IoArrowForwardCircleOutline size={23} />
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
