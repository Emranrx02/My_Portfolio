import ContentLayout from "../Layouts/ContentLayout";
import Image from "next/image";
export default function Testimonials() {
  // const testimonials = [
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     name: "Emran huqe",
  //     imgUrl: "/hero.jpg",
  //   },
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     name: "Emran huqe",
  //     imgUrl: "/hero.jpg",
  //   },
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     name: "Emran huqe",
  //     imgUrl: "/hero.jpg",
  //   },
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     name: "Emran huqe",
  //     imgUrl: "/hero.jpg",
  //   },
  // ];
  return (
    <div id="roadmap" className=" pt-1 pb-10">
      <ContentLayout>
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
