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
    gitUrl: "https://github.com/michellebau/portfolio",
    previewUrl: "https://michelle-bautista.vercel.app",
  },
  {
    id: 2,
    title: "Email: To Spam or Not To Spam?",
    description: "Developed a K-Nearest Neighbors classifier to distinguish between 5,695 spam and non-spam emails, achieving a 98% accuracy rate. Employed NLP techniques including text preprocessing and TF-IDF vectorization, coupled with exploratory data analysis and visualization using Python and Scikit-learn. Feel free to explore on Google Collab.",
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
    gitUrl: "/",
    previewUrl: "https://public.tableau.com/views/AverageSocialMediaUsageAtAGlance/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 4,
    title: "Recycling Web App",
    description: "Built a web app featuring PyTorch and TensorFlow suggesting how to recycle an item based on its image.",
    image: "/images/projects/torch_logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/michellebau/recycling",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "WIS Club UI Design",
    description: "Created a Figma clickable prototype for professor's project. This design consists of a landing page and events page(s) for the purpose of displaying guest lectures on campus.",
    image: "/images/projects/WIS_Club.png",
    tag: ["All", "Design"],
    gitUrl: "https://www.figma.com/file/jBk34sfHdqMMdZj19u1mGK/421-UI?type=design&node-id=0%3A1&mode=design&t=IEwuH9Mqf8P6gdys-1",
    previewUrl: "https://www.figma.com/proto/jBk34sfHdqMMdZj19u1mGK/421-UI?page-id=0%3A1&type=design&node-id=0-3732&viewport=395%2C385%2C0.05&t=9VGEt2tif32FylGB-1&scaling=min-zoom&mode=design",
  },
  {
    id: 6,
    title: "Does social media affect motivation and productivity?",
    description: "Quantitative analysis group project using SPSS examining how social media posts centered around personal development affect individuals' motivation and self-esteem.",
    image: "/images/projects/IS448_research.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "https://docs.google.com/presentation/d/1yO6AsuYUSIgYs71DDFK3SFQ-MUzEvHFJRNwPp9Wb89c/edit?usp=sharing",
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
          {["All", "Data", "Web", "Design"].map((tagName) => (
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
  