import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import React from "react";

interface CardData {
  userName: string;
  userHandle: string;
  testimonial: string;
  src: string;
  alt: string;
}

const cardData: CardData[] = [
  {
    userName: "Sarah Dole",
    userHandle: "@sarahdole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    src: "./assets/profile-thumbnail.jpeg",
    alt: "", //for future dynamic purpose
  },
];

export default function App(): JSX.Element {
  return (
    <>
      {cardData.map((card) => (
        <div className="h-screen md:min-h-[1024px] lg:min-h-[768px] flex justify-center items-start pt-[200px] px-[17.5px]">
          <TestimonialCard
            key={card.userHandle}
            userName={card.userName}
            userHandle={card.userHandle}
            testimonial={card.testimonial}
            src={card.src}
            alt={card.alt}
          />
        </div>
      ))}
    </>
  );
}
