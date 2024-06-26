"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hi, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Michelle",
                  1500,
                  "A Data Analyst",
                  1500,
                  "An Advocate",
                  1500
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#fff] text-base sm:text-lg mb-6 lg:text-xl">
            I transform data into insights for impactful decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-2">
              <Link
                href="/#contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-blue-200 text-black hover:bg-emerald-100"
              >
                Contact Me
              </Link>
              <a
                href="/Michelle_Bautista_Resume_copy.pdf"
                download="Michelle_Bautista_Resume.pdf"
                className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-blue-200 hover:bg-emerald-100"
              >
                <span className="block bg-[#121212] hover:bg-emerald-100 hover:text-black rounded-full px-5 py-2 text-white">
                  Download Resume
                </span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-4 place-self-center mt-4 sm:mt-0"
          >
            <div className="w-full h-auto relative">
              <Image
                src="/images/linkedin_pfp.jpeg"
                alt="hero image"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;