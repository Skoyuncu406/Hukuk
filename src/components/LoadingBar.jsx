"use client";

import { motion } from "framer-motion";

export default function LoadingBar() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[100000] h-[2px] bg-[#C6A15B]"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}