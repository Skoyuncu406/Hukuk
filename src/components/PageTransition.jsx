"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 24,
        scale: 0.985,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <motion.div
        className="fixed left-0 top-0 z-[99998] h-[2px] bg-[#C6A15B]"
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{
          width: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            delay: 0.75,
            duration: 0.35,
          },
        }}
      />

      {children}
    </motion.main>
  );
}