import ContentLayout from "../Layouts/ContentLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Contact() {
  return (
    <div id="contact" className="bg-[#1A1A1A] py-10">
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
      </ContentLayout>
    </div>
  );
}
