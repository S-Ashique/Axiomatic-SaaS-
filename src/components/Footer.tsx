import React from "react";
import logo from "@/assets/logosaas.png";

import X from "@/assets/social-x.svg";
import Instagram from "@/assets/social-insta.svg";
import Youtube from "@/assets/social-youtube.svg";
import LinkedIn from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";


import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:absolute before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)]">
          <Image src={logo} alt="Saas logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <Link href={"/"} className=" ">
            About
          </Link>
          <Link href={"/"} className=" ">
            Features
          </Link>
          <Link href={"/"} className=" ">
            Customer
          </Link>
          <Link href={"/"} className=" ">
            Pricing
          </Link>
          <Link href={"/"} className=" ">
            Help
          </Link>
          <Link href={"/"} className=" ">
            Careers
          </Link>
        </nav>
        <div className="flex gap-6 justify-center mt-6">
          <X className="" />
          <Pin className="" />
          <LinkedIn className="" />
          <Youtube className="" />
          <Instagram className="" />
        </div>
        <p className="mt-6">&copy; 2024 Your company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
