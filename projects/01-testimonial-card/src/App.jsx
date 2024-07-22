import "./App.css";
import BlogCard from "./components/BlogCard";

const cardData = {
  badgeText: "Interior",
  blogTitle: "Top 5 Living Room Inspirations",
  blogSummary:
    "Curated vibrants colors for your living, make it pop & calm in the same time.",
  src: "./assets/comfy-living.jpeg",
  alt: "", //for future dynamic purpose
};
export default function App() {
  return (
    <>
      <div className="h-screen pt-[120px] px-[17.5px]">
        <BlogCard
          key={cardData.blogTitle}
          badgeText={cardData.badgeText}
          blogTitle={cardData.blogTitle}
          blogSummary={cardData.blogSummary}
          src={cardData.src}
          alt={cardData.alt}
        />
      </div>
    </>
  );
}
