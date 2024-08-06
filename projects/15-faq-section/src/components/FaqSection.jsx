import Questions from "./Questions";

export default function FaqSection() {
  const qa = [
    {
      question: "What types of images are available on your platform?",
      answer:
        "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
    },
    {
      question: "How can I access and download images from your platform?",
      answer:
        "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
    },
    {
      question:
        "Do you offer free images, or is there a subscription required?",
      answer:
        "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
    },
    {
      question: "What payment methods do you accept for subscriptions?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
    },
    {
      question: "Can I cancel or modify my subscription at any time?",
      answer:
        "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
    },
    {
      question: "How frequently do you update your image collection?",
      answer:
        "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
    },
  ];
  return (
    <section className="m-4 py-12 md:py-16 3xl:py-24 px-4 3xl:px-24 bg-white rounded">
      <div className="grid gap-12 md:gap-16">
        <div className="grid gap-5">
          <h1 className="text-3xl md:text-5xl text-center font-semibold">
            Frequently asked questions
          </h1>
          <p className="text-lg md:text-xl text-center text-neutral-600 font-normal">
            Get all your questions answered
          </p>
        </div>
        <div className="grid divide-y divide-neutral-300">
          {qa.map((el) => (
            <Questions question={el.question} answer={el.answer} />
          ))}
        </div>
      </div>
      <div className="shadow-moderate p-4 md:p-8 border border-neutral-200 rounded-lg flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="grid gap-2 md:w-[30.375rem] md:h-[3.75rem]">
          <h2 className="text-neutral-900 text-xl font-semibold">
            Can’t find the answer you’re looking for?
          </h2>
          <p className="text-neutral-600 text-base font-normal">
            Reach out to our
            <a
              className="text-indigo-700 hover:text-indigo-800 focus:text-indigo-800"
              href="#"
            >
              {" "}
              customer support{" "}
            </a>{" "}
            team.
          </p>
        </div>
        <button className=" text-white text-base font-medium text-center py-3 px-5 bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 shadow-soft rounded md:w-[8.625rem] md:h-12 md:self-center">
          Get in touch
        </button>
      </div>
    </section>
  );
}
//
