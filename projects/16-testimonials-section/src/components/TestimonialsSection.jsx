import TestimonialCard from "./TestimonialCard";

const cardData = [
  {
    userName: "Sarah Dole",
    userHandle: "@sarahdole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    src: "./assets/profile-thumbnail-0.svg",
    alt: "",
  },
  {
    userName: "John Appleseed",
    userHandle: "@johnaseed",
    testimonial:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
    src: "./assets/profile-thumbnail-1.svg",
    alt: "",
  },
  {
    userName: "Jean Gray",
    userHandle: "@jeniic",
    testimonial:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
    src: "./assets/profile-thumbnail-2.svg",
    alt: "",
  },
  {
    userName: "Jake Johnson",
    userHandle: "@jakejohnshon",
    testimonial:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
    src: "./assets/profile-thumbnail-3.svg",
    alt: "",
  },
  {
    userName: "Igor Stravinsky",
    userHandle: "@igorstrav",
    testimonial:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
    src: "./assets/profile-thumbnail-4.svg",
    alt: "",
  },
  {
    userName: "Declan Rice",
    userHandle: "@drice",
    testimonial:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
    src: "./assets/profile-thumbnail-5.svg",
    alt: "",
  },
  {
    userName: "Marcus Thompson",
    userHandle: "@mthompson",
    testimonial:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
    src: "./assets/profile-thumbnail-6.svg",
    alt: "",
  },
  {
    userName: "Oliver Neverloved",
    userHandle: "@olivernever",
    testimonial:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
    src: "./assets/profile-thumbnail-7.svg",
    alt: "",
  },
  {
    userName: "Mark Dennis",
    userHandle: "@marked",
    testimonial:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
    src: "./assets/profile-thumbnail-8.svg",
    alt: "",
  },
];

export default function TestimonialSection() {
  return (
    <section className="m-4 py-12 md:py-16 3xl:py-24 px-3 md:px-4 3xl:px-24  bg-white outline outline-1 outline-neutral-200 rounded flex flex-col gap-12 md:gap-16">
      <header className="px-8 flex flex-col gap-5 text-center">
        <div className="flex flex-col gap-3">
          <p className="text-indigo-700 text-xl font-semibold">Testimonials</p>
          <p className="text-3xl md:text-5xl font-semibold text-neutral-900">
            Countless users, countless smiles
          </p>
        </div>
        <div className="text-lg md:text-xl font-normal text-neutral-600">
          Explore our community's journey and discover why satisfaction defines
          us.
        </div>
      </header>
      <div className="space-y-6 columns-1 md:columns-2 3xl:columns-3">
        {/* grid items-start justify-items-center grid-cols-1 md:grid-cols-2 3xl:grid-rows-3 3xl:grid-flow-col gap-6 */}
        {/*  */}
        {cardData.map((card) => (
          <TestimonialCard
            key={card.userName}
            userName={card.userName}
            userHandle={card.userHandle}
            testimonial={card.testimonial}
            src={card.src}
            alt={card.alt}
          />
        ))}
      </div>
    </section>
  );
}
