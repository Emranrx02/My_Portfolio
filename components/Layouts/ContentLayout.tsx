import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <section className="max-w-[70rem] mx-auto px-5">{children}</section>;
}
