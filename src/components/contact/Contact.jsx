
// src/components/contact/Contact.jsx
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactItems = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "chamashanethmi81@gmail.com",
    link: "mailto:chamashanethmi81@gmail.com",
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "github.com/ChamashaFernando",
    link: "https://github.com/ChamashaFernando?tab=overview&from=2025-12-01&to=2025-12-31",
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chamasha-nethmi-04329132b",
    link: "https://www.linkedin.com/in/chamasha-nethmi-04329132b/",
  },
];

const Contact = () => {
  return (
    <div className="content max-xl:px-4 py-16 bg-[#121212] text-white" id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Contact Me
      </h2>
      <p className="text-center text-gray-400 mb-12">
        You can reach me via email or check my professional profiles:
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 bg-gradient-to-t from-[#2A2A2A] to-[#1E1E1E] p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-white text-4xl sm:text-5xl"
            />
            <div className="text-center">
              <p className="text-gray-400 text-sm sm:text-base">{item.label}</p>
              <p className="text-white font-semibold text-sm sm:text-base break-words">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;