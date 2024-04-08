"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer w-full">
        <div className="flex justify-center items-center p-12 w-full text-white text-xs md:text-lg">
            <p>&#169; 2024 Michelle Bautista</p>
        </div>
    </footer>
  );
};

export default Footer;