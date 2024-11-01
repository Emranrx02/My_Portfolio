import CoinEx from "../Icons/CoinEx";
import KajLab from "../Icons/KajLab";
import KTune from "../Icons/KTune";
import LBank from "../Icons/Lbank";
import Viabtc from "../Icons/Viabtc";
import ContentLayout from "../Layouts/ContentLayout";
import ExperienceBox2 from "./MyExperience2";
import ExperienceBox from "./MyExperienceBox";

export default function MyExpereience() {
  const MyExp = [
    {
      title: "K-Tune",
      Headline: "Community Manager and Twitter Management ",
      Text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet.",
      icons: <KTune className="w-[12.5rem]" fill="none" />,
    },
    {
      title: "CoinEX",
      Headline: "Marketing Executive",
      Text: "Blockchain isn't just a technology for me; it's a passion. Leveraging the CoinEx platform, I've honed my skills in managing the sector with a focus on virtual team dynamics. Over the past three years, I've been actively involved in steering virtual teams towards success. Here's to three years of growth, innovation, and many more milestones to come!",
      icons: <CoinEx className="w-[12.5rem]" fill="none" />,
    },
    {
      title: "Viabtc ",
      Headline: "Public Relations Partner",
      Text: "As a part-time Digital Marketing Executive, I specialize in navigating the dynamic world of blockchain. Proficient in Telegram, Twitter, and Instagram management, I bring strategic prowess to enhance your online presence.",
      icons: <Viabtc className="w-[12.5rem]" fill="none" />,
    },
    {
      title: "KaJ Labs",
      Headline: "Social Assistant Community Manager",
      Text: "Develop engaging content, craft visually striking images, and create high-quality videos for a variety of platforms.",
      icons: <KajLab className="w-[12.5rem]" fill="none" />,
    },
    {
      title: "LBank",
      Headline: "Lbank Listing Manager",
      Text: "Currently, I am managing nearly five distinct advertising campaigns for a variety of exciting projects. Each campaign is tailored to meet the unique needs and goals of its respective project, allowing us to effectively reach and engage our target audiences.",
      icons: <LBank className="w-[12.5rem]" fill="none" />,
    },
  ];
  return (
    <ContentLayout className="px-0">
      <div id="experience" className="my-20 scroll-m-28">
        <h2 className="text-3xl text-center  font-bold">My Experience</h2>
        <div className=" w-full my-24 grid px-5 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MyExp.map((item) => (
            <ExperienceBox2 key={item.title} {...item} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
