import Image from "next/image";
export default function WorkCard() {
  return (
    <div className=" w-full  ">
      <div className="w-full">
        <Image
          src="/exp-2.jpg"
          className="object-cover max-h-[25rem]"
          width={1920}
          height={1080}
          alt="work"
        />
      </div>
      <h3 className="text-3xl font-bold  py-5">Work name here</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quia
        cupiditate aliquid eum
      </p>
    </div>
  );
}
