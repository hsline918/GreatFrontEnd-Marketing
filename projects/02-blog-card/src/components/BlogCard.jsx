export default function BlogCard({
  badgeText,
  blogTitle,
  blogSummary,
  blogImg,
  alt,
}) {
  return (
    <figure className="w-[340px] rounded-lg bg-white shadow-soft">
      <img
        src={blogImg}
        alt={alt}
        className="w-[340px] h-[288px] rounded-t-lg object-cover"
      />
      <figcaption className="px-4 py-6 flex flex-col gap-3">
        <div className="flex flex-col items-start gap-2">
          <p className="px-2 py-[2px] rounded-full outline outline-1 outline-green-200  bg-green-50">
            <span className="text-sm font-normal text-green-700">
              {badgeText}
            </span>
          </p>
          <p className="text-lg font-semibold leading-7 text-neutral-900">
            {blogTitle}
          </p>
        </div>
        <blockquote className="flex flex-col gap-6">
          <div className="text-base font-medium leading-6 text-neutral-600">
            {blogSummary}
          </div>
          <button className="flex flex-row items-center gap-[6px]">
            <p className="text-base px-[2px] text-indigo-700 rounded font-medium">
              Read more
            </p>
            <img src="/assets/arrow-right-line.svg" className="py-[1px]" />
          </button>
        </blockquote>
      </figcaption>
    </figure>
  );
}
