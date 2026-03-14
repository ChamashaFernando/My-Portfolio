import React from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Skills from "../components/skills/Skills";
// import "../../index.css";

const Home = () => {
  return (
    <div className="relative bg-[#121212] text-white">
      {/* Introduction + Profile Section */}
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16">
        <Skills />
      </div>

      {/* Portfolio Section */}
      <div className="py-16">
        <Portfolio />
      </div>


      {/* Contact Section */}
      <div className="bg-[#1E1E1E] py-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;