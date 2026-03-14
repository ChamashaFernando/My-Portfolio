import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="fixed bottom-10 right-5 z-50">
      <button
        onClick={scrollToTop}
        className={`
          w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
          flex justify-center items-center rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 
          hover:from-pink-500 hover:to-purple-500
          text-white shadow-lg transition-transform duration-300
          ${position < 200 ? "scale-0 opacity-0" : "scale-100 opacity-100"}
        `}
        style={{ transitionProperty: "transform, opacity" }}
      >
        <FontAwesomeIcon icon={faAngleUp} size="2xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;