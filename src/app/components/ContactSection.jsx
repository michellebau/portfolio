"use client"
import React from "react";
import GitHubIcon from "../../../public/icons8-github-blue.svg";
import LinkedInIcon from "../../../public/icons8-linkedin-blue.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div>
                <h5 className="text-3xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-white mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hello, I&apos;ll respond to your shortly!
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
            <div>
        
          <form className="flex flex-col" action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSflqs0freHfwp8matOfvNXojjw2mMtTak_iBomEjE3i3ssFhA/formResponse" method="POST" target="_blank">
            <div className="mb-6">
              <label
                for="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Full Name&#42;
              </label>
              <input
                type="text"
                name="entry.1307508684"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Michelle Bautista"
              />
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Email Address&#42;
              </label>
              <input
                type="text"
                name="entry.1122884648"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="michelle.bautista@organization.com"
              />
            </div>
            <div className="mb-6">
              <label
                for="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message&#42;
              </label>
              <textarea
                type="text"
                name="entry.1599772864"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              value="Submit"
              className="bg-blue-500 hover:bg-blue-100 text-white hover:text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        </section>
    );
};

export default ContactSection;
