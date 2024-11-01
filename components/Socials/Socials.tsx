import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import ContentLayout from "../Layouts/ContentLayout";
import SocialBox from "./SocialBox";

export default function Socials() {
  const socialMedia = [
    {
      label: "Facebook",
      icon: <FaFacebook fill="#1877F2" size={40} />,
      url: "https://www.facebook.com/Emran.haque.2016",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin fill="#0077B5" size={40} />,
      url: "https://www.linkedin.com/in/emran-haque-903160162/",
    },
    {
      label: "Discord",
      icon: <FaDiscord fill="#7289da" size={40} />,
      url: "https://discord.com/gemrx",
    },
    {
      label: "Twitter",
      icon: <FaTwitter fill="#1DA1F2" size={40} />,
      url: "https://x.com/Emranhaque9",
    },
    {
      label: "Instagram",
      icon: <FaInstagramSquare fill="#F56040" size={40} />,
      url: "https://www.instagram.com/emran_haque/",
    },
    {
      label: "Telegram",
      icon: <FaTelegram fill="#24A1DE" size={40} />,
      url: "https://t.me/emranrx",
    },
  ];
  return (
    <ContentLayout>
      <div className="my-24 ">
        <h1 className="text-4xl font-bold text-center">Follow me </h1>
        <div className="my-10 max-w-[60rem] mx-auto gap-10 grid sm:grid-cols-2 md:grid-cols-3">
          {socialMedia.map((item) => (
            <SocialBox {...item} key={item.label} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
