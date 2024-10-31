import Behence from "../Icons/Behence";
import LinkedIn from "../Icons/Linkedin";
import Twitter from "../Icons/Twitter";
import ContentLayout from "../Layouts/ContentLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Contact() {
  return (
    <div id="contact" className="bg-[#080808] py-10">
      <ContentLayout>
        <h1 className="text-5xl text-center font-bold text-white">
          Get In Touch
        </h1>
        <div className="flex max-w-[30rem] mx-auto gap-1 my-10 text-[#f5f5f5] flex-col">
          <label>Email</label>
          <input
            type="email"
            className="py-3 px-2 rounded-md mb-5"
            placeholder="Please Enter your email"
          />
          <label>Name</label>
          <input
            type="text"
            className="py-3 px-2 rounded-md mb-5"
            placeholder="Please Enter your Name"
          />

          <label>Message</label>
          <textarea rows={5} className="rounded-md" />
          <button className="font-bold flex justify-center gap-2 items-center text-white py-4 mt-5 bg-[#3F8E00] border-[#62BA1B]">
            <span>Submit</span>
            <MdOutlineKeyboardArrowRight size={25} />
          </button>
        </div>
        <div className="icons md:flex justify-center hidden items-center gap-7 ml-7 mr-2">
          <LinkedIn
            className="w-[2.5rem] border-b pt-1 pb-2 border-transparent hover:border-[#9C9C9C] cursor-pointer"
            fill="none"
          />
          <Behence
            className="w-[2.5rem] border-b pt-2 pb-2 border-transparent hover:border-[#9C9C9C] cursor-pointer"
            fill="none"
          />
          <Twitter
            className="w-[2.5rem] border-b pt-1 pb-2 border-transparent hover:border-[#9C9C9C] cursor-pointer"
            fill="none"
          />
        </div>
      </ContentLayout>
    </div>
  );
}
