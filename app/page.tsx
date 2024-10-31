import HeaderSection from "@/components/Header/Header";
import MyExpereience from "@/components/MyExperience/MyExperience";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <HeaderSection />
      <MyExpereience />
    </div>
  );
}
