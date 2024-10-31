import ContentLayout from "../Layouts/ContentLayout";
import TestimonialBox from "./TestimonalBox";

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
    <div className="bg-[#080808] pt-1 pb-10">
      <ContentLayout>
        <h2 className="text-4xl text-white text-center my-20 font-bold">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
          {testimonials.map((item) => (
            <TestimonialBox {...item} key={item.imgUrl} />
          ))}
        </div>
      </ContentLayout>
    </div>
  );
}
