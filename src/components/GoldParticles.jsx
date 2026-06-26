"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "12%", top: "22%", size: 4, delay: 0 },
  { left: "22%", top: "68%", size: 3, delay: 0.4 },
  { left: "38%", top: "18%", size: 5, delay: 0.8 },
  { left: "58%", top: "72%", size: 3, delay: 1.1 },
  { left: "74%", top: "28%", size: 4, delay: 0.2 },
  { left: "86%", top: "58%", size: 5, delay: 0.7 },
];

export default function GoldParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#C6A15B]/45 shadow-[0_0_18px_rgba(198,161,91,0.45)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.18, 0.7, 0.18],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 4.5,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}