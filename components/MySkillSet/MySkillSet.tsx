import ContentLayout from "../Layouts/ContentLayout";
import { FaDev } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { MdBusinessCenter } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaKorvue } from "react-icons/fa";
import SkillBox from "./SkillBox";
export default function MySkillSet() {
  const mySkillSet = [
    {
      Title: "Blockchain & Web3 Application Development",
      Descriptions:
        "Develop decentralized apps and blockchain solutions focused on scalability and security for Web3 ecosystems",
      Icon: <FaDev size={50} />,
    },
    {
      Title: "Community Growth Hacking & Management",
      Descriptions:
        "Drive community growth through innovative strategies, engaging users and building loyalty.",
      Icon: <LuMessagesSquare size={53} />,
    },
    {
      Title: "Marketing & Social Media Management",
      Descriptions:
        "Create and manage marketing campaigns that increase brand visibility and drive engagement on social platforms",
      Icon: <IoIosPeople size={53} />,
    },
    {
      Title: "Business Development Roadmap Maker",
      Descriptions:
        "Design actionable business roadmaps that align with company goals and growth opportunities",
      Icon: <MdBusinessCenter size={53} />,
    },
    {
      Title: "Influencer (KOL) Outreach & Collaboration",
      Descriptions:
        "Build strong connections with influencers to amplify brand reach and foster authentic engagement",
      Icon: <FaKorvue size={50} />,
    },
    {
      Title: "Telegram Ads Expart",
      Descriptions:
        "Develop targeted Telegram advertisements that are specifically designed to align with your project's goals and objectives, ensuring optimal performance and engagement.",
      Icon: <FaTelegram size={50} />,
    },
  ];
  return (
    <div id="skills" className="bg-[#080808] scroll-m-28 -mt-2 p-1 pb-24">
      <ContentLayout>
        <h1 className="text-4xl font-bold text-center mb-24 text-white">
          The Skills I Can add to the Table
        </h1>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5">
          {mySkillSet.map((item) => (
            <SkillBox {...item} key={item.Title} />
          ))}
        </div>
      </ContentLayout>
    </div>
  );
}
