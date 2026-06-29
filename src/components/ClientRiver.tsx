import React from "react";
import { motion } from "motion/react";

export const clientLogos = [
  "/logos/ASSEK_Logo.PNG-and-Transparent-2.png",
  "/logos/Bandari Beauty.jpg",
  "/logos/Beldinas Delicacies.png",
  "/logos/Design Source Logo.jpg",
  "/logos/IYBA Seed Logo.png",
  "/logos/Kenswed Organization Logo.png",
  "/logos/Kenya Climate Ventures Logo.png",
  "/logos/Kibeti Logo.png",
  "/logos/Kilimani Project Foundation Logo.png",
  "/logos/Kiota School Logo.png",
  "/logos/Little Einsteins Logo.png",
  "/logos/Luna Medical Spa Logo.jpg",
  "/logos/Luxe Nail Spa Logo.png",
  "/logos/Mofit Logo.png",
  "/logos/Olive Tree Media Logo.jpg",
  "/logos/Pivot Assets Logo.png",
  "/logos/St Hannahs  Logo.jpg",
  "/logos/Value 8 Logo.jpg",
  "/logos/eldohub logo.png",
  "/logos/six one Logo.jpg",
  "/logos/wylde-international Logo.png",
];

interface ClientRiverProps {
  logos?: string[];
  direction?: "left" | "right";
  speed?: "normal" | "slow";
}

export const ClientRiver: React.FC<ClientRiverProps> = ({
  logos = clientLogos,
  direction = "left",
  speed = "normal",
}) => {
  // Double the array to ensure smooth infinite scrolling with translateX(-50%)
  const scrollContent = [...logos, ...logos];

  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  const speedClass = speed === "slow" ? "duration-[60s]" : "";

  return (
    <div className="flex whitespace-nowrap overflow-hidden py-2">
      <div className={`flex ${animationClass} items-center`}>
        {scrollContent.map((logo, idx) => (
          <div
            key={`${logo}-${idx}`}
            className="w-20 md:w-28 mx-4 md:mx-6 flex-shrink-0 flex items-center justify-center h-10 md:h-12 group"
          >
            <img
              src={logo}
              alt="Client Logo"
              className="max-w-full max-h-full object-contain grayscale opacity-50 mix-blend-multiply transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
