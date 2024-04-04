"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Porfolio website (what you're viewing) built with React, Tailwind CSS, Next.js, Node.js, and deployed on Vercel.",
    image: "/images/projects/react_logo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Lyriks Website",
    description: "Developed for a class project. This project mimics an audio streaming platform built with React, Node.js, and Vite.js deployed on Netlify. This website uses the Shazam Core Rapid API and the IP Geolocation API.",
    image: "/images/projects/Lyriks_screenshot.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Recycling Web App",
    description: "A web app featuring PyTorch and TensorFlow suggesting how to recycle an item based on its image.",
    image: "/images/projects/torch_logo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "WIS Club UI Design",
    description: "Created a Figma clickable prototype for professor's project. This design consists of a landing page and events page(s) for the purpose of displaying guest lectures on campus.",
    image: "/images/projects/WIS_Club.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Does social media affect motivation and productivity?",
    description: "Quantitative analysis group project using SPSS examining how social media posts centered around personal development affect individuals' motivation and self-esteem.",
    image: "/images/projects/IS448_research.png",
    tag: ["All", "Research"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ColorStack Oyster Contribution",
    description: "Contributed to the open-source software of ColorStack.org.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
          {/* Adjusted for dynamic tag rendering */}
          {["All", "Web", "Design", "Research", "Data"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={() => handleTagChange(tagName)}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
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
  