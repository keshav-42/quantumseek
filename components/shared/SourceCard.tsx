import Image from "next/image";

const SourceCard = ({ source }: { source: SearchResult }) => {
  return (
    <div className="flex h-[79px] w-full items-center gap-2.5 rounded border border-solid border-[#ffe5c1] bg-orange-50 px-1.5 py-1 md:w-auto">
      <div className="">
        <Image
          unoptimized
          src={`https://www.google.com/s2/favicons?domain=${source.url}&sz=128`}
          alt={source.url}
          className="p-1"
          width={44}
          height={44}
        />
      </div>
      <div className="flex max-w-[192px] flex-col justify-center gap-[7px]">
        <h6 className="line-clamp-2 text-sm font-light leading-[normal] text-[#1B1B16]">
          {source.title}
        </h6>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={source.url}
          className="truncate text-sm font-light text-orange-700"
        >
          {source.url}
        </a>
      </div>
    </div>
  );
};

export default SourceCard;
