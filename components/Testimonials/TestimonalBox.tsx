import Image from "next/image";
import Qoute from "../Icons/Qoute";

export default function TestimonialBox({
  text,
  name,
  imgUrl,
}: {
  text: string;
  name: string;
  imgUrl: string;
}) {
  return (
    <div className="text-[#9C9C9C]  p-7 rounded-md border relative border-[#9C9C9C]">
      <p>{text} </p>
      <div className="flex mt-10 gap-2 items-center">
        <Image
          src={imgUrl}
          alt=""
          width={1920}
          height={1080}
          className="w-12 h-12 object-cover rounded-full"
        />
        <h2 className="text-white text-xl font-medium">{name}</h2>
      </div>
      <Qoute fill="none" className="w-[2rem] absolute -top-[9%]" />
    </div>
  );
}
