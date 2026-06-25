"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider({ className = "" }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute inset-x-0 top-0 h-px origin-left bg-[#C6A15B]/25 ${className}`}
    />
  );
}