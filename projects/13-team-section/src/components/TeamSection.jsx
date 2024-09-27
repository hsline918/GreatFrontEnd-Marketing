export default function TeamSection() {
  const teamData = [
    {
      image: "assets/joe-jackson.png",
      name: "Joe Jackson",
      role: "Founder & CEO",
      description:
        "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
    },
    {
      image: "assets/ash-karter.png",
      name: "Ash Karter",
      role: "Founder & CFO",
      description:
        "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
    },
    {
      image: "assets/farias-amed.png",
      name: "Farias Amed",
      role: "Front End AI Engineer",
      description:
        "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
    },
    {
      image: "assets/sarah-haust.png",
      name: "Sarah Haust",
      role: "Dev Ops",
      description:
        "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
    },
  ];
  return (
    <section className="p-4 font-noto-sans antialiased bg-gradient-148">
      <div className="flex flex-col py-12 px-4 bg-white rounded-md shadow-md md:py-16 3xl:py-24 3xl:px-14">
        <h6 className="text-base font-semibold text-center text-indigo-700 mb-3">
          Team
        </h6>
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-5 md:text-5xl">
          Meet our team
        </h1>
        <p className="text-center text-xl font-normal text-neutral-600 mb-12 md:mb-16">
          From skilled designers to tech-savvy developers, each member brings a
          unique perspective and expertise to the table.
        </p>
        <div
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-y-16 
        md:gap-x-8 3xl:grid-cols-4 3xl:justify-center 3xl:px-10"
        >
          {teamData.map((member) => (
            <div className="flex flex-col items-left" key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="mb-6 md:h-[18.5rem]"
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                {member.name}
              </h3>
              <p className="text-lg font-medium text-indigo-700 mb-4">
                {member.role}
              </p>
              <p className="text-base font-normal text-neutral-600">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
