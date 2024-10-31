import ContentLayout from "../Layouts/ContentLayout";
import ExperienceBox from "./MyExperienceBox";

export default function MyExpereience() {
  const MyExp = [
    {
      Headline: "K-Tune - TG Management",
      Text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet.",
      imgUrl: "/exp-1.jpg",
    },
    {
      Headline: "CoinEX - PR",
      Text: "Blockchain isn't just a technology for me; it's a passion. Leveraging the CoinEx platform, I've honed my skills in managing the sector with a focus on virtual team dynamics. Over the past three years, I've been actively involved in steering virtual teams towards success. Here's to three years of growth, innovation, and many more milestones to come!",
      imgUrl: "/exp-2.jpg",
    },
    {
      Headline: "K-Tune - TG Management",
      Text: "As a part-time Digital Marketing Executive, I specialize in navigating the dynamic world of blockchain. Proficient in Telegram, Twitter, and Instagram management, I bring strategic prowess to enhance your online presence. Let's synergize marketing efforts and explore the limitless potential of the digital landscape together.",
      imgUrl: "/exp-3.jpg",
    },
    {
      Headline: "Social Assistant Community Manager at KaJ Labs",
      Text: "Develop engaging content, craft visually striking images, and create high-quality videos for a variety of platforms.",
      imgUrl: "/exp-4.jpg",
    },
    {
      Headline: "ADS Specialist",
      Text: "Currently, I am managing nearly five distinct advertising campaigns for a variety of exciting projects. Each campaign is tailored to meet the unique needs and goals of its respective project, allowing us to effectively reach and engage our target audiences.",
      imgUrl: "/exp-5.png",
    },
  ];
  return (
    <ContentLayout className="px-0">
      <div id="experience" className="my-20 scroll-m-28">
        <h2 className="text-3xl text-center  font-bold">My Experience</h2>
        <div className=" w-full">
          {MyExp.map((item, index) => (
            <ExperienceBox
              {...item}
              key={item.imgUrl}
              isReverse={index % 2 != 0}
            />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
