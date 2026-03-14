import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faFacebookF,
    link: "https://web.facebook.com/profile.php?id=61551252449350",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/chamasha-nethmi-04329132b/",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-4 justify-center">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg transition-all duration-300 
                     bg-[#1E1E1E] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                     hover:scale-110 text-white shadow-md flex items-center justify-center"
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;