"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>SQL</li>
        <li>Tableau</li>
        <li>Excel</li>
        <li>SQL Server</li>
        <li>Git</li>
        <li>Figma</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Vercel</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "s_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Presentation Skills</li>
        <li>Leadership</li>
        <li>Teamwork</li>
        <li>Coachable</li>
        <li>Strategic Thinking</li>
        <li>Critical Thinking</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>New Jersey Institute of Technology, Newark, NJ</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/dalle2.webp" width={500} height={500} className="rounded-md" alt="Nice workspace generated with DALL-E."/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Graduating in May 2024 with a Bachelor&apos;s in Web and Information Systems, I have honed strong analytical capabilities through projects like making a high-accuracy KNN classifier and a dynamic dashboard that analyzes social media usage trends. I have experience creating responsive web applications and have ventured into UI design. <br></br><br></br>A committed team player who enjoys taking initiative, I excel in environments that cherish innovation, learning, and collective growth. Eager to apply my technical acumen and fresh insights, I aim to contribute to projects that prioritize meeting user needs and efficiency. In my personal time, I enjoy visiting new cafes, taking care of my plants, and my cat, Milo.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Technical Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("s_skills")}
              active={tab === "s_skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;