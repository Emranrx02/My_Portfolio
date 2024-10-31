import ContentLayout from "../Layouts/ContentLayout";
import WorkCard from "./WorkCard";

export default function MyRecentWork() {
  return (
    <div id="work" className="py-16 scroll-m-28">
      <ContentLayout>
        <h1 className="text-5xl font-bold  mb-24 text-center">Recent Work</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7 w-full ">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </ContentLayout>
    </div>
  );
}
