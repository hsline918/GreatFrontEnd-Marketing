export default function TestimonialCard({
  userName,
  userHandle,
  testimonial,
  src,
  alt,
}) {
  return (
    <figure className="w-[19.9rem] md:w-[21rem] 3xl:w-[24rem] flex flex-col gap-4 outline-1 outline-neutral-200 p-6 rounded-lg bg-white shadow-soft break-inside-avoid">
      <figcaption className="flex gap-4">
        <img
          src={src}
          alt={alt}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex flex-col gap-px">
          <p className="text-lg font-semibold text-neutral-900">{userName}</p>
          <p className="text-sm font-normal text-neutral-600">{userHandle}</p>
        </div>
      </figcaption>
      <blockquote>
        <p className="text-base font-normal text-neutral-600 text-ellipsis overflow-hidden">
          {testimonial}
        </p>
      </blockquote>
    </figure>
  );
}
