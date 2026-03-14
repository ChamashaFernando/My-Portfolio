
// src/components/projects/Projects.jsx
import React from "react";

const projectsData = [
  {
    id: 1,
    name: "Lost & Found Platform",
    description: "Campus lost & found management system for universities.",
    githubFrontend: "https://github.com/ChamashaFernando/Lost-and-Found-System-Frontend",
    githubBackend: "https://github.com/ChamashaFernando/Lost-and-Found-System-Backend",
    demo: "#",
  },
  {
    id: 2,
    name: "CV Filtering System",
    description: "Spring Boot backend system to filter CVs based on technologies.",
    github: "https://github.com/ChamashaFernando/CV-filtering-web-app",
    demo: "#",
  },
  {
    id: 3,
    name: "Hotel Reservation System",
    description: "Full-stack hotel booking and management web application.",
    github: "https://github.com/ChamashaFernando/Hotel-Reservation-System",
    demo: "#",
  },
  {
    id: 4,
    name: "MedLink Online",
    description: "Online doctor channeling system using React and Spring Boot.",
    github: "https://github.com/ChamashaFernando/channelling-center",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <div className="py-20 px-4 bg-[#121212]" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1E1E1E] rounded-3xl shadow-md p-6 flex flex-col justify-between transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Title */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              {project.name}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              {/* Lost & Found Platform → Frontend & Backend */}
              {project.githubFrontend && project.githubBackend ? (
                <>
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Frontend
                  </a>
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Backend
                  </a>
                </>
              ) : (
                project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    GitHub
                  </a>
                )
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold hover:from-teal-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;