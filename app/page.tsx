import Contact from "@/components/Contact/Contact";
import HeaderSection from "@/components/Header/Header";
import MyExpereience from "@/components/MyExperience/MyExperience";
// import MyRecentWork from "@/components/MyRecentWork/MyRecentWork";
import RecentWorkCarousel from "@/components/MyRecentWork/RecentWorkCarousel";
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
      <RecentWorkCarousel />
      <Contact />
    </div>
  );
}
