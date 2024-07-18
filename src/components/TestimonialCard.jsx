export default function TestimonialCard() {
  return (
    <div className="font-noto-sans  h-screen md:min-h-[1024px] lg:min-h-[768px] flex justify-center py-[200px] bg-gradient-148">
      <figure className="w-[340px] h-[233px] flex flex-col gap-4 border  border-neutral-200 p-6 rounded-lg bg-white shadow-soft">
        <figcaption className="flex gap-4">
          <img
            src="/assets/profile-thumbnail.jpeg"
            alt="profile-thumbnail"
            className="w-12 h-12 object-cover rounded-[48px] grow-0"
          />
          <div className="flex flex-col gap-px grow">
            <p className="text-lg font-semibold text-neutral-900">Sarah Dole</p>
            <p className="text-sm font-normal text-neutral-600">@sarahdole</p>
          </div>
        </figcaption>
        <blockquote className="overflow-y-auto hide-scrollbar w-[292px] h-[110px]">
          <p className="text-base font-normal text-neutral-600 text-ellipsis overflow-hidden">
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </blockquote>
      </figure>
    </div>
  );
}
