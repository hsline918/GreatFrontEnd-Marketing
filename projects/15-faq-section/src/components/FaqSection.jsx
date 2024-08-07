import GetInTouch from "./GetInTouch";
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
            <div key={el.question} className="py-7 first:pt-0">
              {/*className="flex flex-row items-start place-content-between "*/}
              <Questions question={el.question} answer={el.answer} />
            </div>
          ))}
        </div>
      </div>
      <GetInTouch />
    </section>
  );
}
