import ContactForm from "./ContactForm";
import useEmailSubscription from "./useEmailSubscription";
import { useState } from "react";

const contactInfo = [
  {
    icon: "assets/building-line.svg",
    description: "123 Maple Street, Springfield, IL, USA",
  },
  {
    icon: "assets/phone-line.svg",
    description: "+1 (650) 555-0198",
  },
  {
    icon: "assets/mail-line.svg",
    description: "hello@abstractly.com",
  },
];

export default function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const { snackbar, isLoading, onSubmit } = useEmailSubscription(
    setSuccess,
    setMessage
  );
  return (
    <section className="p-4 bg-gradient-148 font-noto-sans antialiased text-render-optimize">
      <div className="px-3 3xl:px-24 py-12 md:py-[5.19rem] 3xl:py-[10.56rem] bg-white rounded-md shadow-lg 3xl:grid 3xl:grid-cols-2 3xl:gap-8 3xl:items-center">
        <div className="">
          <h1 className="text-4xl md:text-5xl 3xl:text-6xl font-semibold pb-5 text-neutral-900">
            Talk to our team
          </h1>
          <p className="text-lg md:text-xl font-normal text-neutral-600 pb-10 md:pb-12">
            We&apos;re committed to delivering the support you require to make
            your experience as smooth as possible.
          </p>
          <div className="flex flex-col gap-6 mb-12 md:mb-16">
            {contactInfo.map((info) => (
              <div className="flex gap-3 items-center" key={info.description}>
                <span className="w-12 h-12 rounded-full shadow-soft flex gap-3 justify-center items-center">
                  <img
                    src={info.icon}
                    alt="company address"
                    className="w-6 h-6"
                  />
                </span>
                <p className="text-base font-medium text-neutral-600 align-middle">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 rounded-lg border border-neutral-200 shadow-lg p-4 md:p-8 3xl:h-[24.875rem]">
          {!success ? (
            <ContactForm
              snackbar={snackbar}
              isLoading={isLoading}
              onSubmit={onSubmit}
            />
          ) : (
            <div className="py-[2.69rem] px-4 flex flex-col items-center">
              <img
                src="assets/check-fill.svg"
                alt="success"
                className="p-4 rounded-full shadow-soft mb-6"
              />
              <p className="text-center text-xl font-normal text-neutral-900 mb-16">
                {message}
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="py-[0.625rem] px-4 rounded border-[0.0313rem] border-neutral-200 shadow-soft"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
