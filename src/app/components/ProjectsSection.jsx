"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Founding the Hispanic Association of Computing College Students (HACCS)",
    description: "During my last year of undergrad, I had the honor of founding a new student organization to increase the support and representation of Hispanic or Latine students in computing majors. I led countless meetings to organize 15+ workshops and networking events per semester for our members and other interested students. Feel free to read the article linked above.",
    image: "/images/projects/haccsmas_copy.jpg",
    tag: ["All", "Leadership and Advocacy"],
    gitUrl: "https://news.njit.edu/hispanic-association-computing-college-students-takes-njit",
    previewUrl: "https://news.njit.edu/hispanic-association-computing-college-students-takes-njit",
  },
  {
    id: 2,
    title: "Email: To Spam or Not To Spam?",
    description: "Developed and trained machine learning models to predict spam emails. Employed NLP techniques including text preprocessing and TF-IDF vectorization, coupled with exploratory data analysis and visualization using matplotlib and scikit-learn. Feel free to explore on Google Colab.",
    image: "/images/projects/confusion_matrix.png",
    tag: ["All", "Data"],
    gitUrl: "https://colab.research.google.com/drive/13-OWPWN-WXKjHhZRqOKXaxIlB4V1vUZw?usp=sharing",
    previewUrl: "https://colab.research.google.com/drive/13-OWPWN-WXKjHhZRqOKXaxIlB4V1vUZw?usp=sharing",
  },
  {
    id: 3,
    title: "Average Social Media Usage",
    description: "Crafted and published an insightful Tableau dashboard that dynamically illustrates trends in social media usage across three countries and multiple age groups, showcasing analytical skills for a university course project.",
    image: "/images/projects/Average_social_media_usage.png",
    tag: ["All", "Data"],
    gitUrl: "https://public.tableau.com/views/AverageSocialMediaUsageAtAGlance/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    previewUrl: "https://public.tableau.com/views/AverageSocialMediaUsageAtAGlance/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 4,
    title: "Does social media affect motivation and productivity?",
    description: "Quantitative analysis group project using SPSS examining how social media posts centered around personal development affect individuals' motivation and self-esteem.",
    image: "/images/projects/IS448_research.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "https://docs.google.com/presentation/d/1yO6AsuYUSIgYs71DDFK3SFQ-MUzEvHFJRNwPp9Wb89c/edit?usp=sharing",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Porfolio website (what you're viewing) built with React, Tailwind CSS, Next.js, Node.js, and deployed on Vercel.",
    image: "/images/projects/react_logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/michellebau/portfolio",
    previewUrl: "https://michelle-bautista.vercel.app",
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
          {["All", "Data", "Web", "Leadership and Advocacy"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.25 }}
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
  