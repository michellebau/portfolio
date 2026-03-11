"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Data analysis</li>
        <li>Dashboard development and maintenance</li>      
        <li>Reporting automation</li>  
        <li>SQL</li>
        <li>Python</li>
        <li>Snowflake</li>
        <li>Excel</li>
        <li>Git</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Additional skills",
    id: "s_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Critical thinking</li>
        <li>Cross-functional collaboration</li>
        <li>Stakeholder communication</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Analytics Associate @ Vistar Media, October 2024 - Present</li>
        <li>Data Analytics Intern @ Understood, June 2024 - August 2024</li>
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
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Michelle Bautista, a data analyst with experience in digital ad and DOOH analytics, specializing in automated reporting,
            dashboard development, and stakeholder-ready insights.
            
            <br></br><br></br>
            I'm proficient in Python, SQL, and Excel with a track record of building tools leveraged across multiple teams.
            I'm currently focused on growing my cross-collaboration experience across technical and non-technical audiences.
          
          <br></br><br></br>
          In my spare time, I enjoy Pilates classes, hanging out with my cat, Milo, and participate weekly in a Toastmasters chapter.
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
              Technical skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("s_skills")}
              active={tab === "s_skills"}
            >
              {" "}
              Additional skills{" "}
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