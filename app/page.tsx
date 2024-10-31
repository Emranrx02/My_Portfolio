import HeaderSection from "@/components/Header/Header";
import MyExpereience from "@/components/MyExperience/MyExperience";
import MySkillSet from "@/components/MySkillSet/MySkillSet";
import NavBar from "@/components/NavBar/NavBar";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <HeaderSection />
      <MySkillSet />
      <MyExpereience />
      <Testimonials />
    </div>
  );
}
