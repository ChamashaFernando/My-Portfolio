




// src/components/introduction/Introduction.jsx
import { useEffect, useState } from "react";
import person from "../../assets/images/chamasha.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { TypeAnimation } from "react-type-animation";

const informationSummaryData = [
  { id: 1, title: "Years of Experience", description: "1+" },
  { id: 2, title: "Projects Built", description: "5+" },
  { id: 3, title: "Technologies", description: "15+" },
];

const Introduction = () => {
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    const intro = document.getElementById("introduction");
    if (!intro) return;

    // Intersection Observer to detect home section in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Home section visible → restart animation
            setAnimationKey(Date.now());
          }
        });
      },
      { threshold: 0.5 } // 50% of section visible
    );

    observer.observe(intro);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="introduction"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 lg:mb-28 max-xl:gap-4 p-4 bg-[#121212]"
    >
      {/* Left Section */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 lg:me-32 w-full lg:w-auto transition-all duration-500">
          {/* Typewriter Text */}
          <div className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-bold whitespace-pre-line">
            {/* Hello I'm */}
            <div className="text-white">
              <TypeAnimation
                key={animationKey + "hello"}
                sequence={["Hello, I'm"]}
                speed={50}
                cursor={false}
                repeat={0}
              />
            </div>

            {/* Name */}
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              <TypeAnimation
                key={animationKey + "name"}
                sequence={[800, "Chamasha Fernando"]}
                speed={50}
                cursor={false}
                repeat={0}
              />
            </div>

            {/* Software Engineer */}
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-lg sm:text-xl mt-2 font-semibold">
              <TypeAnimation
                key={animationKey + "role"}
                sequence={[1200, "Software Engineer"]}
                speed={50}
                cursor={false}
                repeat={0}
              />
            </div>
          </div>

          <p className="text-sm sm:text-[18px] my-6 text-white leading-relaxed">
          Passionate about building modern web applications and transforming complex problems into simple, elegant solutions.
          I enjoy creating clean, scalable, and user-friendly digital experiences using modern technologies while continuously learning and improving my development skills.
          </p>

          {/* Contact Button */}
          <p className="text-center lg:text-start mt-5">
            <a
              className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-lg px-6 py-2 transition-all duration-300 inline-block"
              href="#contact"
            >
              Contact Me
            </a>
          </p>
        </div>

        {/* Information Summary */}
        <div className="mx-auto lg:mx-0 relative mt-10">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit gap-4">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative mt-10 lg:mt-0">
        <img
          className="shadow-2xl shadow-black w-full h-full absolute bottom-0 object-cover rounded-3xl border-2 border-gray-700"
          src={person}
          alt="Chamasha Fernando"
        />
      </div>
    </div>
  );
};

export default Introduction;