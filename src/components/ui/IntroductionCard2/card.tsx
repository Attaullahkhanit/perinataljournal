import Image from "next/image";
import { MdArticle, MdPictureAsPdf, MdArchive } from "react-icons/md";

interface IntroductionCardSecondProps {
  title?: string;
  subtitle?: string;
  pageRange?: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

const IntroductionCardSecond = ({
  title,
  subtitle,
  pageRange,
  description,
  imageUrl,
  imageAlt = "Journal Cover",
}: IntroductionCardSecondProps) => {
  return (
    <div className="w-full rounded-md p-6 bg-gradient-to-b from-[#E1E7EA] to-white shadow">
      <div className="flex flex-col md:flex-row pb-4 gap-6 items-start">
        {/* Content */}
        <div className="flex-1 my-auto">
          <h1 className="text-[32px] font-bold text-[rgb(0,87,156)]">
            {title}
          </h1>
          {subtitle && <h2 className="text-[18px] pt-3 font-bold leading-[20px] text-[rgb(0,87,156)] mt-2">
            {subtitle}
          </h2>}
          {pageRange && <div className="journal-pages text-green-700 mt-3">
            Pages: {pageRange}
          </div>}
          <p className="mt-4 text-[12px] leading-[20px] font-normal text-black">
            {description}
          </p>

          {/* Buttons (optional feature area) */}
          <div className="mt-6 flex flex-wrap gap-4">
            {/* Insert buttons or actions here if needed */}
          </div>
        </div>

        {/* Image */}
        <div className="w-[173px] h-[230px] relative shadow-[4px_8px_8px_rgba(0,0,0,0.4)]">
          {imageUrl && <Image
            src={imageUrl}
            alt={imageAlt}
            width={173}
            height={230}
            className="w-[173px] h-[230px] object-cover"
          />}
        </div>
      </div>
    </div>
  );
};

export default IntroductionCardSecond;