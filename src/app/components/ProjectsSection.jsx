"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Student Management Website",
    description: "Building a website that enables schools to efficiently manage student information, scores, and classes. Users can generate reports on student performance and easily adjust school settings.",
    image: "/images/projects/project1.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/Minhtandev/student-management",
    previewUrl: "https://student-management-xi3t.vercel.app/",
  },
  {
    id: 2,
    title: "Pops Movies Website",
    description: "Building a website that provides a beautiful and smooth interface for users to browse, search, and explore movies across various categories. Additionally, this website allows users to add films to their favorites list and participate in discussions about them with other users.",
    image: "/images/projects/project2.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/Minhtandev/pops-movie",
    previewUrl: "https://pops-movie.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Building a responsive personal portfolio website to showcase my projects, skills, and experiences, specifically as a frontend developer and generally as a software engineer.",
    image: "/images/projects/project3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Minhtandev/portfolio",
    previewUrl: "https://portfolio-pmo3.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;