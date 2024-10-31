export default function SkillBox({
  Title,
  Descriptions,
  Icon,
}: {
  Title: string;
  Descriptions: string;
  Icon: JSX.Element;
}) {
  return (
    <div className="text-[#9C9C9C] flex flex-col items-center text-center   p-7 rounded-md border relative border-[#9C9C9C]">
      {Icon}
      <h1 className="text-2xl font-bold my-5">{Title}</h1>
      <p>{Descriptions}</p>
    </div>
  );
}
