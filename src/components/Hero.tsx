"use client";
import React, { useRef } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <p className="tag">Version 2.0 is here</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-gradient-to-b from-black to-[#001e80] bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className=" btn btn-primary">
                <span>Get for free</span>
              </button>
              <button className="btn btn-text gap-1">
                <span> Learn more</span>
                <ArrowIcon className="size-5 " />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={CylinderImage.src}
              alt="CylinderImage"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY:translateY,
              }}
            />
            <motion.img
              src={NoodleImage.src}
              alt="Noodle Image"
              width={220}
              height={220}
              className="absolute lg:block top-[524px] left-[448px] hidden  "
              style={{
                rotate: 30,
                translateY:translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
