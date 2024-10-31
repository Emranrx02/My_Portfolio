import { FiFileText } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuMessagesSquare } from "react-icons/lu";

export default function Worked() {
  const WorkItem = [
    { label: "Copywriting", icon: <FiFileText size={50} /> },

    { label: "Marketing", icon: <HiOutlineSpeakerphone size={52} /> },
    { label: "Social Media", icon: <LuMessagesSquare size={53} /> },
  ];
  return (
    <div className=" mt-16">
      <p>How can I help</p>

      <div className="flex mt-5 gap-10 justify-center flex-wrap md:flex-nowrap">
        {WorkItem.map((item) => (
          <div
            key={item.label}
            className="flex text-[#525252] bg-[#f5f5f5]  rounded-lg flex-col  max-w-[20rem] max-h-[20rem] py-7 h-full w-full  items-center gap-2 justify-center"
          >
            {item.icon}
            <p className="font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
