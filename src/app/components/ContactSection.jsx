"use client"
import React from "react";
import GitHubIcon from "../../../public/icons8-github-blue.svg";
import LinkedInIcon from "../../../public/icons8-linkedin-blue.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-3xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-white mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/michellebau" target="_blank">
                        <Image src={GitHubIcon} alt="GitHub Icon"></Image>
                    </Link>
                    <Link href="https://www.linkedin.com/in/michelleabautista/" target="_blank">
                        <Image src={LinkedInIcon} alt="LinkedIn icon"></Image>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;