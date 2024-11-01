import classNames from "classnames";

export default function Ajax({
  className,
  fill = "none",
}: {
  className: string;
  fill: string;
}) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 800 800"
      className={classNames(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(471,177)"
        d="m0 0h86l8 3-1 4h3l1 3v379l-2 8-4 5-6 2h-56l-9-2-5-6-1-3-1-284-28 36-10 13-14 18-12 15-21 28-13 16-13 17-10 13-28 36-13 17-12 15-10 13-11 14-14 18-13 17-7 8-3 1h-81l-5-3-2-3v-6l20-26 14-18 22-28 10-13 12-15 15-20 12-15 13-17 28-36 20-26 22-28 12-15 20-26 14-18 11-14 13-17 14-18 12-16 7-9 10-13z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(566,184)"
        d="m0 0 2 3v379l-2 8-4 5-6 2h-56l-9-2-5-6-1-3-1-286 6-8 11-14 14-18 13-17 13-16 13-17 6-8z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
    </svg>
  );
}
