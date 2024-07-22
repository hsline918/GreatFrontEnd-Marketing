export default function BlogCard({
  badgeText,
  blogTitle,
  blogSummary,
  src,
  alt,
}) {
  return (
    <div className="flex justify-center py-[120px]">
      <div className="w-[340px] h-[504px] rounded-lg bg-white shadow-sm">
        <img
          src={src}
          alt={alt}
          className=" h-[288px] rounded-t-lg object-cover"
        />
        <section className="h-[216px] px-4 py-6">
          <p className="mb-2">
            <span className="px-2 py-[2px] rounded-full border border-green-200 bg-green-50 text-green-700">
              {badgeText}
            </span>
          </p>
          <header className="mb-3 text-lg font-semibold leading-7 text-neutral-900">
            {blogTitle}
          </header>
          <div>
            <p className="mb-6 text-base font-medium leading-6 text-neutral-600">
              {blogSummary}
            </p>
            <div className="flex flex-row">
              <button className="text-indigo-700 rounded font-medium">
                Read more
              </button>
              <img src="/assets/arrow-right-line.svg" className="ml-[6px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
