"use client";

import React from "react";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container ">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 pr-14 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[
              acmeLogo,
              apexLogo,
              celestialLogo,
              echoLogo,
              pulseLogo,
              quantumLogo,
              acmeLogo,
              apexLogo,
              celestialLogo,
              echoLogo,
              pulseLogo,
              quantumLogo,
            ].map((logo) => (
              <Image
                src={logo.src}
                key={logo.src}
                alt={logo.src}
                height={200}
                width={200}
                className="h-8 w-auto "
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
