import Image from "next/image";
import ContentLayout from "../Layouts/ContentLayout";
import classNames from "classnames";

export default function ExperienceBox({
  imgUrl,
  Headline,
  Text,
  isReverse,
}: {
  imgUrl: string;
  Headline: string;
  Text: string;
  isReverse: boolean;
}) {
  return (
    <ContentLayout>
      <div
        className={classNames(
          isReverse ? "md:flex-row-reverse" : "",
          "flex md:flex-row flex-col-reverse  px-5 my-16  rounded-2xl py-2.5 items-center "
        )}
      >
        <div className="w-full ">
          <h2 className="text-2xl sm:text-4xl font-bold">{Headline}</h2>
          <p className="mt-5 sm:text-base text-sm">{Text}</p>
        </div>
        <div
          className={classNames(
            "w-full flex ",
            isReverse ? "" : "flex-row-reverse"
          )}
        >
          <Image
            src={imgUrl}
            className="md:max-w-[25rem] md:mb-0 mb-10 shadow-md max-h-[25rem] object-cover"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </ContentLayout>
  );
}
