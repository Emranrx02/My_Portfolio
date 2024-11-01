import classNames from "classnames";

export default function KTune({
  className,
  fill = "none",
}: {
  className: string;
  fill: string;
}) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 900 900"
      className={classNames(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(216,352)"
        d="m0 0 62 1 1 4-8 12-11 14-14 18-33 44 1 4 14 18 16 21 11 14 21 28 3 5-2 4-2 1h-60l-10-12-12-16-14-18-20-26-11-14-5-7 2-4 7-10 11-14 10-13 8-10 13-17 9-12 11-14z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(763,411)"
        d="m0 0h21l11 3 10 5 10 9 8 14 4 15 1 9v12l-2 6-2 1h-80l3 12 6 10 5 5 7 4 5 2 12 1 15-2 13-5 4 1 8 16-9 6-13 5-14 3h-17l-16-4-13-7-10-9-6-7-6-12-4-15v-24l4-15 6-12 8-10 8-7 11-6z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(635,411)"
        d="m0 0h20l11 4 8 6 6 9 4 10 2 19v64l-1 17h-30l-1-83-2-10-4-6-5-3-4-1h-8l-11 4-12 9-1 2-1 86-1 2h-30v-126h25l1 1v14l6-3 15-10 9-4z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(427,414)"
        d="m0 0h30l1 1 1 82 2 10 4 6 7 3h12l9-4 9-7 3-4 1-87h30l1 2v123l-1 1h-24l-1-3-1-12-1-2-14 11-12 7-9 3h-13l-12-4-9-7-6-7-5-12-2-15z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(91,353)"
        d="m0 0h36l1 85v64l-1 38h-36z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(343,380)"
        d="m0 0h26l1 33 32 1v23l-1 1h-32l1 64 2 8 3 5 7 3h12l7-1 4 15v7l-14 4-6 1h-9l-16-4-10-7-7-9-4-13-1-9v-65l-16 1-2-1v-22l19-2 3-24z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(216,352)"
        d="m0 0 62 1 1 4-8 12-11 14-14 18-6 8-3 1-1 2h-2l-2 4-4 1-3 3-10 7-5 2h-10l-7-2-13-1-5-3v-3l-3-7-4 1 2-4 10-13 14-18 9-12 11-14z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(91,353)"
        d="m0 0h36v69h-1l-1-7-8 8-8 1-8-4-6-7h-2l-1 126h27v1h-28z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
      <path
        transform="translate(768,434)"
        d="m0 0h12l11 4 6 7 4 11v8h-58l2-8 6-11 7-7z"
        fill={fill}
        stroke="black"
        strokeWidth={5}
      />
    </svg>
  );
}
