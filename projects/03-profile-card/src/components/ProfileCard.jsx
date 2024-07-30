export default function ProfileCard({
  userName,
  userHandle,
  introduction,
  profileImg,
  alt,
}) {
  return (
    <figure className="w-[340px] rounded-lg bg-white shadow-soft py-6 px-4 flex flex-col gap-10 ">
      <figcaption className="flex flex-col gap-6 items-center">
        <img
          src={profileImg}
          alt={alt}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="text-center text-xl font-medium text-neutral-900">
            {userName}
          </p>
          <p className="text-sm text-neutral-600">{userHandle}</p>
        </div>
        <div className="text-center text-neutral-600">{introduction}</div>
      </figcaption>
      <div className="flex flex-col gap-6">
        <a
          href="#"
          className="text-medium bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 focus:outline-none focus:ring focus:ring-indigo-400 rounded text-white py-[10px] shadow-soft text-center font-medium"
        >
          Contact me
        </a>
        <div className="flex flex-row gap-4 justify-center">
          <a href="#">
            <img
              src="/assets/github-icon.svg"
              alt="GitHub"
              aria-label="GitHub"
            />
          </a>
          <a href="#">
            <img
              src="/assets/linkedin-icon.svg"
              alt="linkedIn"
              aria-label="LinkedIn"
            />
          </a>
          <a href="#">
            <img
              src="/assets/ins-icon.svg"
              alt="Instagram"
              aria-label="Instagram"
            />
          </a>
          <a href="#">
            <img src="/assets/x-icon.svg" alt="Twitter" aria-label="Twitter" />
          </a>
        </div>
      </div>
    </figure>
  );
}
