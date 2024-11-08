import classNames from "classnames";

export default function Qoute({
  className,
  fill = "none",
}: {
  className: string;
  fill: string;
}) {
  return (
    <svg
      viewBox="0 0 20 21"
      fill={fill}
      className={classNames(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.4 -1.90735e-06L4.7 10.6H7.1V20.9H0.4V10.6L2.9 -1.90735e-06H6.4ZM18.5 -1.90735e-06L16.8 10.6H19.2V20.9H12.5V10.6L15 -1.90735e-06H18.5Z"
        fill="white"
      />
    </svg>
  );
}
