import BlogCard from "@repo/02-blog-card/blog-card";

const cardData = {
  badgeText: "Interior",
  blogTitle: "Top 5 Living Room Inspirations",
  blogSummary:
    "Curated vibrants colors for your living, make it pop & calm in the same time.",
  blogImg: "./assets/comfy-living.jpeg",
  alt: "", //for future dynamic purpose
};
export default function App() {
  return (
    <>
      <div className="h-screen md:min-h-[1024px] lg:min-h-[768px] pt-[120px] px-[17.5px] flex justify-center items-start">
        <BlogCard
          key={cardData.blogTitle}
          badgeText={cardData.badgeText}
          blogTitle={cardData.blogTitle}
          blogSummary={cardData.blogSummary}
          blogImg={cardData.blogImg}
          alt={cardData.alt}
        />
      </div>
    </>
  );
}
