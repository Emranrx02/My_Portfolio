import ContentLayout from "../Layouts/ContentLayout";
import Image from "next/image";
export default function Testimonials() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      name: "Emran huqe",
      imgUrl: "/hero.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      name: "Emran huqe",
      imgUrl: "/hero.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      name: "Emran huqe",
      imgUrl: "/hero.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      name: "Emran huqe",
      imgUrl: "/hero.jpg",
    },
  ];
  return (
    <div className=" pt-1 pb-10">
      <ContentLayout>
        {/* <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
          {testimonials.map((item) => (
            <TestimonialBox {...item} key={item.imgUrl} />
          ))}
        </div> */}
        <Image
          src={"/RoadMap.png"}
          className="max-w-[50rem] w-full mx-auto"
          width={1920}
          height={1080}
          alt="roadmap"
        />
      </ContentLayout>
    </div>
  );
}
