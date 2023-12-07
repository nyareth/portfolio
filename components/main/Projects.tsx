import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/librify.png"
          title="Librify"
          description="A virtual bookshelf for students, teachers, hobbyists and more. (still in development)"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Personal Portfolio"
          description="This is my showroom for my skills and projects.Built with Next.js and TailwindCSS."
        />
      </div>
    </div>
  );
};

export default Projects;
