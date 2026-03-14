// src/components/profile/Profile.jsx

import person from "../../assets/images/chamasha.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0 -bottom-20 lg:-bottom-28 z-10 rounded-3xl bg-[#1E1E1E] shadow-2xl xl:p-24 lg:p-20 md:p-16 sm:p-10 p-6"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-8">

        {/* Profile Image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 overflow-hidden rounded-2xl shadow-lg">
            <img
              className="h-[120%] object-cover rounded-2xl"
              src={person}
              alt="Chamasha Fernando"
            />
          </div>

          {/* Social Media */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 text-center bg-[#2A2A2A] rounded-xl shadow-lg">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            I am a Full-Stack Software Engineer
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg max-md:text-center text-gray-400 space-y-3">
            <p>
              I am a passionate Full-Stack Developer specializing in building modern web applications using <b>Spring Boot</b>, <b>React.js</b>, and <b>MySQL</b>. I enjoy creating scalable backend systems and responsive frontend interfaces.
            </p>

            <p>
              My expertise includes REST API development, database design, authentication systems using JWT, and building complete full-stack applications from frontend to backend.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex max-md:justify-center gap-4 flex-wrap">

            {/* Projects Button */}
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-[16px] cursor-pointer transition-all duration-300"
            >
              My Projects
            </Link>

            {/* Download CV Button */}
            <a
              href="/cv/My-CV.pdf"
              download="Chamasha-Fernando-CV.pdf"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-pink-500 hover:text-pink-500 text-gray-300 font-semibold text-sm sm:text-[16px] transition-all duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Download CV
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;