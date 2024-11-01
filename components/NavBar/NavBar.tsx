"use client";

export default function NavBar() {
  const NavItem = [
    { label: "Home", slug: "home" },
    { label: "Skills", slug: "skills" },
    { label: "Experience", slug: "experience" },
    { label: "Work", slug: "work" },
    { label: "Contact", slug: "contact" },
  ];
  const handleClick = (item: string) => {
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className=" bg-[#13242C] text-white text-xs md:text-base sm:text-sm z-50 fixed w-full   py-6 shadow-lg px-5   ">
      <div className="flex max-w-[70rem] mx-auto">
        <ul className="flex  justify-between w-full">
          {NavItem.map((item) => (
            <li
              key={item.slug}
              onClick={() => handleClick(item.slug)}
              className="hover:border-[#9C9C9C] font-bold border-b border-transparent cursor-pointer py-1"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
