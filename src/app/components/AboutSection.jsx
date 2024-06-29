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
        <li>Snowflake</li>
        <li>Looker Studio</li>
        <li>Tableau</li>
        <li>Excel/Google Sheets</li>
        <li>SQL Server</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "s_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Collaboration</li>
        <li>Presentation Skills</li>
        <li>Leadership</li>
        <li>Coachable</li>
        <li>Strategic Thinking</li>
        <li>Critical Thinking</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analytics Intern, Understood.org, New York, NY</li>
        <li>Returning Software Development Intern, Prudential Financial, Virtual, NJ</li>
        <li>Software Development Intern, Prudential Financial, Virtual, NJ</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
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
          I&apos;m Michelle Bautista, a May 2024 graduate from the New Jersey Institute of Technology with a B.S. in Web and Information Systems. My journey into data visualization began during my first internship at Prudential Financial, where I created a standardized PowerPoint template that streamlined vendor performance analysis. This experience, along with my current Data Analytics internship at Understood.org, has deepened my passion for a career in data analytics.<br></br><br></br>I am committed to refining my skills in data analysis, leveraging my experiences at Prudential Financial and Understood.org, to help organizations make data-driven decisions that create a positive impact. For fun, I like to read and visit parks. I have also recently begun trying Pilates.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
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