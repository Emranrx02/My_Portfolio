"use client";
import { useRef } from "react";
import ContentLayout from "../Layouts/ContentLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
export default function Contact() {
  const nameRef = useRef<HTMLInputElement | undefined>();
  const emailRef = useRef<HTMLInputElement | undefined>();
  const messageRef = useRef<HTMLInputElement | undefined>();

  const onSubmit = async () => {
    try {
      if (
        nameRef.current?.value?.length &&
        nameRef.current?.value.length > 2 &&
        emailRef.current?.value &&
        emailRef.current?.value.length > 4 &&
        messageRef.current?.value &&
        messageRef.current.value.length > 1
      ) {
        const data = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        };

        const res = await fetch("/api/Contact", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
            Accept: "applicaion/json",
          },
        });

        console.log(res);

        if (res.status === 200) {
          toast.success("Email sent successfully");
          emailRef.current.value = "";
          nameRef.current.value = "";
          messageRef.current.value = "";
        }
      } else {
        toast.error("please fill all the field properly");
      }
    } catch (e) {
      console.log(e);
      toast.error("hmmm something went wrong");
    }
  };

  return (
    <div id="contact" className="bg-[#1A1A1A]  py-10">
      <Toaster position="top-right" />
      <ContentLayout>
        <h1 className="text-5xl text-center font-bold text-white">
          Get In Touch
        </h1>
        <div className="flex max-w-[30rem] mx-auto gap-1 my-10 text-[#f5f5f5] flex-col">
          <label>Email</label>
          <input
            //@ts-ignore
            ref={nameRef}
            type="email"
            className="py-3 text-black px-2 rounded-md mb-5"
            placeholder="Please Enter your email"
          />
          <label>Name</label>
          <input
            //@ts-ignore
            ref={emailRef}
            type="text"
            className="py-3 px-2 text-black rounded-md mb-5"
            placeholder="Please Enter your Name"
          />

          <label>Message</label>
          <textarea
            //@ts-ignore
            ref={messageRef}
            rows={5}
            className="rounded-md px-2 py-3 text-black"
          />
          <button
            onClick={onSubmit}
            className="font-bold flex justify-center gap-2 items-center text-white py-4 mt-5 bg-[#3F8E00] border-[#62BA1B]"
          >
            <span>Submit</span>
            <MdOutlineKeyboardArrowRight size={25} />
          </button>
        </div>
        <p className="mt-10  text-white max-w-[40rem] text-center mx-auto">
          At CM!, our Community Managers go beyond traditional management by
          actively fostering environments that inspire excellence and create
          opportunities for growth.
        </p>
      </ContentLayout>
    </div>
  );
}
