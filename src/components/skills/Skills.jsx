
// import React from "react";
// import {
//   FaJava,
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
//   FaGithub
// } from "react-icons/fa";

// import {
//   SiSpringboot,
//   SiMysql,
//   SiPostgresql,
//   SiRedis,
//   SiTailwindcss,
//   SiJsonwebtokens
// } from "react-icons/si";

// const skillsData = [
//   { id: 1, name: "Java", icon: <FaJava />, level: "Advanced" },
//   { id: 2, name: "Spring Boot", icon: <SiSpringboot />, level: "Advanced" },
//   { id: 3, name: "React.js", icon: <FaReact />, level: "Advanced" },
//   { id: 4, name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
//   { id: 5, name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediate" },
//   { id: 6, name: "Redis", icon: <SiRedis />, level: "Intermediate" },
//   { id: 7, name: "JWT Security", icon: <SiJsonwebtokens />, level: "Advanced" },
//   { id: 8, name: "HTML", icon: <FaHtml5 />, level: "Advanced" },
//   { id: 9, name: "CSS", icon: <FaCss3Alt />, level: "Advanced" },
//   { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
//   { id: 11, name: "Git", icon: <FaGitAlt />, level: "Advanced" },
//   { id: 12, name: "GitHub", icon: <FaGithub />, level: "Advanced" },
// ];

// const Skills = () => {
//   return (
//     <div className="bg-[#121212] py-20 px-6" id="skills">
//       <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-14">
//         My Skills
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

//         {skillsData.map((skill) => (

//           <div
//             key={skill.id}
//             className="bg-[#1E1E1E] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-300"
//           >

//             <div className="text-4xl text-purple-400 mb-3">
//               {skill.icon}
//             </div>

//             <h3 className="text-white font-semibold text-lg">
//               {skill.name}
//             </h3>

//             <span className="mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//               {skill.level}
//             </span>

//           </div>

//         ))}

//       </div>
//     </div>
//   );
// };

// export default Skills;



import React from "react";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiJavascript,
  SiPython,
  SiJsonwebtokens
} from "react-icons/si";

const skillsData = [
  { id: 1, name: "Java", icon: <FaJava />, level: "Advanced" },
  { id: 2, name: "JavaScript", icon: <SiJavascript />, level: "Advanced" },
  { id: 3, name: "Python", icon: <SiPython />, level: "Intermediate" },
  { id: 4, name: "Spring Boot", icon: <SiSpringboot />, level: "Advanced" },
  { id: 5, name: "React.js", icon: <FaReact />, level: "Advanced" },
  { id: 6, name: "Node.js", icon: <FaReact />, level: "Intermediate" }, // keeping simple icon
  { id: 7, name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
  { id: 8, name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
  { id: 9, name: "Redis", icon: <SiRedis />, level: "Intermediate" },
  { id: 10, name: "GitHub", icon: <FaGithub />, level: "Advanced" },
  { id: 11, name: "Docker", icon: <FaDocker />, level: "Intermediate" },
  { id: 12, name: "JWT Security", icon: <SiJsonwebtokens />, level: "Advanced" },
];

const Skills = () => {
  return (
    <div className="bg-[#121212] py-20 px-6" id="skills">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-14">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skillsData.map((skill) => (

          <div
            key={skill.id}
            className="bg-[#1E1E1E] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-300"
          >

            <div className="text-4xl text-purple-400 mb-3">
              {skill.icon}
            </div>

            <h3 className="text-white font-semibold text-lg">
              {skill.name}
            </h3>

            <span className="mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              {skill.level}
            </span>

          </div>

        ))}

      </div>
    </div>
  );
};

export default Skills;