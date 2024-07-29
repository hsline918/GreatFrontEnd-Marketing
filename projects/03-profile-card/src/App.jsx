import "./App.css";
import ProfileCard from "./components/ProfileCard";

const profileData = {
  userName: "Sarah Dole",
  userHandle: "Front End Engineer @ Microsoft",
  introduction:
    "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  src: "./assets/profile-thumbnail.jpeg",
  alt: "",
};

export default function App() {
  return (
    <>
      <div className="h-screen md:min-h-[1024px] lg:min-h-[768px] pt-[200px] px-[17.5px] flex justify-center items-start">
        <ProfileCard
          key={profileData.introduction}
          userName={profileData.userName}
          userHandle={profileData.userHandle}
          introduction={profileData.introduction}
          profileImg={profileData.src}
          alt={profileData.alt}
        />
      </div>
    </>
  );
}
