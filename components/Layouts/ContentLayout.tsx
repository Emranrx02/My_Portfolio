import classNames from "classnames";
import { ReactNode } from "react";

export default function ContentLayout({
  children,
  className = "px-5",
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={classNames(
        "max-w-[70rem] overflow-hidden sm:overflow-visible mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}
